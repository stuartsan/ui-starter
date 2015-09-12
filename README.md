# ui-starter

Micro UI project starter, built on top of my [micro JS project starter](https://github.com/stuartsan/js-starter). Quickly get up and running with a decent browser app environment, 
a scratchpad of sorts, with unit testing, linting, ES6, SCSS compilation, and 
autoprefixer.

Assumes npm for package management; uses webpack to bundle and serve, mocha
for tests, eslint to lint, and babel to compile anything you can throw at babel,
into JS (e.g. ES6, React). Swapping out parts is easy too, though!

_Note: to facilitate easy/rapid development this leverages webpack's CSS 
bundling -- the CSS is inlined in the JS bundle, then injected as a stylesheet 
into the DOM -- IDK about you but I wouldn't use this in a real project! #tradeoffs_

## Do it live

`git clone https://github.com/stuartsan/ui-starter $WHATEVER`  
`cd $WHATEVER`

Optionally wipe out this starter project's history and initialize a new repo:

`rm -rf .git/ && git init`

Then grab stuff:

`npm install`

And do stuff: 

`npm test` OR  
`npm run test-watch` OR  
`npm run lint` OR

Bundle everything on disk, including sass compilation:

`npm run bundle` OR

Here's the real fast track: fire up a webpack-dev-server that serves the index 
page on `localhost:8080`, watches the source files, recompiles everything on 
change _in memory, not on disk, FYI_ and hot reloads the updated assets into 
the browser:

`npm run serve`

Run `npm test-watch` along with this and you're TDDing, stuff is interactive,
stuff is agile.
