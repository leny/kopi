#!/usr/bin/env node
/*
 * kopi
 * https://github.com/leny/kopi
 *
 * JS/COFFEE Document - /cli.js - cli entry point, commander setup and runner
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var chalk, cliparoo, error, fs, pkg, program, sFile, spinner;

pkg = require("../package.json");

fs = require("fs");

cliparoo = require("cliparoo");

chalk = require("chalk");

error = chalk.bold.red;

(spinner = require("simple-spinner")).change_sequence(["◓", "◑", "◒", "◐"]);

(program = require("commander")).version(pkg.version).usage("[options] <file>").description("Command-line tool to copy the content of a file to the clipboard.").option("-v, --verbose", "show the content of the file in the console").parse(process.argv);

if (!(sFile = program.args[0])) {
  console.log(error("✘ unknown file '" + sFile + "'."));
  process.exit(1);
}

spinner.start(50);

fs.readFile(sFile, {
  encoding: "utf-8"
}, function(oError, sData) {
  spinner.stop();
  if (oError) {
    console.log(error("✘ " + oError + "."));
    process.exit(1);
  }
  if (program.verbose) {
    console.log(sData);
  }
  cliparoo(sData);
  console.log(chalk.green("✔ Content of '" + sFile + "' copied to the clipboard."));
  return process.exit(0);
});
