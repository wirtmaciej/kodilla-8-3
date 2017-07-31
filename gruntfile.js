module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	jshint: {
      all: ['js/*.js']
    },

	sass: {
      	options: {
        	sourceMap: true
      	},
      	dist: {
        	files: {
          		'style.css': 'style.scss'
        	}
      	}
    },

    watch: {
    	scripts: {
        	files: ['**/*.scss'],
        	tasks: ['sass'],
        	options: {
            	spawn: false,
        	}
    	}
	}

  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ["jshint", "sass", "watch"]);

};