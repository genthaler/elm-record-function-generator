# elm-rules

Rewrite Elm code using Rules

Based on [Haskell's RULES](https://wiki.haskell.org/GHC/Using_rules)

## Options:
- **input files**
- input folder
- output file
    - default to same file with comment delimiters
- output folder
    - option to add to elm.json/source
    - no namespace conflict?
- naming convention
    - Maybe give name style as regex capture groups

## Rules
### Record setter functions
``` elm
mapRecordnamePropertyname : (Propertytype -> Propertytype) -> Recordtype -> Recordtype
mapNRecordnamePropertyname : (Propertytype -> Propertytype -> Propertytype) -> Recordtype -> Recordtype
getRecordnamePropertyname : Recordtype -> Propertytype -- synonym for Elm record property accessor function e.g. .id
setRecordnamePropertyname : Propertytype -> Recordtype -> Recordtype -- `setRecordnamePropertyname = mapRecordnamePropertyname (always propertyValue)`
```

## To do
### Rules
- Point free
- Point full

###Misc
- Provide instructions on how to clone and customize for github & npm

