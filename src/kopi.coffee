###
 * kopi
 * https://github.com/leny/kopi
 *
 * JS/COFFEE Document - /cli.js - cli entry point, commander setup and runner
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

pkg = require "../package.json"

fs = require "fs"
cliparoo = require "cliparoo"
chalk = require "chalk"
error = chalk.bold.red
( spinner = require "simple-spinner" )
    .change_sequence [
        "◓"
        "◑"
        "◒"
        "◐"
    ]

( program = require "commander" )
    .version pkg.version
    .usage "[options] <file>"
    .description "Command-line tool to copy the content of a file to the clipboard."
    .option "-v, --verbose", "show the content of the file in the console"
    .parse process.argv

unless sFile = program.args[ 0 ]
    console.log error "✘ unknown file '#{ sFile }'."
    process.exit 1

spinner.start 50

fs.readFile sFile, { encoding: "utf-8" }, ( oError, sData ) ->
    spinner.stop()

    if oError
        console.log error "✘ #{ oError }."
        process.exit 1

    console.log sData if program.verbose

    cliparoo sData

    console.log chalk.green "✔ Content of '#{ sFile }' copied to the clipboard."

    process.exit 0
