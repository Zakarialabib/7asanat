<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	export let quotesPerDay = 5;
	export let username = '';
    export let message = '';

	function updateQuotesPerDay(event) {
		quotesPerDay = parseInt(event.target.value);
	}

	function updateUsername(event) {
		username = event.target.value;
	}

	function saveConfiguration() {
		const userConfig = {
			quotesPerDay: quotesPerDay,
			username: username
		};

		// Save user configuration to local storage
		localStorage.setItem('userConfig', JSON.stringify(userConfig));

		console.log('Saved user configuration:', userConfig);
        
        message = 'Configuration saved successfully';
	}
	onMount(() => {
    const userConfig = JSON.parse(localStorage.getItem('userConfig'));

    if (userConfig) {
      quotesPerDay = userConfig.quotesPerDay;
      username = userConfig.username;
    }
  });
</script>

<div class="max-w-lg mx-auto">
	<div class="w-full max-w-3xl px-4 py-6">
	<h2 class="text-xl text-center font-medium mb-4">Configuration</h2>
  
	<form class="flex flex-col space-y-4">
	  <div class="flex flex-col space-y-1">
		<label for="quotes-per-day" class="text-sm font-medium">Number of quotes per day:</label>
		<input id="quotes-per-day" type="number" class="border rounded-lg px-3 py-2" bind:value={quotesPerDay} on:change={updateQuotesPerDay} />
	  </div>
  
	  <div class="flex flex-col space-y-1">
		<label for="username" class="text-sm font-medium">Username (optional):</label>
		<input id="username" type="text" class="border rounded-lg px-3 py-2" bind:value={username} on:input={updateUsername} />
	  </div>
  
	  <button class="bg-blue-500 text-white rounded-lg py-2 px-4 font-medium hover:bg-blue-600 transition-colors duration-300" on:click={saveConfiguration}>Save</button>
	</form>
  
	{#if message}
	  <p class="text-sm text-center text-blue-200 mt-2">{message}</p>
	{/if}
  </div>
  </div>
  