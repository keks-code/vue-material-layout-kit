# :rocket: Vue Material Design Layout Kit

**Popular layouts for Material Design web applications.**

The idea here is to provide ready to use Vue templates with typical [Material Design](https://material.io/) layout and navigational components.

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


## Usage

### Use **vue-material-layout-kit** as a starter template

Go to [Releases](https://github.com/kekscs/vue-material-layout-kit/releases), download the latest version and unpack it. Rename the folder, change package name. Use it as a starting point for your new web app:

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn start

# build for production with minification
yarn build
```

### Copy layout code to your existing Vue app

TODO:
1. Где-то описать как организованы layout. К route добавляется `meta: { layout: Layout101 }`. Где это обрабатывается и по какой статье это сделано?
2. Надо включать SCSS нужных компонентов. У каждого layout свой список. Надо где-то этот список предоставлять.


Prerequisites:
1. Add "material-components-web" to dependencies.
2. Make sure necessary SCSS included.

Steps:
1. Clone the repo, or download the latest version from [Releases](https://github.com/kekscs/vue-material-layout-kit/releases).
2. Copy necessary layout file (.vue) to your app. Layouts can be found in [/src/layouts](https://github.com/kekscs/vue-material-layout-kit/tree/master/src/layouts) folder.
3. Import layout into your router/index.ts file:
```ts
import Layout101 from '../layouts/Layout101.vue'
```
4. Configure layout for a route like this:
```ts
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    meta: { layout: Layout101 }
  }
```