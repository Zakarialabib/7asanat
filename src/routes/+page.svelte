
<!-- +page.svelte -->
<script>
	import { onMount } from 'svelte';
	import Intro from '../components/Intro.svelte';
	import { readConfig } from '../utils/helpers.js';
	import { goto } from '$app/navigation';
	import { _ } from "svelte-i18n";
	import { BarLoader } from 'svelte-loading-spinners';

	let isLoading = true;

	const userConfig = readConfig();
	if (userConfig) {
		goto('/hadith');
	} else {
		onMount(async () => {
    		isLoading = false;
		});
	}

</script>
  
<main>    

	

  {#if isLoading}
  <div class="flex justify-center my-10">
  		<BarLoader size="100" color="#FF3E00" unit="px" duration="1s" />
	</div>
  	<p class="text-center">{$_('layout.loading')}</p>
	{:else}
		<Intro />
	{/if}

</main>