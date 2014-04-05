# require-subdirectory

Recursively find and call `require` on all matching files in a subdirectory.

## Installation

```bash
npm install --save require-subdir
```

## Usage

1. Install using npm: `npm install require-subdir`
2. Include it in your source:

```js
const requireSubdir = require('require-subdir');

requireSubdir(SUBDIR_TO_INCLUDE, function(err, includes) {
  // includes is an array of included files.
  // each include contains two fields:
  // * path - full path to included file
  // * exports - the return value of `require`
  processIncludes(includes);
});
```

## Run the tests

```bash
npm test
```

## Get involved:

If you see any bugs or find any features you wish to add, submit a pull request!

## Repo information:

https://github.com/shane-tomlinson/require-subdirectory

## Author:
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* @shane_tomlinson

## License:
This software is available under version 2.0 of the MPL:

  https://www.mozilla.org/MPL/

