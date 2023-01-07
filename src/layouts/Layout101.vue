<template>
  <div>
    <header class="mdc-top-app-bar mdc-elevation--z3">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <router-link to="/" class="mdc-top-app-bar__title mdc-top-app-bar__title--first">
            <span class="">Material Design</span> Layout Kit
          </router-link>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <!-- <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">favorite</button>
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button> -->

          <a href="https://github.com/kekscs/vue-material-layout-kit"
            class="mdc-top-app-bar__action-item mdc-icon-button">
            <svg focusable="false" viewBox="0 0 51.8 50.4" xmlns="http://www.w3.org/2000/svg"><path d="M25.9,0.2C11.8,0.2,0.3,11.7,0.3,25.8c0,11.3,7.3,20.9,17.5,24.3c1.3,0.2,1.7-0.6,1.7-1.2c0-0.6,0-2.6,0-4.8c-7.1,1.5-8.6-3-8.6-3c-1.2-3-2.8-3.7-2.8-3.7c-2.3-1.6,0.2-1.6,0.2-1.6c2.6,0.2,3.9,2.6,3.9,2.6c2.3,3.9,6,2.8,7.5,2.1c0.2-1.7,0.9-2.8,1.6-3.4c-5.7-0.6-11.7-2.8-11.7-12.7c0-2.8,1-5.1,2.6-6.9c-0.3-0.7-1.1-3.3,0.3-6.8c0,0,2.1-0.7,7,2.6c2-0.6,4.2-0.9,6.4-0.9c2.2,0,4.4,0.3,6.4,0.9c4.9-3.3,7-2.6,7-2.6c1.4,3.5,0.5,6.1,0.3,6.8c1.6,1.8,2.6,4.1,2.6,6.9c0,9.8-6,12-11.7,12.6c0.9,0.8,1.7,2.4,1.7,4.7c0,3.4,0,6.2,0,7c0,0.7,0.5,1.5,1.8,1.2c10.2-3.4,17.5-13,17.5-24.3C51.5,11.7,40.1,0.2,25.9,0.2z"></path></svg>
          </a>

          <div id="demo-menu" class="mdc-menu-surface--anchor">
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">more_vert</button>
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
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { MDCTopAppBar } from '@material/top-app-bar';


export default Vue.extend({
  name: "Layout101",
  data() {
    return {
      topAppBar: undefined
    }
  },
  mounted: function() {
    const topAppBarEl = document.querySelector('.mdc-top-app-bar');
    console.log('top app bar checked');
    if(topAppBarEl) {
      this.$data.topAppBar = new MDCTopAppBar(topAppBarEl);
      console.log('top app bar created');
    }
  },
  beforeDestroy: function() {
    //console.log(this.$data.topAppBar);
    if(this.$data.topAppBar) {
      this.$data.topAppBar.destroy();
      this.$data.topAppBar = undefined;
      console.log('top app bar destroyed');
    }
  }
});
</script>

<style lang="scss" scoped>
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

.mdc-top-app-bar__title.mdc-top-app-bar__title--first {
  @include mdcext-top-app-bar.title--first;
}
</style>