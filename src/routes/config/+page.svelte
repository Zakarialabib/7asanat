<script>
	import { onMount, beforeUpdate } from 'svelte';
	import { saveConfig, readConfig } from '../../utils/helpers.js';
	import Header from '../../components/Header.svelte';
	import { _  } from "svelte-i18n";
	const config = readConfig() || {}; 

	export let hadithPerDay = config.hadithPerDay || 5;
	export let username = config.username || '';
	export let message = '';

	function updateHadithPerDay(event) {
	  hadithPerDay = parseInt(event.target.value);
	}
  
	function updateUsername(event) {
	  username = event.target.value;
	}
  
	// function saveConfiguration() {
	// 	event.preventDefault();
	//   const userConfig = {
	// 	hadithPerDay: hadithPerDay,
	// 	username: username
	//   };
  
	//   saveConfig(userConfig);
  
	//   console.log('Saved user configuration:', userConfig);
  
	//   message = 'Configuration saved successfully';
	// }

	let previousConfig = config;
	beforeUpdate(() => {
		const currentConfig = {
		hadithPerDay: hadithPerDay,
		username: username
		};
		if (JSON.stringify(currentConfig) !== JSON.stringify(previousConfig)) {
		saveConfig(currentConfig);
		previousConfig = currentConfig;
		console.log('Updated user configuration:', currentConfig);
		  message = 'Updated user configuration';
		}
	});

  </script>
  
  <div class="max-w-lg mx-auto">
	<div class="w-full max-w-3xl px-4 py-4">
		<Header title="{$_('config.configuration')}" />
  
	  <form class="flex flex-col space-y-4">
		<div class="flex flex-col space-y-1">
		  <label for="quotes-per-day" class="text-sm font-medium">{$_('config.numbers_of_hadith_per_day')}:</label>
		  <input id="quotes-per-day" type="number" class="bg-gray-200 border active:border-green-600 rounded-lg px-3 py-2" bind:value={hadithPerDay} on:change={updateHadithPerDay} />
		</div>
  
		<div class="flex flex-col space-y-1">
		  <label for="username" class="text-sm font-medium">{$_('config.username')} (optional):</label>
		  <input id="username" type="text" class="bg-gray-200 border active:border-green-600 rounded-lg px-3 py-2" bind:value={username} on:input={updateUsername}  />
		</div>
  
		<!-- <button class="bg-blue-500 text-white rounded-lg py-2 px-4 font-medium hover:bg-blue-600 transition-colors duration-300" on:click={saveConfiguration}>Save</button> -->
	  </form>
  
	  {#if message}
		<p class="text-sm text-center text-blue-200 mt-2">{message}</p>
	  {/if}
	</div>
  </div>
  