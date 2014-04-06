/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const path = require('path');
const assert = require('chai').assert;

const globRequire = require('../index');

const FIXTURES_PATH = path.join(__dirname, 'fixtures');

describe('glob-require', function () {
  describe('simple case', function () {
    it('requires all .js files in the given subdirectory', function (done) {
      globRequire(FIXTURES_PATH, function (err, includes) {
        assert.isNull(err);

        assert.equal(includes.length, 2);

        assert.equal(path.relative(__dirname, includes[0].path), 'fixtures/require1.js');
        assert.equal(includes[0].exports, 'require1');

        assert.equal(path.relative(__dirname, includes[1].path), 'fixtures/subdir/require2.js');
        assert.equal(includes[1].exports, 'require2');

        done();
      });
    });
  })

  describe('advanced case', function () {
    it('takes a pattern and a glob configuration object to find files', function (done) {
      globRequire('*.js', { cwd: FIXTURES_PATH }, function (err, includes) {
        assert.isNull(err);

        assert.equal(includes.length, 1);

        assert.equal(path.relative(__dirname, includes[0].path), 'fixtures/require1.js');
        assert.equal(includes[0].exports, 'require1');

        done();
      });
    });
  });
});

