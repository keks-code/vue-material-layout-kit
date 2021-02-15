// eslint-disable-next-line @typescript-eslint/no-var-requires
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

// Only currently used theme will be compiled and included in html
const THEME = 'default';

const STYLES = {
	['vendor/material-components-web--theme-' + THEME] : `./src/vendor/mdc/material-components-web--theme-${THEME}.scss`,
	['app-global--theme-' + THEME] : `./src/styles/app-global--theme-${THEME}.scss`,
}

module.exports = {
	configureWebpack: {
		plugins: [
			// Do not generate .js files for stylesheets
			new FixStyleOnlyEntriesPlugin(),
		]
	},

	chainWebpack: config => {

		// Add styles to entry points
		Object.keys(STYLES).forEach(k => {
			config.entry(k)
				.add(STYLES[k])
		})
	},

	css: {
		loaderOptions: {
			scss: {
				sassOptions: {
					// Include node_modules to resolve @use inside MDC SCSS
					includePaths: ["./node_modules"],
				},
				// Include theme SCSS in each component to make sure it is properly themed
				additionalData: '@use "~@/styles/themes/' + THEME + '";'
			}
		}
	}
}
