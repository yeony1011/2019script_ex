const gulp = require('gulp');
const babel = require('gulp-babel');
// 걸프 의존성 작성

gulp.task('default', async function(){
    // 노드 소스
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    // 브라우저 소스
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});