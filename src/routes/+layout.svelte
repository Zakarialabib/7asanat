<!-- +layout.svelte -->
<script>
	import "../app.css";
	import en from '../lang/en.json';
  	import ar from '../lang/ar.json';

	import {
	init,
	dictionary, 
	getLocaleFromNavigator,
	locale,
	_
	} from "svelte-i18n";
  
	export let title = '7asanat';	
	
	dictionary.set({ en, ar });
	
	let lang = 'en';

    init({
	  fallbackLocale: lang,
      initialLocale: getLocaleFromNavigator(),
	  loadingDelay: 200,
    });

    locale.set('en');

	function switchLanguage() {
    if (lang === 'en') {
		locale.set('ar');
      lang = 'ar';
	  document.querySelector('body').setAttribute('dir', 'ar' ? 'rtl' : 'ltr');
    } else {
		locale.set('en');
      lang = 'en';
	  document.querySelector('body').setAttribute('dir', 'en' ? 'ltr' : 'rtl');
    }
}

</script>

<div class="bg-gradient-to-r from-shamrock-300 to-shamrock-600 text-shamrock-900">
<main>
	<slot />
</main>

<footer class="space-y-4 py-4">
	<p class="text-center cursor-pointer">{$_('footer.copyright')} © 2023 
	  <a href="https://www.github.com/zakarialabib" class="underline">{title}.</a>
	</p>
	<div class="text-center bg-shamrock-300 text-black shadow-xl border border-shamrock-800 mx-24 text-md">
	<button on:click={switchLanguage}>
		{#if lang === 'en'}
		  Switch to Arabic
		{:else}
		  تبديل الى اللغة الإنجليزية
		{/if}
	  </button>
	</div>
</footer>
</div>


<style>
	/* Add styles for RTL text direction */
	:global(body[dir="rtl"]) {
		direction: rtl;
	}
</style>