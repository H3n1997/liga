var gulp=require('gulp');
var stylus=require('gulp-stylus');
var vinyl=require('vinyl-source-stream');
var browserify=require('browserify');

gulp.task('css',function(){
	gulp.src('./dev/stylus/app.styl')
	  .pipe(stylus({'include css':true}))
	  .pipe(gulp.dest('./res/css/'))
});

gulp.task('js',function(){
	browserify('./dev/js/index.js')
	.bundle()
	.pipe(vinyl('index.js'))
	.pipe(gulp.dest('./res/js/'))
});

gulp.task('default',['css','js']);