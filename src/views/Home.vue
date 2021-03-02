<template>
  <div class="home">
    <router-link to="/top-app-bar">Top App Bar: Type 1</router-link><br>
    <router-link to="/drawer-type3">Drawer: Type 3</router-link><br>

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
