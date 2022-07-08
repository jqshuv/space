// Copyright (c) 2022 Unately
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const hellotypes = ['Hello', 'Howdy', 'Jello'];

function random_item(items) {
	return items[Math.floor(Math.random() * items.length)];
}

function talk(script) {
	console.log(random_item(script) + ' World');
}

talk(hellotypes);
