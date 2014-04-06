/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Use glob to find files to require.

const glob = require('glob');
const path = require('path');

'use strict';

module.exports = function (pattern, options, done) {
  // advanced case by default, simple case if only two options passed.
  if (typeof done === 'undefined' && typeof options === 'function') {
    done = options;
    options = {
      cwd: pattern
    };
    pattern = '**/*.js';
  }

  var cwd = options.cwd || __dirname;

  glob(pattern, options, function (err, found) {
    if (err) return done(err);

    var loadedFiles = found.map(function(file) {
      var fullPath = path.join(cwd, file);
      return {
        path: fullPath,
        exports: require(fullPath)
      };
    });

    done(null, loadedFiles);
  });
};
