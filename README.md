# I-Spell-It
A spin on the classic hangman game, built with React [https://ispellits.herokuapp.com/](https://ispellits.herokuapp.com/)

### Current Version
- Server: 0.6.0
- Client: 0.1.0

## Getting Started
$ npm run dev server

## Changelog

### Game Core
- [x] display the alphabet
- [x] end the game when 0 lives 
- [x] end the game when no words
- [x] change to another word
- [x] display error message
- [x] score
- [x] lives
- [x] improve scoring
- [x] score screen after each word?
- [x] add word clues?
- [x] improve word clues?
- [x] improve rules screen at start of the game
- [x] change array of words to a proper dictionary? [{'derp': 'derp'},{'derp': 'derp'}] 
- [x] add additional lives for n # of points?
- [x] user input when game ends
- [x] then take the user to highscore page    
- [x] confirm the use of arrow functions (to bind the React object to the method)
- [x] confirm use of bind (to bind the React object to the component)
- [x] add round score to score screen
- [x] allow user to play again
 
### Server
- [x] express server (using fsr template) [11/3/2016]
	- [x] update to deploy with heroku [11/4/2016]
- [x] db of some kind (using sqlite) [11/3/2016]
	- [x] update to deploy with heroku [11/4/2016]
		- [x] then change db to mongodb [11/4/2016]
- [x] make sure server is mostly es6 [11/8/2016]
	- [x] can probably still improve on this [11/11/2016]
- [x] remove any unused middleware and dependencies [11/8/2016]
	- cookie parser
	- express session
- [x] lint
	- [x] confirm the best lint configuration 
	- [x] confirm best lint tools
		- [x] sublime linter is configured with esintrc
		- [x] npm run lint 
- [x] read style guide - https://github.com/felixge/node-style-guide
- [x] confirm error handlers are working [11/11/2016]
- [x] move server assets to server folder src/server & src/client [11/11/2016]
- [ ] comment - https://github.com/felixge/node-style-guide / https://github.com/airbnb/javascript#functions
- [ ] document - http://usejsdoc.org/about-getting-started.html
- [ ] redux
- [ ] graphql?
- [ ] relay?

## Testing
- [ ] to do...
- [ ] device testing
	- [ ] mobile
	- [ ] phablet
	- [ ] tablet
	- [ ] browser/desktop
		- [ ] chrome
		- [ ] mozilla
		- [ ] opera
		- [ ] IE
			- [ ] 8
			- [ ] 9
			- [ ] 10
			- [ ] edge

### Aesthetics
- [ ] improve modal screen design
- [ ] animations:
  - [ ] score
  - [ ] yeti
- [x] yeti
- [x] trees
- [ ] better buttons

### Client
- [x] styles
- [ ] lint js and css
- [ ] single responsibility
- [ ] clean up and reorganize code
- [ ] comment
- [ ] proptypes
- [ ] clean up state object

### Bugs
- [x] if user finishes all words and dies at the same time they beat the game before dying when they should die before ending the game
- [x] when game ends it shows next word button instead of end screens
- [x] the game does not display the input of the last letter and just jumps to next word button
- [x] odometer is not working... [REMOVED]
- [x] bonus life for every 100 pts is no longer working
- [x] keyboard component is broken [11/3/2016]
- [x] issues running api server [11/4/2016]
- [x] set config vars in heroku [11/7/2016]
- [x] reads config file [11/7/2016]
- [x] npm run lint seems to only be linting server.js [11/11/2016]

### 2.x.x
- [ ] react native?
- [ ] build
- [ ] deploy	

#### Disclaimer
Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.