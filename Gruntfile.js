module.exports = function(grunt) {
  var jsDevFiles = ['boilerplate/static/js/app.js'],
      cssDevFiles = ['boilerplate/static/css/style.scss'];

  grunt.initConfig({
    concat: {
      scripts: {
        src: jsDevFiles,
        dest: 'boilerplate/static/js/combined.js'
      }
    },
    uglify: {
      build: {
        src: 'boilerplate/static/js/combined.js',
        dest: 'boilerplate/static/js/combined_min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'boilerplate/static/css/style_built.css': 'boilerplate/static/css/style.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      build: {
        src: 'boilerplate/static/css/style_built.css',
        dest: 'boilerplate/static/css/style.css'
      }
    },
    watch: {
      scripts: {
        files: jsDevFiles,
        tasks: ['concat:scripts', 'uglify']
      },
      styles: {
        files: cssDevFiles,
        tasks: ['sass', 'autoprefixer']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', [
    'sass',
    'concat',
    'autoprefixer',
    'uglify'
  ]);
  grunt.registerTask('dev', ['default', 'watch']);
};
