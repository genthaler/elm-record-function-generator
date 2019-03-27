module Supervisor.Options exposing (config)

import Cli.Option as Option
import Cli.OptionsParser as OptionsParser
import Cli.Program as Program
import Supervisor.Model exposing (..)
import Supervisor.Package exposing (..)

 
config : Program.Config CliOptions
config =
    Program.config { version = cucumberVersionString }
        |> Program.add
            (OptionsParser.build InitOptions
                |> OptionsParser.with
                    (Option.optionalKeywordArg "input"
                        |> Option.validateMapIfPresent Ok
                    )
                |> OptionsParser.with
                    (Option.optionalKeywordArg "tags"
                        |> Option.validateMapIfPresent Ok
                    )
                |> OptionsParser.with (Option.optionalKeywordArg "compiler")
                |> OptionsParser.with (Option.optionalKeywordArg "add-dependencies")
                |> OptionsParser.with (Option.flag "watch")
                |> OptionsParser.with
                    (Option.optionalKeywordArg "report"
                        |> Option.withDefault "console"
                        |> Option.oneOf Console
                            [ ( "json", Json )
                            , ( "junit", Junit )
                            , ( "console", Console )
                            ]
                    )
                |> OptionsParser.withRestArgs (Option.restArgs "TESTFILES")
                |> OptionsParser.map Init
            )