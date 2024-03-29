#!/usr/bin/env node

const meow = require('meow');
const moments = require('./src/moments.js');

const cli = meow(
    `
    ❯ moments --help

      Usage
        ❯ moments [path] [Default '.']

      Examples
        ❯ moments ./exported
        ✔ 2019-06-25
        ✔ 2019-06-26 - Riverside - Glasgow, Scotland
        ✔ 2019-06-27 - Ad Lib - Merchant City - Ingram Street
        ✔ 2019-06-28 - Walk In The Park
    `
);

const path = cli.input[0] || '.';
moments(path);
