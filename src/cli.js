#!/usr/bin/env node

const { resolve } = require('path');
const { create } = require('create-initializer');

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = `
This is a caveat!
You can change this in \`src/cli.js\`.
`;

// See https://github.com/ClassicOldSong/create-initializer/blob/master/README.md for the full option list.

create('create-unodespace', {
  templateRoot,
  defaultTemplate: 'my-template',
  templatePrefix: 'template-',
  extra: {
    architecture: {
      type: 'list',
      describe: 'choose your fave os',
      choices: ['macOS', 'Windows', 'Linux'],
      prompt: 'if-no-arg',
    },
  },
  after: ({ answers }) => console.log(`Ok you chose ${answers.architecture}.`),
  caveat,
});
