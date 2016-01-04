module.exports = function (grunt) {

  grunt.initConfig ({
    pkg : grunt.file.readJSON('package.json'),

    clean: {
      css: ['css'],
      temp: ['temp.css']
    },

    less:{
      app:{
        options: {
          paths: ['less']
        },
        files : {
          'css/lato.css': 'less/lato.less'
        }
      }
    },

    sass: {
      dist: {
        files: {
          'temp.css': 'scss/lato.scss'
        }
      }
    },

    stylus: {
      dist: {
        files: {
          'temp.css': 'stylus/lato.styl'
        }
      }
    },

    cssmin :{
      app : {
        files : {
          'css/lato.min.css': 'css/lato.css'
        }
      }
    }
  });

  // Load NPM Tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default Task Validates Less and Builds CSS for dist
  grunt.registerTask("default", ['clean', 'less', 'sass', 'stylus', 'cssmin', 'clean:temp']);
};
