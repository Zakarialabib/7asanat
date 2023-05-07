<!-- Header.svelte -->
<script>
	import { readConfig } from '../utils/helpers.js';
	import { goto } from '$app/navigation';
	import { _ } from 'svelte-i18n';
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

<header class="mb-2 w-full rounded">
	<h1
		class="text-center bg-gray-100 border-b border-shamrock-800 text-shamrock-800 py-2 font-bold cursor-pointer"
	>
		{title}
	</h1>

	<nav class="bg-gray-200 text-shamrock-800 text-sm uppercase py-2">
		<ul class="flex justify-center gap-6">
			{#if showConfigLink}
				<li>
					<button
						class="text-cente hover:underline focus:underline hover:text-green-600 transition"
						type="button"
						on:click={goToConfigPage}>{$_('menu.configuration')}</button
					>
				</li>
				<li>
					<button
						class="text-cente hover:underline focus:underline hover:text-green-600 transition"
						type="button"
						on:click={goToHadithPage}>{$_('menu.hadith')}</button
					>
				</li>
			{/if}
			<li>
				<button
					class="text-cente hover:underline focus:underline hover:text-green-600 transition"
					type="button"
					on:click={goToHadithPage}>{$_('menu.login')}</button
				>
			</li>
			<li>
				<button
					class="text-cente hover:underline focus:underline hover:text-green-600 transition"
					type="button"
					on:click={goToHadithPage}>{$_('menu.register')}</button
				>
			</li>
			<li>
				<button
					class="text-cente hover:underline focus:underline hover:text-green-600 transition"
					type="button"
					on:click={goToHadithPage}>{$_('menu.account')}
					</button
				>
			</li>
			<!-- <button class="text-center" on:click={goToHadithPage}>Leaderboard</button> -->
		</ul>
	</nav>
</header>
