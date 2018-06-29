# Bond

A front-end component library and framework based on PostCSS and Atomic Design.

#### Prerequisites

* Node
* Brew
* Yarn

#### Installation

1. Create a new directory for your project.
2. `cd my-project`
3. Clone or download Bond.
4. `cd assets`
5. `npm run bond`
6. Customize components to your needs.

### Getting Started

Out of the box, Bond includes two primary HTML files: `starter.html` and `index.html`. The `index.html` file serves as the primary demo page and includes some unnecessary scripts, styling and content that will likely be irrelevant to your project. As such, it is best to delete `index.html` and rename `starter.html` to `index.html`.

Bond provides you with a "kitchen sink" of components within `starter.html`. All components, including their various states and orientations, are included by default so you can get the most out of Bond. Start your project by determining which Bond components you need and deleting the ones you don't!

For more detailed information, I encourage you to check out the complete [Bond Docs](http://bond.codeandmortar.com/docs).

#### Change Log

##### May 11, 2018
* Added `:any-link` to `typography.css`
* Fixed a bug where WordPress image classes weren't being applied properly.
* Added JS to `hero.js` in order to autoplay hero background videos in Chrome.
* Cleaned up and minimized `palette.css`.
* Added inline icon styles to SVG icons in `typography.css`.
* Moved font scale declarations higher up in `typography.css`.
