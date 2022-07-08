// Copyright (c) 2022 Joshua Schmitt
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const shelljs = require('shelljs');

if (!shelljs.which('sh')) {
	shelljs.echo('Sorry, this script requires sh');
	shelljs.exit(1);
}

// shelljs.cp('-r', './dist/create-nodespace-linux', 'sudo /usr/bin/create-nodespace');

shelljs.exec('./dist/create-nodespace-linux testRun');
shelljs.echo('y');
shelljs.echo('\n');
shelljs.echo('y');
shelljs.echo('\n');
shelljs.echo('y');
shelljs.echo('\n');
shelljs.echo('y');
shelljs.echo('\n');
shelljs.echo('y');
shelljs.echo('\n');
shelljs.echo('y');
shelljs.echo('\n');
shelljs.echo('y');
shelljs.echo('\n');
shelljs.exit(1);
