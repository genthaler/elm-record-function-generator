# elm-record-function-generator

Generate getters, setters and mappers for Elm records

## Options:
- **input file**
- input folder
- output file
    - default to same file with comment delimiters
- output folder
    - option to add to elm.json/source
    - no namespace conflict?
- naming convention
    - Maybe give name style as regex capture groups

## Functions to generate:
``` elm
mapRecordnamePropertyname : (Propertytype -> Propertytype) -> Recordtype -> Recordtype
mapNRecordnamePropertyname : (Propertytype -> Propertytype -> Propertytype) -> Recordtype -> Recordtype
getRecordnamePropertyname : Recordtype -> Propertytype -- synonym for Elm record property accessor function e.g. .id
setRecordnamePropertyname : Propertytype -> Recordtype -> Recordtype -- `mapRecordnamePropertyname (always propertyValue)`
```
## To do

- Use elm-ast to pull out record definitions
- Provide instructions on how to clone and customize for github & npm

