# I-Spell-It
A spin on the classic hangman game, built with React [https://ispellits.herokuapp.com/](https://ispellits.herokuapp.com/)

### Current Version
- Server: 0.7.0
- Client: 0.10.0

## Getting Started
1. $ cd src/server && npm run server
2. $ cd src/client npm start

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
- [ ] add more words
 
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
- [x] read express style guide - https://github.com/felixge/node-style-guide
- [x] confirm error handlers are working [11/11/2016]
- [x] move server assets to server folder src/server & src/client [11/11/2016]
- [x] finish js style guide - https://github.com/airbnb/javascript [11/15/2016]
- [x] comment [11/12/2016]
- [x] endpoint for creating a player [12/1/2016]
- [x] endpoint for getting top players [12/2/2016]

### Testing
- [x] read chapters on this [11/30/2016]
- [ ] add client testing
- [ ] server testing - read up on this
- [ ] platform testing
	- [x] mobile [12/5/2016]
	- [x] phablet [12/5/2016]
	- [x] tablet [12/5/2016]
	- [ ] browser/desktop
		- [x] chrome [12/5/2016]
		- [x] mozilla [12/5/2016]
		- [x] opera [12/5/2016]
		- [ ] IE
			- [ ] 8	
			- [ ] 9
			- [ ] 10
			- [ ] edge

### Aesthetics
- [x] yeti
- [x] trees
- [x] better buttons [11/29/2016]

### Client
- [x] styles
- [x] read - https://github.com/airbnb/javascript/tree/master/react#parentheses [11/22/2016]
- [x] finish adding propTypes and defaultProps where applicable [11/21/2016]
- [x] lint js [11/22/2016]
- [x] lint css [11/23/2016]
- [x] single responsibility [11/23/2016]
- [x] clean up and reorganize code [11/23/2016]
- [x] clean up state object [11/17/2016]
- [x] comment / document CSS [11/28/2016]
- [x] add a task runner for version bumping... https://github.com/vojtajina/grunt-bump [11/28/2016]
- [x] look into improving modal.jsx for more reuse [11/29/2016]
- [x] input field validation [11/30/2016]
- [x] display high scores [12/5/2016]

### Issues
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
- [x] Heroku deployment seems to be broken... [11/18/2016]
- [x] high score screen is not showing [11/28/2016]
- [x] submit button hover pushes input down [11/30/2016]
- [x] issue with server finding favicon REMOVED [11/30/2016]
- [x] trees are not displaying in dev [12/1/2016]
- [x] snow not displaying [12/1/2016]
- [x] fixes URI to API in client.js [12/1/2016]
- [x] fixes use of client.createPlayer [12/1/2016]
- [ ] production server is not saving player
- [ ] IE does not support includes

### 2.x.x
- [ ] react native	
- [ ] graphql - read more on this
- [ ] relay - read more on this
- [ ] accessibility?
- [ ] read chapters on redux for better state management
- [ ] document client JS once redux has been addded
- [ ] document server - http://usejsdoc.org/about-getting-started.html / https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html

#### Disclaimer
Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.