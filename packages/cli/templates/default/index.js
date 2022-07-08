// Copyright (c) 2022 Unately
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const hellotypes = ['Hello', 'Howdy', 'Jello'];
/**
 * @param  {array} items - Array of items to choose from a random item will be returned
 */
function random_item(items) {
	return items[Math.floor(Math.random() * items.length)];
}
/**
 * @param  {array} script - Array of lines to be executed
 */
function talk(script) {
	console.log(random_item(script) + ' World');
}

talk(hellotypes);
