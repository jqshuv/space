// Copyright (c) 2024 Joshua Schmitt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


import { test, expect } from 'vitest';
import { execa } from 'execa';

test('should greet the world', async () => {
	const { stdout } = await execa('node', ['dist/index.js']);
	expect(stdout).toBe('Hello, world!');
});
