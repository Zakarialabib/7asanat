<!-- +layout.svelte -->
<script>
	import { onMount } from 'svelte';
	import Intro from '../components/Intro.svelte';
	import Login from '../components/Login.svelte';
	import Dashboard from '../components/Dashboard.svelte';
	import Quote from '../components/Quote.svelte';
	import Config from '../components/Config.svelte';

	let currentStep = 0;
	
	onMount(() => {
		const visitedBefore = localStorage.getItem('visitedBefore');
		if (visitedBefore) {
			currentStep = 2;
		}
	});

	function handleNextStep() {
		currentStep++;
	}

	function handleLoginSuccess() { 
		currentStep = 2;
		localStorage.setItem('visitedBefore', true);
	}
</script>

<main>
	<Quote />
	<Config />
	{#if currentStep === 0}
	<Intro />
	{:else if currentStep === 1}
		<Login onSuccess={handleLoginSuccess} />
	{:else if currentStep === 2}
		<Dashboard />
	{/if}
</main>
