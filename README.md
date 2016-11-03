# I-Spell-It
A spin on the classic hangman game, built with React

## To Do

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
- [ ] express server
- [ ] db of some kind

## Testing
- [ ] to do...

### Aesthetics
- [ ] improve modal screen design
- [ ] animations:
  - [ ] score
  - [ ] yeti
- [x] yeti
- [x] trees
- [ ] better buttons

### Refactor
- [x] styles
- [ ] lint js and css
- [ ] redux & database persistence
- [ ] tests w/ jest
- [ ] single responsibility
- [ ] clean up and reorganize code
- [ ] comment
- [ ] react native
- [ ] browser support
- [ ] devices
- [ ] proptypes
- [ ] clean up state object
- [ ] graphql?
- [ ] api?
- [ ] relay?
- [ ] build
- [ ] deploy

### Bugs
- [x] if user finishes all words and dies at the same time they beat the game before dying when they should die before ending the game
- [x] when game ends it shows next word button instead of end screens
- [x] the game does not display the input of the last letter and just jumps to next word button
- [x] odometer is not working... [REMOVED]
- [x] bonus life for every 100 pts is no longer working