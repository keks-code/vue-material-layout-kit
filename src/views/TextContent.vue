<template>
  <div class="a-c--1280">
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell" v-for="(c, index) in cards" :key="index">

          <div class="mdc-card" style1="margin: 48px 0;">
            <div class="mdc-card__content" style="padding: 24px; height1: 1200px; ">
              <p v-if="!c.isImg" class="mdc-typography--body1">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
                their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have 
                evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
              <img v-else :src="c.imgUrl" style="width:100%;">
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextContent',
  data() {
    return {
      cards: []
    }
  },
  created: function() {
    for(let i = 0; i < 30; i++) {
      this.$data.cards.push( Math.random() < 0.5 ?
        {
          isImg: false,
        } :
        {
          isImg: true,
          //imgUrl: require('../assets/test-img' + this.getRandomInt(1, 10) + '.jpg')
          imgUrl: 'https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/test-img' + this.getRandomInt(1, 10) + '.jpg'
        }
      );
    }
  },
  methods: {
    getRandomInt: function(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
});
</script>