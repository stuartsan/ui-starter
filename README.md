# ui-starter

Micro UI project starter, built on top of my [micro JS project starter](https://github.com/stuartsan/js-starter). 
Quickly get up and running with a decent browser app setup -- a scratchpad of 
sorts -- with pre-wired unit testing, a JS module system, linting, ES6, SCSS 
compilation, and autoprefixer.

Assumes npm for package management; uses webpack to bundle and serve, mocha
for tests, eslint to lint, and babel to compile to JS anything you can throw at 
babel (e.g. ES6, JSX). Swapping out parts is easy too. 

_Note: to facilitate easy/rapid development this leverages webpack's CSS 
bundling -- the CSS is inlined in the JS bundle, then injected as a stylesheet 
into the DOM -- IDK about you but I wouldn't use that in a real project! #tradeoffs_

## Do it live

`git clone https://github.com/stuartsan/ui-starter $WHATEVER`  
`cd $WHATEVER`

Optionally wipe out this starter project's history and initialize a new repo:

`rm -rf .git/ && git init`

Then grab stuff:

`npm install`

And do stuff: 

`npm test`: run unit tests once 

`npm run test-watch`: run unit tests once, watches files, runs on change 

`npm run lint`: run eslint

`npm run bundle`: bundle JS/CSS for browser, output goes to `out/bundle.js`.

`npm run serve`: (**best command**)  
Fire up a webpack-dev-server that serves the HTML index page, watches source 
files, recompiles everything on change _in memory, not on disk, FYI_, and hot 
reloads the updated assets into the browser.  
Run this then navigate your browser to `localhost:8080`. Now make some changes 
to either the JS or styles (say, add an `alert('derp');` to `src/index.js` and 
notice the automatic rebuilding and reloading. Cool.

Run `npm run serve` along with `npm test-watch` and you're TDDing, stuff is 
interactive, stuff is agile.
