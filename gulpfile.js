const gulp = require('gulp');
const server = require('gulp-webserver');
const data = require('./cmy/data/data.json');
gulp.task('default', ['web']);
gulp.task('web', () => {
    gulp.src('./cmy')
        .pipe(server({
            port: 3000,
            open: true,
            livereload: true,
            middleware: (req, res, next) => {
                if (req.url === '/data') {
                    res.end(JSON.stringify(data));
                } else {
                    next();
                }
            }
        }))
})