<script>
	// Get the user's stats and points from local storage
	let userStats = null;

	export let currentUser;
	export let onLoadingStart;
	export let onLoadingEnd;

	const dispatch = createEventDispatcher();

	async function fetchData() {
		onLoadingStart();

		try {
			userStats = await getUserStats(currentUser.id);
			dispatch('dataLoaded', userStats);
		} catch (error) {
			console.error(error);
			alert('Error fetching user data. Please try again later.');
		}

		onLoadingEnd();
	}

	onMount(fetchData)
	// Show a sneak peek to the leader board
	function goToLeaderBoard() {
		window.location.href = 'https://example.com/leaderboard';
	}
</script>

<div class="dashboard">
	<h2>Dashboard</h2>
	<p>Quotes shown today: {userStats.quotesShownToday}/{userStats.hadithPerDay}</p>
	<p>Quotes shown total: {userStats.quotesShownTotal}</p>
	<p>Points earned: {userStats.points}</p>
	<button on:click={goToLeaderBoard}>See the Leader Board</button>
	<p>Note: The full leader board is only available on our website.</p>
</div>
