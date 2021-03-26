<template>
  <div>
    <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
          <router-link to="/" class="mdc-top-app-bar__title">
            <span>Material Design</span> Layout Kit
          </router-link>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">favorite</button>
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
          <div id="demo-menu" class="mdc-menu-surface--anchor">
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options" onclick="handleMoreClick()">more_vert</button>
            <div class="mdc-menu mdc-menu-surface">
              <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
                <li class="mdc-list-item" role="menuitem">
                  <span class="mdc-list-item__ripple"></span>
                  <span class="mdc-list-item__graphic material-icons" aria-hidden="true">settings</span>
                  <span class="mdc-list-item__text">Settings</span>
                </li>
                <li class="mdc-list-item" role="menuitem">
                  <span class="mdc-list-item__ripple"></span>
                  <span class="mdc-list-item__graphic material-icons" aria-hidden="true">power_settings_new</span>
                  <span class="mdc-list-item__text">Log Out</span>
                </li>
              </ul>
            </div>
          </div>

        </section>
      </div>
    </header>

    <div class="mdc-top-app-bar--fixed-adjust">
      <aside class="mdc-drawer">
        <div class="mdc-drawer__content">
          <nav class="mdc-list">
            <router-link class="mdc-list-item mdc-list-item--activated" to="/layout203/" tabindex="0" aria-selected="true">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">analytics</i>
              <span class="mdc-list-item__text">Dashboard</span>
            </router-link>
            <router-link class="mdc-list-item" to="/layout203/cardlist" tabindex="-1">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">auto_stories</i>
              <span class="mdc-list-item__text">Stories</span>
            </router-link>
            <a class="mdc-list-item" href="#" tabindex="-1">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
              <span class="mdc-list-item__text">Mail</span>
            </a>
            <a class="mdc-list-item" href="#" tabindex="-1">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">note</i>
              <span class="mdc-list-item__text">Notes</span>
            </a>
            <hr class="mdc-list-divider">

            <h6 class="mdc-list-group__subheader">Labels</h6>
            <a class="mdc-list-item" href="#" tabindex="-1">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
              <span class="mdc-list-item__text">Family</span>
            </a>

            <!-- @for (int i = 0; i < drawerCount; i++)
            {
              <a class="mdc-list-item" href="#" tabindex="-1">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
                <span class="mdc-list-item__text">Family</span>
              </a>
              <a class="mdc-list-item" href="#" tabindex="-1">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
                <span class="mdc-list-item__text">Friends</span>
              </a>
              <a class="mdc-list-item" href="#" tabindex="-1">
                <span class="mdc-list-item__ripple"></span>
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
                <span class="mdc-list-item__text">Work</span>
              </a>
            } -->

            <hr class="mdc-list-divider">
            <a class="mdc-list-item" href="#" tabindex="-1">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">settings</i>
              <span class="mdc-list-item__text">Settings</span>
            </a>
            <a class="mdc-list-item" href="#" tabindex="-1">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">announcement</i>
              <span class="mdc-list-item__text">Help &amp; feedback</span>
            </a>
          </nav>
        </div>
      </aside>

      <div class="mdc-drawer-scrim"></div>
      <div class="mdc-drawer-app-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCDrawer } from '@material/drawer';
import { MDCList } from '@material/list';

export default Vue.extend({
  name: "Layout203",
  data() {
    return {
      topAppBar: undefined,
      drawer: undefined as MDCDrawer | MDCList | undefined,
      drawerNavList: undefined
    }
  },
  mounted: function() {
    const topAppBarEl = document.querySelector('.mdc-top-app-bar');
    console.log('top app bar checked');
    if(topAppBarEl) {
      this.$data.topAppBar = new MDCTopAppBar(topAppBarEl);
      console.log('top app bar created');

      this.$data.topAppBar.listen('MDCTopAppBar:nav', () => {
        console.log('Toggling Modal Drawer');
        this.$data.drawer.open = !this.$data.drawer.open;
      });

      // const drawerElement = document.querySelector('.mdc-drawer');
      // const listEl = document.querySelector('.mdc-drawer .mdc-list');

      this.$data.drawer = window.matchMedia("(max-width: 840px)").matches ?
        this.initModalDrawer() : this.initPermanentDrawer();

      window.addEventListener('resize', this.resizeHandler);
    }
  },
  beforeDestroy: function() {
    //console.log(this.$data.topAppBar);
    if(this.$data.topAppBar) {
      this.$data.topAppBar.destroy();
      this.$data.topAppBar = undefined;
      console.log('top app bar destroyed');
    }
    if(this.$data.drawer) {
      this.$data.drawer.destroy();
      this.$data.drawer = undefined;
      console.log('Drawer destroyed');
    }
    if(this.$data.drawerNavList) {
      this.$data.drawerNavList.destroy();
      this.$data.drawerNavList = undefined;
      console.log('Drawer\'s navigation List destroyed');
    }

    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    initModalDrawer: function() {
      console.log('initModalDrawer');

      const drawerElement = document.querySelector('.mdc-drawer') as Element;
      drawerElement.classList.add("mdc-drawer--modal");
      const drawer = MDCDrawer.attachTo(drawerElement);
      drawer.open = false;

      const listEl = document.querySelector('.mdc-drawer .mdc-list') as Element;
      listEl.addEventListener('click', this.closeModalDrawer);

      return drawer;
    },
    initPermanentDrawer: function() {
      console.log('initPermanentDrawer');

      const drawerElement = document.querySelector('.mdc-drawer') as Element;
      drawerElement.classList.remove("mdc-drawer--modal");

      const listEl = document.querySelector('.mdc-drawer .mdc-list') as Element;
      const list = MDCList.attachTo(listEl);
      list.wrapFocus = true;

      return list;
    },
    closeModalDrawer: function() {
      console.log('Closing Modal Drawer due to navigation');
      this.$data.drawer.open = false;
    },
    resizeHandler: function() {
      if (window.matchMedia("(max-width: 840px)").matches && this.$data.drawer instanceof MDCList) {
        this.$data.drawer.destroy();
        this.$data.drawer = this.initModalDrawer();
      } else if (window.matchMedia("(min-width: 840px)").matches && this.$data.drawer instanceof MDCDrawer) {
        const listEl = document.querySelector('.mdc-drawer .mdc-list') as Element;
        listEl.removeEventListener('click', this.closeModalDrawer);
        this.$data.drawer.destroy();
        this.$data.drawer = this.initPermanentDrawer();
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@use 'sass:map';
@use '@material/theme';
@use '@material/layout-grid';
@use '../styles/mdc-extensions/mdcext-top-app-bar';

.mdc-top-app-bar__title {
  color: theme.$on-primary;

  @media (max-width: layout-grid.breakpoint-max(phone)) {
    span {
      display: none;
    }
  }
}

.mdc-top-app-bar--fixed-adjust {
  display: flex;
	height: 100vh;
}

.mdc-drawer-app-content {
  flex: auto;
  overflow: auto;
  position: relative;
}

// .mdc-top-app-bar__navigation-icon {
//   display: block;
// }

@media (min-width: layout-grid.breakpoint-min(desktop)) {
  .mdc-top-app-bar__navigation-icon {
    display: none;
  }

  .mdc-top-app-bar__title {
    @include mdcext-top-app-bar.title--first;
  }
}
</style>