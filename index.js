#!/usr/bin/env node

const shell = require('shelljs')
const path = require('path')
const glob = require("glob")
const rules = require(path.resolve(__dirname, 'rules.js'))
const package = require(path.resolve(__dirname, 'package.json'))

const rulesWorker = rules.Elm.Main.init({
  flags: {
    argv: process.argv,
    versionMessage: package.version
  }
})

const send = rulesWorker.ports.rawResponse.send

rulesWorker.ports.request.subscribe(
  cmd => {
    switch (cmd.command) {
      case "Echo":
        shell.echo(cmd.message)
        break

      case "FileRead":
        send(shell.cat(path.resolve(cmd.file)))
        break

      case "FileWrite":
        send(shell.ShellString(cmd.content).to(path.resolve(cmd.file)))
        break

      case "FileList":
        glob(cmd.glob, { cwd: path.resolve(cmd.cwd) }, (er, files) => {
          if (er == null) {
            send({
              code: 0,
              fileList: files
            })
          } else {
            send({
              code: 1,
              stderr: er.message
            })
          }
        })
        break

      case "Shell":
        send(shell.exec(cmd.cmd))
        break

      case "Exit":
        shell.echo(cmd.message)
        shell.exit(cmd.exitCode)
        break

      default:
        send({
          exitCode: 1,
          stderr: cmd.command + " sent on the wrong port"
        })
        break
    }
  })
