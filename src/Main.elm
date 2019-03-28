port module Main exposing (main)

import Cli.Option as Option
import Cli.OptionsParser as OptionsParser
import Cli.Program as Program
import Dict
import Elm.Parser
import Elm.Processing
import Json.Decode as D
import Json.Decode.Extra as JDE
import Json.Encode as E
import Result.Extra
import Set
import StateMachine exposing (Allowed, State(..), map, untag)
import String.Format
import Task


type alias Options =
    { inputFiles : List String
    }


config : Program.Config Options
config =
    Program.config
        |> Program.add
            (OptionsParser.build Options
                |> OptionsParser.withRestArgs (Option.restArgs "INPUTFILES")
            )


type Model
    = Starting (State { readingFile : Allowed } { files : List String })
    | ReadingFile (State { writingFile : Allowed } { files : List String, file : String })
    | WritingFile (State { exiting : Allowed } { files : List String })
    | Exiting (State {} {})


toStarting : { files : List String } -> Model
toStarting state =
    Starting <| State state


toReadingFile : State { a | readingFile : Allowed } { files : List String, file : String } -> Model
toReadingFile (State state) =
    ReadingFile <| State state


toWritingFile : State { a | writingFile : Allowed } { files : List String } -> Model
toWritingFile (State state) =
    WritingFile <| State state


toExiting : State { a | exiting : Allowed } {} -> Model
toExiting (State state) =
    Exiting <| State {}


message : msg -> Cmd msg
message msg =
    Task.perform identity (Task.succeed msg)


init : Program.FlagsIncludingArgv flags -> Options -> ( Model, Cmd Response )
init flags options =
    ( toStarting { files = options.inputFiles }, Cmd.none )


parse : String -> String
parse input =
    case Elm.Parser.parse input of
        Err e ->
            "Failed: " ++ Debug.toString e

        Ok v ->
            let
                context =
                    Elm.Processing.init

                file0 =
                    Elm.Processing.process context v

                declarations0 =
                    file0.declarations

                comments0 =
                    file0.comments

                -- records =
                --     case declaration of
                --         AliasDeclaration alias ->
                -- recordDeclarations =
                --     declarations0 |> List.filterMap records
                file1 =
                    { file0 | declarations = declarations0, comments = comments0 }
            in
            "Success: " ++ Debug.toString v


update : Options -> Response -> Model -> ( Model, Cmd Response )
update _ msg model =
    (case Debug.log (Debug.toString msg) ( model, msg ) of
        ( _, Stderr stderr ) ->
            Err stderr

        ( Starting (State { files }), NoOp ) ->
            case files of
                file :: moreFiles ->
                    Ok ( toReadingFile <| State <| { files = moreFiles, file = file }, fileReadRequest file )

                [] ->
                    Ok ( toExiting <| State <| {}, Cmd.none )

        ( ReadingFile ((State { files, file }) as state), Stdout content0 ) ->
            let
                content1 =
                    content0
            in
            Ok ( toWritingFile <| State { files = files }, fileWriteRequest file content1 )

        ( WritingFile (State state), NoOp ) ->
            Ok ( toStarting state, Cmd.none )

        ( state, cmd ) ->
            let
                _ =
                    Debug.log "( state, cmd )" ( state, cmd )
            in
            Err "Invalid State Transition"
    )
        |> Result.Extra.extract (\err -> ( model, exit 1 err ))



-- Ports
-- Request


port request : E.Value -> Cmd msg


fileReadRequest : String -> Cmd msg
fileReadRequest file =
    request <|
        E.object
            [ ( "command", E.string "FileRead" )
            , ( "file", E.string file )
            ]


fileWriteRequest : String -> String -> Cmd msg
fileWriteRequest file content =
    request <|
        E.object
            [ ( "command", E.string "FileWrite" )
            , ( "file", E.string file )
            , ( "content", E.string content )
            ]



-- fileListRequest : List String -> String -> Cmd msg
-- fileListRequest cwd glob =
--     request <|
--         E.object
--             [ ( "command", E.string "FileList" )
--             , ( "cwd", E.list E.string cwd )
--             , ( "glob", E.string glob )
--             ]


echoRequest : String -> Cmd msg
echoRequest text =
    request <|
        E.object
            [ ( "command", E.string "Echo" )
            , ( "message", E.string text )
            ]


shellRequest : String -> Cmd msg
shellRequest cmd =
    request <|
        E.object
            [ ( "command", E.string "Shell" )
            , ( "cmd", E.string cmd )
            ]


exit : Int -> String -> Cmd msg
exit exitCode text =
    request <|
        E.object
            [ ( "command", E.string "Exit" )
            , ( "exitCode", E.int exitCode )
            , ( "message", E.string text )
            ]



-- Response


type Response
    = NoOp
      -- | FileList (List String)
    | Stdout String
    | Stderr String


port rawResponse : (D.Value -> msg) -> Sub msg


response : Sub Response
response =
    Sub.map (D.decodeValue decoder >> Result.mapError (Stderr << D.errorToString) >> Result.Extra.merge) (rawResponse identity)


decoder : D.Decoder Response
decoder =
    D.oneOf
        [ D.field "code" D.int
            |> D.andThen
                (\i ->
                    if i == 0 then
                        D.fail "never mind, move along"

                    else
                        D.map Stderr <| JDE.withDefault "No stderr available" <| D.field "stderr" D.string
                )

        -- , D.map FileList (D.field "fileList" (D.list D.string))
        , D.map Stdout (D.field "stdout" D.string)
        , D.map Stderr (D.succeed "could not match response")
        ]


subscriptions : Model -> Sub Response
subscriptions model =
    response


main : Program.StatefulProgram Model Response Options {}
main =
    Program.stateful
        { printAndExitFailure = exit 1
        , printAndExitSuccess = exit 0
        , init = init
        , config = config
        , update = update
        , subscriptions = subscriptions
        }
