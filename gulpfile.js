
// required ==========================================================
var gulp = require('gulp'),
    compass = require('gulp-compass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    bower = require('gulp-bower'),
    reload = browserSync.reload;

    // Gulp tasks ==========================================================
    gulp.task('bower-files', function() {
       return gulp.src(mainBowerFiles(), {base: 'bower_components'})
          .pipe(gulp.dest('app/vendor'))
    });

    gulp.task('bower', function() { 
        return bower()
             .pipe(gulp.dest('app/lib')) 
    });

    gulp.task('scripts', function() {
        return gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('app/js'))
    });

    gulp.task('html', function() {
        return gulp.src('app/**/*.html')
        .pipe(reload({ stream: true }))
    });

    gulp.task('compass', function() {
        gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
            .pipe(compass({
                config_file: './config.rb',
                css: 'app/css',
                sass: 'app/scss'
            }))

        .pipe(gulp.dest('app/css/'))
        .pipe(reload({ stream: true }))
    });

    gulp.task('browser-sync', function() {
        browserSync({
            server: {
                baseDir: 'app'
            },
        })
    });

    gulp.task('watch', function() {
        gulp.watch('app/scss/**/*.scss', ['compass']);
        gulp.watch('app/js/**/*.js', ['scripts']);
        gulp.watch('app/*.html', ['html']);
    });

    // Gulp default task ==========================================================
    gulp.task('default', ['compass', 'scripts', 'html', 'browser-sync', 'watch']);
