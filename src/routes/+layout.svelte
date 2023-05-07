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
	waitLocale,
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

<footer class="flex justify-between px-5 bg-gray-100 py-2 mt-2">
	<p class="text-center cursor-pointer">{$_('footer.copyright')} © 2023 
	  <a href="https://www.github.com/zakarialabib" class="underline">{title}.</a>
	</p>

	<button class="float-left text-center bg-gradient-to-r from-shamrock-300 to-shamrock-600 px-2 text-white font-bold" on:click={switchLanguage}>
		{#if lang === 'en'}
		  العربية
		{:else}
		   English
		{/if}
	  </button>
</footer>
</div>


<style>
	/* Add styles for RTL text direction */
	:global(body[dir="rtl"]) {
		direction: rtl;
	}
</style>