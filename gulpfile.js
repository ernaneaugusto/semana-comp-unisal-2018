var gulp = require("gulp");
var sass = require("gulp-sass");

var pastaSCSS = ["./scss/*.scss"];
var pastaCSS = "./css/";

gulp.task("sass", function () {
    return gulp.src(pastaSCSS)
        .pipe(sass())
        .pipe(gulp.dest(pastaCSS));
});

gulp.task("sass-watch", function () {
    gulp.watch(pastaSCSS, ["sass"]);
});

/*
tsr o comando "gulp" pelo terminal na pasta raiz do projeto
 */
gulp.task("default", ["sass", "sass-watch"]);