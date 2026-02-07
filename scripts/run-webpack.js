#!/usr/bin/env node

const crypto = require('crypto');

const originalCreateHash = crypto.createHash;

// Webpack 4 requests MD4 which OpenSSL 3+ no longer supports. Remap to MD5.
crypto.createHash = (algorithm, options) =>
  originalCreateHash.call(
    crypto,
    algorithm === 'md4' ? 'md5' : algorithm,
    options
  );

require('webpack/bin/webpack');
