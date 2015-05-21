/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-15 22:05:53
 * @version $Id$
 */


var gulp = require('gulp');
var readMd = require('./readMd');
var addHeader = require('./dot');

gulp.src('_post/*.md').pipe(readMd()).pipe(addHeader()).pipe(gulp.dest('publish/'));