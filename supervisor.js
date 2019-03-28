#!/usr/bin/env node

const shell = require('shelljs')
const fs = require('fs')
const path = require('path')
const glob = require("glob")
const R = require('rambda')
const worker = require(path.resolve(__dirname, 'workerWorker.js'))

const workerWorker = worker.Elm.worker.Main.init({
  flags: {
    argv: process.argv
  }
})

const send = workerWorker.ports.rawResponse.send

workerWorker.ports.request.subscribe(
  cmd => {
    switch (cmd.command) {
      case "Echo":
        shell.echo(cmd.message)
        break

      case "FileRead":
        send(shell.cat(path.resolve.apply(null, cmd.paths)))
        break

      case "FileWrite":
        send(shell.echo(cmd.fileContent).to(path.resolve.apply(null, cmd.paths)))
        break

      case "FileList":
        glob(cmd.glob, { cwd: path.resolve.apply(null, cmd.cwd) }, (er, files) => {
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
