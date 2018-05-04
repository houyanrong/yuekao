var gulp = require('gulp');
var server = require('gulp-webserver');
var data = require('./src/mock/data.json');
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8081,
            open: true,
            middleware: function(req, res, next) {
                if (req.url == "/index") {
                    res.end(JSON.stringify(data))
                } else if (/\/api\/search/g.test(req.url)) {
                    console.log(22)
                }
                next();
            }
        }))
})