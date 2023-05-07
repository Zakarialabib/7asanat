<script>
  import { goto } from '$app/navigation';
  import Header from '../components/Header.svelte';
  import { _ } from 'svelte-i18n';
</script>

<!-- Intro.svelte -->
<div class="flex flex-col items-center justify-center p-4 my-4">
  <Header title="{$_('home.title')}" />
  <p class="text-lg text-center mb-4">{$_('home.intro')}.</p>
  <div class="flex justify-center gap-4">
    

    <button class="py-2 px-4 bg-blue-600 text-white mt-4" on:click={() => goto('/login')}>{$_('home.already_have_an_account')}?</button>
  <button class="py-2 px-4 bg-blue-600 text-white mt-4" on:click={() => goto('/config')}>{$_('home.continue_without_login')}</button>
  </div>
</div>
