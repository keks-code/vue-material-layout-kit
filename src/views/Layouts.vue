<template>
  <div class="a-c--1280">
    <!-- <div>
      <h2>Whats up with the naming?</h2>
      <p>It is quite problematic to come up with a meaningful name for a layout. I tried to give </p>
      <p>In my work on layouts I was working on different layouts. Not all of them made it into the final product. </p>
    </div> -->

    <div class="mdc-card mdx-p--default mdx-m--default">
      <div class="mdc-card__content">
        <h3 class="mdc-typography--headline4 mdx-mb--3"><router-link to="/layout101">Layout #101</router-link></h3>
        <div class="rich-text">
          <p>Простейший базовый layout на основе <a href="https://material.io/components/app-bars-top" target="_blank">Top App Bar</a>.
          Поведение layout одинаково для всех типов устройств:</p>
          <ol>
            <li>Cверху показывается top app bar, который прячется при прокрутке вниз.</li>
            <li>При прокрутке вверх, top app bar снова появляется, давая доступ к командам и навигации.</li>
          </ol>

          <div class="layout-screenshot mdx-mb--3 mdx-flex-fill-tmp">
            <img src="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/101/layout101-iphone8.png">
          </div>
          <div class="layout-screenshot mdx-mb--3 mdx-flex-fill-tmp">
            <img src="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/101/layout101-ipad.png" >
          </div>
          <div class="layout-screenshot mdx-mb--3 mdx-flex-fill-tmp">
            <img src="https://kekscs.blob.core.windows.net/dev/vue-material-layout-kit/layout-screens/101/layout101-desktop.png">
          </div>

          <p>Подходит для простых сайтов, где практически нет навигации или ее очень мало. Сама эта страница использует этот layout.
             В данном случае в top app bar помещена только одна ссылка на GitHub repository.</p>

          <p>Для редко используемых команд в top app bar можно добавить drop-down menu, открываемый по нажатию на vertical dots icon.
            Так же сюда можно поместить search input.
          </p>
        </div>
      </div>
    </div>
    
    <div class="mdc-card mdx-p--default mdx-m--default">
      <div class="mdc-card__content">
        <h3 class="mdc-typography--headline3"><router-link to="/layout203">Layout #203</router-link></h3>
        <p></p>
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
    max-height: 400px;
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