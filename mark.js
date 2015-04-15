/**
 *
 * @authors yuqiu (yuqiu_xa@netposa.com)
 * @date    2015-04-10 15:20:23
 * @version $Id$
 */

var marked = require('marked');
var gutil = require('gulp-util');
var path = require('path');

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});

function translatedMd(content) {
	var file = new gutil.File({
		base: path.join(__dirname, './test/'),
		cwd: __dirname,
		path: path.join(__dirname, './test/test.html'),
		contents: new Buffer(marked(content))
	});

	return file;
}

module.exports = translatedMd;