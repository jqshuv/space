#!/usr/bin/env node

// Copyright (c) 2022 Unately
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { resolve } from 'path';
import { create } from 'create-create-app';

create('create-greet', {
	templateRoot: resolve(__dirname, '..', 'templates'),
	extra: {
		repository: {
			type: 'input',
			describe: 'Repository URL (without trailing slash)',
			default: 'https://github.com/jqshuv/space',
			prompt: 'if-no-arg',
		},
	},
	after: async ({ installNpmPackage }) => {
		console.log('Installing additional packages');
		await installNpmPackage('@commitlint/cli', true);
		await installNpmPackage('@commitlint/config-conventional', true);
		await installNpmPackage('husky', true);
		await installNpmPackage('typescript', true);
		await installNpmPackage('vitest', true);
		await installNpmPackage('execa', true);
	},
	defaultPackageManager: 'pnpm',
	defaultLicense: 'MIT',
	promptForTemplate: true,
	promptForPackageManager: true,
	caveat: `Your app has been created successfully!`,
});