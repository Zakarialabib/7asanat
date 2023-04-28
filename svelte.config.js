import adapter from "sveltekit-adapter-chrome-extension";
// import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'app.html',
			precompress: false,
			strict: false,
			target: '#svelte'
		}),
		appDir: "app",
	}
};

export default config;
