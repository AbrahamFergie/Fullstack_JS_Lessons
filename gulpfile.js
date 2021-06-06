const eslint = require("gulp-eslint");
const gulp = require("gulp");
const styleFmt = require("gulp-stylefmt");
const styleLint = require("gulp-stylelint");

const cssFiles = ["02-lesson-plans/**/*.css", "!**/*.min.css", "!**/reset.css"];

gulp.task("eslint", () =>
  gulp
    .src(["./01-Class-Content/**/*.{js,html}"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task("stylefmt", () =>
  gulp
    .src(cssFiles)
    .pipe(styleFmt())
    .pipe(gulp.dest("02-lesson-plans/"))
);

gulp.task("stylelint", () =>
  gulp.src(cssFiles).pipe(
    styleLint({
      reporters: [
        {
          formatter: "string",
          console: true
        }
      ]
    })
  )
);

gulp.task("autofix", ["stylefmt"]);

gulp.task("lint", ["stylelint", "eslint"]);

gulp.task("test", ["lint"]);
