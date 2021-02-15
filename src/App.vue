<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view/>
    </component>
  </div>
</template>

<style lang="scss">

</style>
