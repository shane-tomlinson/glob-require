# glob-require

Use glob to find and call `require` on all matching files in a directory tree.

## Installation

```bash
npm install --save glob-require
```

## Usage

1. Install using npm: `npm install glob-require`
2. Include it in your source:

```js
const globRequire = require('glob-require');

// simple case, pass in a subdirectory to include to
// search for and require all .js files.
globRequire(SUBDIR_TO_INCLUDE, function(err, includes) {
  // includes is an array of included files.
  // each include contains two fields:
  // * path - full path to included file
  // * exports - the return value of `require`
  processIncludes(includes);
});
```

```js
const globRequire = require('glob-require');

// advanced case, pass a 'glob' pattern and configuration object.
// See https://github.com/isaacs/node-glob#options for a list of options.
globRequire('**/*.js', {
  cwd: SUBDIR_TO_INCLUDE
}, function(err, includes) {
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

If you find a bugs or see any features you wish to add, file an issue or submit a pull request!

## Repo information:

https://github.com/shane-tomlinson/glob-require

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

