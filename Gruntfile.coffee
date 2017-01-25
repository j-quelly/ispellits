module.exports = (grunt) ->
	grunt.initConfig
		path: require "path"
		client: "1.1.2"
		server: "1.0.0"

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
					'README.md' : 'README.md',
				options:
					replacements: [
						{
							pattern: /("version": "(\d){1,}\.(\d){1,}\.(\d){1,}")/ig,
							replacement: '"version": "<%= client %>"'
						},
						{
							pattern: /(- Client: (\d){1,}\.(\d){1,}\.(\d){1,})/ig,
							replacement: '- Client: <%= client %>'
						},						
					]		
			server:
				files:
					'src<%= path.sep %>server<%= path.sep %>package.json' : 'src<%= path.sep %>server<%= path.sep %>package.json',
					'package.json' : 'package.json',
					'README.md' : 'README.md',
				options:
					replacements: [
						{
							pattern: /("version": "(\d){1,}\.(\d){1,}\.(\d){1,}")/ig,
							replacement: '"version": "<%= server %>"'
						},
						{
							pattern: /(- Server: (\d){1,}\.(\d){1,}\.(\d){1,})/ig,
							replacement: '- Server: <%= server %>'
						},					
					]	

	# require our tasks
	grunt.loadNpmTasks "grunt-string-replace"

	# register our grunt tasks
	grunt.registerTask("bump", ["string-replace:client", "string-replace:server"])