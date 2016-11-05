var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');

var tsProject = ts.createProject('./tsconfig.json', {
    typescript: require('typescript')
});

gulp.task("compile-ts", function () {
    var sourceTsFiles = ['./app/**/*.ts'];                //path to typescript files
    var tsResult = gulp.src(sourceTsFiles)
                            .pipe(sourcemaps.init())      // This means sourcemaps will be generated
                            .pipe(tsc(tsProject));

    tsResult.dts.pipe(gulp.dest('./Scripts'));
    return tsResult.js
                .pipe(sourcemaps.write('.'),
                {
                mapSources: function(sourcePath) {
                    conosole.log(sourcePath);
                    // source paths are prefixed with '../src/'
                    return '../src/' + sourcePath;
                }})            // Now the sourcemaps are added to the .js file
                .pipe(gulp.dest('./Scripts'));
    
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['compile-ts'], function () {
    return gulp.watch('app/**/*.ts', ['compile-ts']);
});

gulp.task('default', ['watch']);