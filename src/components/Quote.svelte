<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
  
	let quoteText = '';

	let quotesPerDay;
  
	let quotesOfTheDay = [
	  'The best among you are those who have the best manners and character.',
	  'Whoever does not show mercy to others, Allah will not show mercy to him.',
	  'The believer is not one who eats his fill while his neighbor is hungry.',
	  'A good word is charity.',
	  'Allah does not judge you based on your appearance and wealth, but He looks at your hearts and actions.',
	  'The most beloved of people to Allah are those who are most beneficial to others.'
	];
  
	function hideQuote() {
  		quotesPerDay--;
 	 	quoteText = quotesOfTheDay[Math.floor(Math.random() * quotesOfTheDay.length)];
 	 	localStorage.setItem('userConfig', JSON.stringify({ quotesPerDay }));
	}
  
	// Update the quote text and number of quotes left on component mount
	onMount(() => {
	  quoteText = quotesOfTheDay[Math.floor(Math.random() * quotesOfTheDay.length)];
	  const userConfig = JSON.parse(localStorage.getItem('userConfig'));
	  if (userConfig) {
			quotesPerDay = userConfig.quotesPerDay;
      }
	});
  </script>
  
  <div class="flex flex-col justify-center items-center">
	<h2 class="text-xl text-center font-medium mt-4">Daily Dikr</h2>
	{#if quotesPerDay > 0}
	  <div class="w-full max-w-3xl px-4 py-6 text-center">
		<p class="text-lg font-medium mb-4 border p-4">{quoteText}</p>
		<div class="flex justify-between items-center text-sm font-medium text-white">
		  <p>{quotesPerDay} quotes left for today</p>
		  <button class="text-yellow-400 hover:text-yellow-500 transition-colors duration-300" on:click={hideQuote}>
			<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
			class="w-5 h-5" fill="currentColor"  viewBox="0 0 64 64" xml:space="preserve">
			<path fill-rule="evenodd" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265
				C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642
				c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854
				c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72
				c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"/>
			</svg>
		  </button>
		</div>
	  </div>
	{:else}
	  <p class="text-lg font-medium text-white py-5">All quotes for today have been completed!</p>
	{/if}
  </div>