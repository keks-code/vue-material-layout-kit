<template>
  <div class="a-c--1280">
    <!-- <div>
      <h2>Whats up with the naming?</h2>
      <p>It is quite problematic to come up with a meaningful name for a layout. I tried to give </p>
      <p>In my work on layouts I was working on different layouts. Not all of them made it into the final product. </p>
    </div> -->

    <div class="mdc-card mdx-p--default mdx-m--default">
      <div class="mdc-card__content">
        <h3 class="mdc-typography--headline4 mdx-mb--3">Layout #101</h3>
        <div class="rich-text mdx-mb--5">
          <p>
            <router-link to="/layout101">*** DEMO ***</router-link>
          </p>
          <p>Very simple minimalistic layout, that uses only <a href="https://material.io/components/app-bars-top" target="_blank">Top App Bar</a> 
          component for navigation. Scrolling upward hides the top app bar, scrolling downward reveals the top app bar, thus maximizing 
          space available for content on smaller phone screens.
          </p>

          <div class="layout-screenshot mdx-mb--3">
            <a href="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/101/layout101-iphone8.png" target="_blank">
              <img src="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/101/layout101-iphone8.png">
            </a>
          </div>
          <div class="layout-screenshot mdx-mb--3">
            <a href="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/101/layout101-ipad.png" target="_blank">
              <img src="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/101/layout101-ipad.png" >
            </a>
          </div>
          <div class="layout-screenshot mdx-mb--3">
            <a href="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/101/layout101-desktop.png" target="_blank">
              <img src="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/101/layout101-desktop.png">
            </a>
          </div>

          <p>
            This layout fits for simple websites with little navigation. 1-3 commands/links can be placed in the Top App bar 
            in a form of <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button">Icon Buttons</a>.
            Placing more elements into Top App Bar might create problems on small phone screens. Some additional rarely used commands/links 
            can be placed into drop-down menu, which gets opened by clicking on 3 vertical dots icon.
          </p>

        </div>
      </div>
    </div>
    
    <div class="mdc-card mdx-p--default mdx-m--default">
      <div class="mdc-card__content">
        <h3 class="mdc-typography--headline4 mdx-mb--3">Layout #203</h3>
        <div class="rich-text mdx-mb--5">
          <p>
            <router-link to="/layout203">*** DEMO ***</router-link>
          </p>
          <p>
            Universal layout for web apps. It adapts to screen size. <strong>On desktop</strong> it uses two 
            navigational components: permanent Top App Bar and <a href="https://material.io/components/navigation-drawer#standard-drawer">permanent Drawer</a>.
            Permanent means that the components are permanently visible, only content gets scrolled. Thus on bigger desktop screens 
            all the navigation and commands are always available.
          </p>
          
          <div class="layout-screenshot mdx-mb--3">
            <a href="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/203/layout203-desktop.png" target="_blank">
              <img src="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/203/layout203-desktop.png">
            </a>
          </div>

          <p>
            <strong>On table and phone</strong>, where screen space is limited, permanent drawer transforms 
            into <a href="https://material.io/components/navigation-drawer#modal-drawer">modal Drawer</a>. Modal navigation drawer
             gets opened above an app's content by clicking a navigation menu icon in a top app bar.
          </p>

          <div class="layout-screenshot mdx-mb--3">
            <a href="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/203/layout203-ipad-2.png" target="_blank">
              <img src="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/203/layout203-ipad-2.png">
            </a>
          </div>

          <div class="layout-screenshot mdx-mb--3">
            <a href="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/203/layout203-iphone8.png" target="_blank">
              <img src="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/203/layout203-iphone8.png">
            </a>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Layouts',
  components: {
  },
});
</script>

<style lang="scss" scoped>
@use 'sass:map';
@use '@material/typography';
@use '@material/layout-grid';

$default-margin: map.get(layout-grid.$default-margin, phone);

.layout-screenshot {
  text-align: center;

  img {
    max-height: 500px;
    max-width: 100%;
  }
}

.rich-text {
  @include typography.typography(body1);
	
	p {
		margin-bottom: $default-margin * 2;

		&:last-child {
			margin-bottom:0;
		}
	}

	a {
		text-decoration: underline;

		// &:hover {
		// 	text-decoration:underline;
		// }
	}

	ul, ol {
		margin-left: $default-margin;
		margin-top: $default-margin;

    li {
      margin-bottom: $default-margin;
    }
	}
}
</style>