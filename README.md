TODO:
  - [set up Jest, enzyme](https://www.theodo.fr/blog/2017/04/enzyme-fast-and-simple-react-testing/)
  - Set up routers
  - loading spinner
  - CSS animations
    - dev tool
  - set up PostCSS (variables, SASS like syntax)
  - [`react-burger-menu`](http://negomi.github.io/react-burger-menu/)

  - Server side rendering
  - Set up `react-dev-utils` in with webpack 
    - `FileSizeReporter`
    - `webpackHotDevClient`
    - `checkRequiredFiles`
  - screen reader for visually impaired users

TODO:
  - upgrade npm 4 to npm 5

DONE:
  - styling home page
  - responsive layout (images)
  - social media widgets
  - draw map using google map API
  - set up `file-loader` in webpack
  - static directory and add images
  - Fill HTML in Home page
  - import fonts (online font service: Google font)
  - Installed `babel-preset-es2017`
  - Installed `babel-preset-flow`
  - Setup flow typechecker
    - Using babel way
    - Install VScode flow extension
    - Configure user setting
    - Set up flow-typed

References:
  - [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts)
  - [react-dev-utils](https://www.npmjs.com/package/react-dev-utils)
  - [html-webapck-plugin](https://github.com/jantimon/html-webpack-plugin)
  - [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
  - [Flow library definitions](https://flow.org/en/docs/libdefs/)
  - [css animation functions]
    - http://cubic-bezier.com/ 
    - http://easings.net/
    - [greensock animation for older support](https://greensock.com/)
    - [CSS performance](https://csstriggers.com/)

---

Learned:
  - <figure></figure>
  - <figcaption></figcaption>
  - <img srcset="" sizes="" src="" width="" height="" />
  - <picture> <source srcset="logo.svg" type="image/svg+xml"  media="(min-width: 600px)" /> <img /></picture>

  - Pseudo-classes
  - Pseudo-elements
  - CSS values and units
    - numeric values
      - absolute units
      - relative units: em is the most recommanded, based on the font-size by default on the page.
    - percentage: liquid layout use percentage, percentage of its parent's size
    - colors
      - color system
      - color converter
      - [color keywords] (https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords)
      - HSL(hue, saturation, lightness values)
    - functions
      - rotate(45deg)
      - translate(50px, 60px)
      - cal(90%-15px)
      - url('image.svg')
  - Box Model
    - .clipped {overflow: hidden;}
    - background-clip: border-box | padding-box | content-box;
  - Responsive images
    - Art direction problems (landscape, portrait)
    - Resolution switching ( differenct image files to different screen devices. SVG, srcset, sizes)
  - styling link or list, avoid styling defaults
    - list-style-type
    - list-style-position
    - list-style-image 
      recommend to use background to better controlling its position
    - controlling list counting using list attributes
      - start
      - reversed
      - value

  - Babel
    - use Object Rest/Spread Properties for ECMAScript

  
    

  
  
  
  




