/**
 * 
 * @authors yuqiu (yuqiu_xa@netposa.com)
 * @date    2015-05-21 13:45:34
 * @version $Id$
 */

var through2 = require('through2');
var gutil = require('gulp-util');
var dots = require("dot").process({path: "./themes/views"});

function addHeader(){
	var onData = function(file, encoding, cb) {
		var fileContent = file.contents.toString();
		var header = dots.head({author: "yuqiu", description: "blog system"}) + '\n';
		var foot = dots.foot();
		var newFile = header.concat(fileContent,foot);
		var mdFile = new gutil.File({
			path: file.path,
        	contents: new Buffer(newFile)
     	 });
		this.push(mdFile);
		cb();
	};

	var onEnd = function(cb) {
		cb();
	};

	var retStream = through2.obj(onData, onEnd);
	return retStream;
 }

module.exports = addHeader;

