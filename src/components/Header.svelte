<!-- Header.svelte -->
<script>
    import { readConfig } from '../utils/helpers.js';
	import { goto } from '$app/navigation';
	import { _  } from "svelte-i18n";
	export let title;

	const userConfig = readConfig();
	const showConfigLink = userConfig !== null;
	
	function goToConfigPage() {
		goto('/config');
	}
	function goToHadithPage() {
		goto('/hadith');
	}
</script>

<header class="mb-4">
	<h1 class="text-center bg-shamrock-300 border-b border-shamrock-800 text-shamrock-800 py-2 mb-4 font-bold cursor-pointer">{title}</h1>
	
	<nav class="flex justify-center text-sm uppercase gap-6 py-2">
		{#if showConfigLink}
			<button class="text-cente hover:underline focus:underline hover:text-white transition " type="button" on:click={goToConfigPage}>{$_('menu.configuration')}</button>
			<button class="text-cente hover:underline focus:underline hover:text-white transition " type="button" on:click={goToHadithPage}>{$_('menu.hadith')}</button>
		{/if}
		<button class="text-cente hover:underline focus:underline hover:text-white transition " type="button" on:click={goToHadithPage}>{$_('menu.login')}</button>
			<button class="text-cente hover:underline focus:underline hover:text-white transition " type="button" on:click={goToHadithPage}>{$_('menu.register')}</button>
			<button class="text-cente hover:underline focus:underline hover:text-white transition " type="button" on:click={goToHadithPage}>{$_('menu.account')}</button>
		<!-- <button class="text-center" on:click={goToHadithPage}>Leaderboard</button> -->
	</nav>
	
</header>

