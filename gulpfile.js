var gulp = require('gulp');
var del = require('del');
var fs = require('fs');
var util = require('gulp-util');
var ts = require('gulp-typescript');
var rename = require('gulp-rename');
var tsProject = ts.createProject('tsconfig.json');
var args = require('yargs').argv;
var parser = require('templatestring');

var envConf = util.env.conf || 'dev';

gulp.task('default', ['only-tsc']);

gulp.task('only-tsc', ['features'], function () {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('dist'));
});

gulp.task('features', ['parse-templates'], function () {
  return gulp.src(['build/**/*.feature'])
    .pipe(gulp.dest('dist'))
});

gulp.task('parse-templates', ['generate:tsc'], function () {
  var env = JSON.parse(fs.readFileSync(`src/params/${envConf}.json`).toString());
  var targetDir = `build/test/features`;

  if (fs.existsSync(targetDir)) {
    if (fs.existsSync(targetDir)) {
      fs.readdirSync(targetDir).forEach(function (file, index) {
        var curPath = targetDir + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          deleteFolder(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }

    fs.mkdirSync(targetDir);
  } else {
    fs.mkdirSync(targetDir);
  }

  fs.readdirSync('templates')
    .filter(file => file.endsWith('.feature'))
    .forEach(file => {
      var filePath = `${targetDir}/${file}`

      if (!fs.existsSync(filePath)) {
        var template = fs.readFileSync(`templates/${file}`).toString()
        var templateFile = parser(template, env);
        fs.writeFileSync(filePath, templateFile);
      }
    })

});

gulp.task('generate:tsc', ['init-folders', 'pre-build', 'rename-conf'], function () {
  if (args.dev) {
    tsProject.config.exclude.push('test/**/*.spec.ts');
  } else {
    tsProject.config.exclude.push('test/debugspec.ts');
  }
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('dist'));
});

gulp.task('init-folders', ['clean'], function () {
  return fs.mkdir('./reports/');
});

gulp.task('clean', function () {
  return del(['./dist/', './build/', './reports/']);
});

gulp.task('pre-build', ['clean'], function () {
  return gulp.src(['src/**/*.ts', 'test/**/*.ts'], {
    base: './'
  })
    .pipe(gulp.dest('build'))
});

gulp.task('rename-conf', ['pre-build'], function () {
  var conf = 'config/conf.' + envConf + '.ts';
  if (fs.existsSync(conf)) {
    return gulp.src(conf)
      .pipe(rename('conf.ts'))
      .pipe(gulp.dest('build'))
  } else {
    files = [];
    fs.readdirSync('config/').forEach(file => {
      files.push(" " + file);
    })
    throw new Error("Invalid conf file. Try this:" + files);
  }
});