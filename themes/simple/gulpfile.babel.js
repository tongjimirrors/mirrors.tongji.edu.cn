import gulp from 'gulp';
import svgmin from 'gulp-svgmin';
import iconfont from 'gulp-iconfont';
import nunjucks from 'gulp-nunjucks';

const iconTimestamp = ~~(Date.now() / 1000);

gulp.task('fe:iconfont', () => {
  return gulp
    .src('ui/misc/icons/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('ui/misc/icons'))
    .pipe(iconfont({
      fontHeight: 1000,
      prependUnicode: false,
      descent: 6.25 / 100 * 1000,
      fontName: 'webicons',
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
      timestamp: iconTimestamp,
    }))
    .on('glyphs', (glyphs, options) => {
      gulp
        .src(`ui/misc/icons/template/*.styl`)
        .pipe(nunjucks.compile({ glyphs, options }))
        .pipe(gulp.dest('ui/misc/.iconfont'));
    })
    .pipe(gulp.dest('ui/misc/.iconfont'));
});
