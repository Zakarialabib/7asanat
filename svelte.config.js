import adapter from "sveltekit-adapter-chrome-extension";
import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import cspDirectives from './csp-directives.mjs';

// /** @type {import('@sveltejs/kit').Config} */
const config = {
	    
	preprocess: [
		vitePreprocess(),
		sveltePreprocess(),
	],
	
	kit: {
		csp: {
			mode: "hash",
			directives: cspDirectives,
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'app.html',
			precompress: false,
			strict: false,
			emptyOutDir: true,
			target: '#svelte'
		}),
		appDir: "app",
	}
};

export default config;
