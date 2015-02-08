## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>



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
