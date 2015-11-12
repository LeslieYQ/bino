/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-15 22:05:53
 * @version $Id$
 */
var exec =  require('child_process').exec;

exec('gulp article', function(err){
	if(err){
		console.log(err);
	}
})