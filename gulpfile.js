import gulp from "gulp";
const { src, dest, series } = gulp;
import del from "del";
import image from "gulp-image"
import pug from "gulp-pug";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename"
import babel from "gulp-babel";

function clean(){
    return del("gulp");
}

function gulp_image(){
    return src("public/image/*.jpg")
        .pipe(image())
        .pipe(dest("gulp/public/image"))
}

function gulp_json(){
    return src("public/json/*.json")
        .pipe(dest("gulp/public/json"))
}

function gulp_pug(){
    return src("public/pug/*.pug")
        .pipe(dest("gulp/public/pug"))
        .pipe(pug())
        .pipe(dest("gulp/public/pug"))
}

function gulp_sass(){
    return src("public/sass/*.sass")
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(dest("gulp/public/sass"))
}

function gulp_cert(){
    return src("public/cert/*")
        .pipe(dest("gulp/public/cert"))
}

function gulp_app(){
    return src("app.js")
        .pipe(babel())
        //.pipe(rename("app.cjs"))
        .pipe(dest("gulp"))
}

function gulp_router(){
    return src("router.js")
        .pipe(babel())
        //.pipe(rename("router.cjs"))
        .pipe(dest("gulp"))
}

export var my_series = series(clean, gulp_image, gulp_json, gulp_pug, gulp_sass, gulp_cert, gulp_app, gulp_router);