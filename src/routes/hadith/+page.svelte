<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { locale, _ } from 'svelte-i18n';
	import Header from '../../components/Header.svelte';
	import { readConfig, saveConfig, getRandomNumber } from '../../utils/helpers.js';

	let hadithText = '';

	let hadithPerDay;

	let lang = 'en';

	let hadithOfTheDayEn = [
		'The best among you are those who have the best manners and character.',
		'Whoever does not show mercy to others, Allah will not show mercy to him.',
		'The believer is not one who eats his fill while his neighbor is hungry.',
		'A good word is charity.',
		'Allah does not judge you based on your appearance and wealth, but He looks at your hearts and actions.',
		'The most beloved of people to Allah are those who are most beneficial to others.'
	];

	let hadithOfTheDayAr = [
		'أفضلكم من تعلم القرآن وعلمه',
		'إنما بعثت لأتمم مكارم الأخلاق',
		'المسلم من سلم المسلمون من لسانه ويده',
		'لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه',
		'صلوا كما رأيتموني أصلي',
		'لا يزال الرجل يحتسب في الصدقة حتى يموت'
	];

	function hideHadith() {
		hadithPerDay--;
		if (lang === 'en') {
			hadithText = hadithOfTheDayEn[getRandomNumber(0, hadithOfTheDayEn.length - 1)];
		} else if (lang == 'ar') {
			hadithText = hadithOfTheDayAr[getRandomNumber(0, hadithOfTheDayAr.length - 1)];
		}
		saveConfig({ hadithPerDay });
	}

	// Set locale based on user's preferred language
	if (lang == 'ar') {
		lang = locale.set('ar');
		hadithText = hadithOfTheDayAr[getRandomNumber(0, hadithOfTheDayAr.length - 1)];
	} else if (lang == 'en') {
		lang = locale.set('en');
		hadithText = hadithOfTheDayEn[getRandomNumber(0, hadithOfTheDayEn.length - 1)];
	}

	onMount(() => {
		const userConfig = readConfig();
		if (userConfig) {
			hadithPerDay = userConfig.hadithPerDay;
		}
	});
</script>

<div class="flex flex-col justify-center items-center">
	<Header title={$_('hadith.daily_hadith')} />
	{#if hadithPerDay > 0}
		<div class="w-full max-w-3xl px-5 py-4 text-center">
			<div class="bg-gray-50 shadow-xl">
				<p class="text-xl font-bold mb-2 border p-4">
					{hadithText}
				</p>
				<div class="flex pb-2 justify-between text-sm px-2 font-medium">
					<p class="text-shamrock-900 font-medium">
						{hadithPerDay}
						{$_('hadith.hadith_left_for_today')}
					</p>
					<button
						class="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
						on:click={hideHadith}
					>
						<svg
							version="1.0"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 64 64"
							xml:space="preserve"
						>
							<path
								fill-rule="evenodd"
								d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265
					C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642
					c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854
					c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72
					c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	{:else}
		<p class="text-lg font-medium text-white py-5">
			{$_('hadith.all_hadith_for_today_have_been_completed')}!
		</p>
	{/if}
</div>
