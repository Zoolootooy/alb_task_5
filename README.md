# Needs
- npm >= v.5.2.0

# How to start
- `npm i`
- `npx gulp`

The project has a gulp task manager, it compiles html, scss, js, images, fonts, fonts styles.

The page will be in `/dist/index.html`.

After opening the page for the first time, some pictures may not have time to load.
Please, reload the page. The minified versions of css, js are included, but gulp also collects the usual ones 
(into `/dist/css/style.css`, `/dist/js/script.js`).
