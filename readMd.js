/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-15 22:14:01
 * @version $Id$
 */

var through2 = require('through2');
var path = require('path');
var Readable = require('stream').Readable;
var translatedMd = require('./mark');


function readMd(){
	var onData = function(file, encoding, cb) {
		var fileContent = file.contents.toString();
		var newFile = translatedMd(fileContent);
		this.push(newFile);
		console.log(this._readableState.buffer.toString());
		cb();
	};

	var onEnd = function(cb) {
		cb();
	};

	var retStream = through2.obj(onData, onEnd);
	return retStream;
 }

module.exports = readMd;
