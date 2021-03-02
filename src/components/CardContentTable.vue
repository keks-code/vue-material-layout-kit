<template>
  <table>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td>{{ row.value }}</td>
      </tr>
    </tbody>
  </table>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TestContent2',
  data() {
    return {
      rows: [
        {
          value: 'Checking'
        },
        {
          value: '****1234'
        },
        {
          value: '$'
        },
        {
          value: '2,215.13'
        }
      ]
    }
  },
  // created: function() {
  //   for(let i = 0; i < 30; i++) {
  //     this.$data.cards.push( Math.random() < 0.5 ?
  //       {
  //         isImg: false,
  //       } :
  //       {
  //         isImg: true,
  //         imgUrl: require('../assets/test-img' + this.getRandomInt(1, 10) + '.jpg')
  //       }
  //     );
  //   }
  // },
  // methods: {
  //   getRandomInt: function(min: number, max: number) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  //   }
  // }
});

</script>