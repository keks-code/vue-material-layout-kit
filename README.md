# :rocket: Vue Material Design Layout Kit

**Popular layouts for Material Design web applications.**

The idea here is to provide ready to use Vue templates with typical for [Material Design](https://material.io/) layout and navigational components.

[&gt;&gt;&gt; DEMO &lt;&lt;&lt;](http://vue-layouts.kekscs.com/)


<img src="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/203/layout203-iphone8.png" alt="Layout #203 (iPhone 8)" title="Layout #203 (iPhone 8)" height="550">

![Layout #203 (desktop)](https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/203/layout203-desktop.png "Layout #203 (deskop)")

## :heavy_check_mark: Key Features

* Built using Google's [Material Design Components for web](https://material.io/develop/web) (or MDC-Web).
* You don't have to use MDC-Web for the rest of your application. MDC-Web fluently integrates with other CSS frameworks/components because it doesn't define any global CSS styles. And because the library is very modular, only used components will be bundled.
* MDC-Web defines 3 breakpoint ranges: [desktop, tablet and phone](https://material.io/develop/web/supporting/layout-grid). Each template is optimized for these three breakpoints.
* Some templates adapt layout and navigation based on screen size. Layout and behavior at each breakpoint is mostly based on [Material Studies examples](https://material.io/design/material-studies/about-our-material-studies.html). For example:
  * Navigation hidden on smaller screens gets revealed when additional space becomes available.
  * Navigational components can transform from one format to another at a designated breakpoint: side navigation can transform into tabs on a larger screen.
* Theming is available via [MDC-Web's theming system](https://material.io/develop/web/theming/theming-guide). Changing colors, fonts, shapes is as easy as setting SASS variables.


## Getting Started




## Something other

**This is a collection of starter web templates with typical Material Design application layouts.**

Some layouts may switch between different navigation components, depending on screen size. For example, permanent side drawer for desktop and modal drawer for narrower tablet/phone screens.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
