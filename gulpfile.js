const gulp = require("gulp");
const css2js = require("gulp-css2js");
const concat = require('gulp-concat');
const streamQueue = require('streamqueue');

gulp.task('build', () => {
    const jsStream = gulp
        .src(['./src/disqus.js'])
        .pipe(concat('disqus.js'));

    const cssStream = gulp
        .src(['./src/disqus.css'])
        .pipe(css2js({
            prefix: `const css = "`,
            suffix: `";\n`
        }))
        .pipe(concat('disqus.css'));

    return streamQueue({ objectMode: true }, jsStream, cssStream)
        .pipe(concat('disqus.user.js'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', () => gulp.watch(['src/*'], (done) => gulp.series('build')() || done()));
