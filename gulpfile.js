var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var renderArticle = require('./dot');
var readMd = require('./readMd');	

gulp.task('clean', function() {
    return gulp.src('publish/').pipe(plugins.clean());
});

gulp.task('article',['clean'], function(){
	gulp.src('_post/*.md').pipe(readMd()).pipe(renderArticle()).pipe(gulp.dest('publish/article/'));
})

	