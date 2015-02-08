## Website Performance Optimization portfolio project


JORDANS NOTES
================

SHORTENING THE CRITICAL RENDERING PATH
- added async attribute to the google analytics script
- added media="print" to the css/print link to unblock critical rendering path
- inlined the perfmatters.js script
- minified and inlined the styles from style.css file
- moved the google font link to below the footer
- optimized and resized the pizzeria.jpg for the index.html to pizzeria_small.jpg
	
PIZZERIA
- changed the items[i].style.left to transform and transalte to improve FPS
- moved the items variable down below the anonymous function that generates the sliding pizzas
- also made the items variable available globally by adding window.items = document.querySelectorAll('.mover');
- implemented requestAnimationFrame as described in http://www.html5rocks.com/en/tutorials/speed/animations/ implementation starts at line 497 of main.js
- removed the dx variable declaration from the changePizzaSizes function for loop
- removed document.querySelector("#movingPizzas1") from the event listener anonymous function and into its own variable (line 550)
- Inlined the style.css for pizza.html to unblock critical rendering path
- added <meta charset="utf-8"> and <meta> viewport tags to pizza.html 


GULP
====

- my first run at using gulp
- set up gulp task to uglify the main.js file in views/js and pipe to a new file called views/dist
- linked the uglified main.min.js file to the pizza.html
	* the readable version is main.js and can be found in views/dist/js
- set up a gulp task to minify the bootstrap-grid.css and pipe to a new file called views/dist/css/bootstrap-grid.min.css
