/**
 * 
 * @authors yuqiu (yuqiu_xa@netposa.com)
 * @date    2015-05-21 13:45:34
 * @version $Id$
 */

var through2 = require('through2');
var gutil = require('gulp-util');
var nunjucks = require("nunjucks");
nunjucks.configure('themes/views', { autoescape: true });

function renderArticle(){
	var onData = function(file, encoding, cb) {
		var fileContent = file.contents.toString();
		var newFile = nunjucks.render('article/index.html',{
			author: 'yuqiu',	
			description: 'hahah',
			article: fileContent
		});
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

module.exports = renderArticle;

