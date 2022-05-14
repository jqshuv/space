#!/usr/bin/env node

// Copyright (c) 2022 Unately
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


const { resolve } = require('path');
const { create } = require('create-create-app');

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = `
This is a caveat!
You can change this in \`src/cli.js\`.
`;

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create('create-unodespace', {
  templateRoot,
  promptForTemplate: true,
  extra: {
    contact_email: {
      type: 'string',
      describe: 'The email address of the contact person for this project',
      prompt: 'always',
    },
    twitter_name: {
      type: 'string',
      describe: 'Your Twitter username for the Readme',
      prompt: 'always',
    },
    repository: {
      type: 'string',
      describe: 'The repository URL for this project (without the .git)',
      prompt: 'always',
    },
  },
  after: ({ answers }) => console.log(`Ok you chose ${answers.contact_email}.`),
  caveat,
});
