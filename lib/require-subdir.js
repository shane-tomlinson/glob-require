/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Require all js files in a subdirectory.

const glob = require('glob');
const path = require('path');

'use strict';

module.exports = function (cwd, done) {
  glob('**/*.js', {
    cwd: cwd
  }, function (err, found) {
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
