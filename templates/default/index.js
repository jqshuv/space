// Copyright (c) 2022 Unately
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const hellotypes = [ "Hello", "Howdy", "Jello" ];
/**
 * @param  {array} items
 */
function random_item(items) {
	return items[Math.floor(Math.random()*items.length)];
};
/**
 * @param  {string[]} hellos
 */
function talk(hellos) {
	console.log(`${random_item(hellos)} World`);
	
};

talk(hellotypes);