module.exports = (grunt) ->
	grunt.initConfig
		path: require "path"
		client: "0.10.0"
		server: "0.7.0"

		# list our available tasks
		availabletasks:
			tasks:
				options:
					filter: "include", 
					tasks: [ 
						"string-replace"
					]
					descriptions:
						"string-replace:server": "Version bump server"
						"string-replace:client": "Version bump client"
				



		# used for version bumping
		'string-replace':
			client:
				files:
					'src<%= path.sep %>client<%= path.sep %>package.json' : 'src<%= path.sep %>client<%= path.sep %>package.json',
					'readme.md' : 'readme.md',
				options:
					replacements: [
						{
							pattern: /("version": "[0-9].[0-9].[0-9]")/ig,
							replacement: '"version": "<%= client %>"'
						},
						{
							pattern: /(- Client: [0-9].[0-9].[0-9])/ig,
							replacement: '- Client: <%= client %>'
						},						
					]		
			server:
				files:
					'src<%= path.sep %>server<%= path.sep %>package.json' : 'src<%= path.sep %>server<%= path.sep %>package.json',
					'package.json' : 'package.json',
					'readme.md' : 'readme.md',
				options:
					replacements: [
						{
							pattern: /("version": "[0-9].[0-9].[0-9]")/ig,
							replacement: '"version": "<%= server %>"'
						},
						{
							pattern: /(- Server: [0-9].[0-9].[0-9])/ig,
							replacement: '- Server: <%= server %>'
						},					
					]	

	# require our tasks
	grunt.loadNpmTasks "grunt-string-replace"

	# register our grunt tasks
	grunt.registerTask("bump", ["string-replace:client", "string-replace:server"])