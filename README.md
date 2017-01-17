# I-Spell-It
A spin on the classic hangman game, built with React [https://ispellits.herokuapp.com/](https://ispellits.herokuapp.com/)

### Current Version
- Server: 0.9.0
- Client: 0.30.0

## Getting Started
1. $ cd src/server && npm run server
2. $ cd src/client && npm start

## Changelog

### Game Core
- [x] add more words [12/7/2016]
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
- [x] removed index route [12/7/2016]
- [x] removed favicon middleware [12/7/2016]

### Testing
- [x] read chapters on this [11/30/2016]
- [ ] finish front-end unit testing
	- https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha
	- http://airbnb.io/enzyme/docs/api/mount.html
	- http://facebook.github.io/jest/docs/api.html#expectvalue
	- [x] unit test Lives component [12/12/2016]
	- [x] unit test Score component [12/12/2016]
	- [x] unit test Logo component [12/13/2016]
	- [x] unit test Body component [12/14/2016]
	- [x] unit test Yeti component [1/16/2017]
	- [x] unit test WordBox component [1/16/2017]
	- [x] unit test Trees component [1/16/2017]
	- [x] unit test Modal component [1/17/2017]
	- [x] unit test Keyboard component [1/17/2017]
	- [x] unit test Key component [1/17/2017]
	- [x] unit test Letter component [1/17/2017]
	- [x] unit test Header component [1/17/2017]
	- [x] unit test Footer component [1/17/2017]
	- [x] unit test Engine component [1/17/2017]
	- [x] unit test Clue component [1/17/2017]
	- [ ] InputForm
		- [ ] test refs
		- [ ] test props
		- [ ] test state
		- [ ] test events
	- [x] Btn [1/17/2017]		
		- [x] test events	
	- [ ] add more tests to App.jsx
	- [ ] double all tests (events)
- [ ] end to end testing?
- [ ] server testing 
	- [ ] read up on this
- [x] platform testing [12/7/2016]
	- [x] mobile [12/5/2016]
	- [x] phablet [12/5/2016]
	- [x] tablet [12/5/2016]
	- [x] browser/desktop [12/7/2016]
		- [x] chrome [12/5/2016]
		- [x] mozilla [12/5/2016]
		- [x] opera [12/5/2016]
		- [x] IE [12/7/2016]
			- [x] 8	FAILED 
			- [x] 9 
			- [x] 10 
			- [x] edge 

### Aesthetics
- [x] better buttons [11/29/2016]
- [ ] animations

### Client
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
- [x] make modal text larger on desktop [12/7/2016]
- [x] make clue font larger on desktop [12/8/2016]
- [x] make keyboard larger on desktop [12/8/2016]
- [x] convert font-size to em [12/8/2016]
- [x] removed header component to improve testability [12/13/2016]
- [x] rolled back Header.jsx [12/15/2016]
- [x] update how state is handled to speed up initial render [1/9/2017]
- [x] no longer mutating objects/arrays [1/9/2017]
- [x] modify inputForm component to be a controlled component -- https://facebook.github.io/react/docs/forms.html this may make it easier to test [1/13/2017]
- [x] perhaps put all form logic and state into the formInput component [1/13/2017]
- [x] improved validation [1/13/2017]
- [x] try and remove all instances of let [1/15/2017]
- [ ] inline styles?
	- https://facebook.github.io/react-native/docs/style.html
	- https://facebook.github.io/react-native/docs/text.html
	- https://facebook.github.io/react-native/docs/height-and-width.html
- [ ] remove propTypes on build 
- [ ] change modal component to higher order component --practice the decorator pattern


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
- [x] IE does not support includes [12/7/2016]
- [x] modal not disappearing after clicking start button [12/12/2016]
- [x] fixed version bump task [12/15/2016]
- [x] need space after lives [12/15/2016]
- [x] fixed an issue with displaying the wrong clue [1/9/2017]
- [ ] server seems to try and GET before finishing POST --need promise?
- [ ] production server is not displaying saved players, may need promise
	- [ ] there could be an issue with deprecated use of mpromise?

### 2.x.x
- [ ] react native	
- [ ] relay - read more on this
	- [ ] graphql - read more on this
- [ ] accessibility?
- [ ] read chapters on redux for better state management --probably not necessary
- [ ] document client JS once redux has been addded
- [ ] document server - http://usejsdoc.org/about-getting-started.html / https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
- [ ] start easy and progressively get harder or offer different levels of difficulty
- [ ] add in a helper to add a random letter for user at the cost of n points
- [ ] add message when a bonus life is achieved (perfect round)
- [ ] abstract away the input field into it's own component


#### Disclaimer
Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.