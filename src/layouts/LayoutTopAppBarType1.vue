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
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">favorite</button>
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
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
  name: "LayoutTopAppBarType1",
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