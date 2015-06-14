// including plugins
var gulp = require('gulp')
    ,minifyHtml = require("gulp-minify-html");

// task
gulp.task('minify-html', function () {
    gulp.src('./*.html') // path to your files
        .pipe(minifyHtml({collapseWhitespace: true}))
        .pipe(gulp.dest('.'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('build', ['minify-html']);