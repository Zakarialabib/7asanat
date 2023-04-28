<!-- +layout.svelte -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import LoadingSpinner from '../components/LoadingSpinner.svelte';
	import "../app.css";

	let currentUser = null;
	let isLoading = false;

	onMount(() => {
		const storedUser = localStorage.getItem('currentUser');
		if (storedUser) {
			currentUser = JSON.parse(storedUser);
		}
	});

	function handleUserChange(user) {
		currentUser = user;
		localStorage.setItem('currentUser', JSON.stringify(user));
	}
</script>

<main>
	<slot />
</main>
