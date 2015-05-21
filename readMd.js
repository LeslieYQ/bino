/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-15 22:14:01
 * @version $Id$
 */

var through2 = require('through2');
var path = require('path');
var translatedMd = require('./mark');
var gutil = require('gulp-util');


function readMd(){
	var onData = function(file, encoding, cb) {
		var fileContent = file.contents.toString();
		var fileName = path.relative(file.base, file.path).split('.')[0];
		var newFile = translatedMd(fileContent);
		var mdFile = new gutil.File({
        	path: fileName + '.html',
        	contents: new Buffer(newFile.contents.toString())
     	 });
		this.push(mdFile);
		//console.log(newFile);
		//console.log(this.contents);
		cb();
	};

	var onEnd = function(cb) {
		cb();
	};

	var retStream = through2.obj(onData, onEnd);
	return retStream;
 }

module.exports = readMd;
