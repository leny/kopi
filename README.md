# kopi

[![NPM version](http://img.shields.io/npm/v/kopi.svg)](https://www.npmjs.org/package/kopi) ![Dependency Status](https://david-dm.org/leny/kopi.svg) ![Downloads counter](http://img.shields.io/npm/dm/kopi.svg)

> Command-line tool to copy the content of a file to the clipboard.

* * *

## Usage

### Installation

To use **kopi** as a command-line tool, it is preferable to install it globally.

    (sudo) npm install -g kopi

### Usage

Using **kopi** is simple, from inside a `git` or `mercurial` repo:

    kopi [options] <file>

    Options:

        -h, --help             output usage information
        -V, --version          output the version number
        -v, --verbose          show the content of the file in the console

#### Options

##### help (`-h`,`--help`)

Output usage information.

##### version (`-V`,`--version`)

Output **kopi**' version number.

##### verbose (`-v`,`--verbose`)

By default, **kopi** will just copy the content of the given file in the clipboard. The `verbose` option will also write the content of the file to the console.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint your code using [Grunt](http://gruntjs.com/).

## Release History

* **0.1.0**: Initial release (*17/12/14*)

## License
Copyright (c) 2014 Leny  
Licensed under the MIT license.
