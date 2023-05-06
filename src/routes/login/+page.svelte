<script>
  import { goto } from '$app/navigation';
  import { enhance } from '$app/forms';
  import { _  } from "svelte-i18n";
  
  export let onSuccess;

	let email = '';
	let password = '';
	let errorMessage = '';

  function updateEmail(event) {
	  email = parseInt(event.target.value);
	}
  
	function updatePassword(event) {
	  password = event.target.value;
	}

	function handleLogin() {
		onSuccess();
	}
</script>


<div class="p-4">
  <h1 class="text-3xl font-bold mb-4">Login</h1>

  <form on:submit|preventDefault={handleLogin} use:enhance>
    <div>
    <label class="block mb-2" for="email">Email:</label>
    <input type="email" class="w-full border rounded px-3 py-2" 
          placeholder="email" id="email" name="email"
          bind:value={email} on:input={updateEmail} 
          required>
    </div>
    <div>
    <label class="block mt-4 mb-2" for="password">Password:</label>
    <input type="password" class="w-full border rounded px-3 py-2"
    bind:value={password} on:input={updatePassword}  
    placeholder="******" id="password" name="password" required
     >
    </div>

    <div class="mt-4 flex justify-center gap-2">
      <button type="submit" class="py-2 px-4 bg-gray-600 ">Not registred ? </button>
      <button type="submit" 
      on:click={handleLogin}
      class="py-2 px-4 bg-blue-600 ">Login</button>
    </div>
  </form>
  <div class="mt-4 flex justify-center">
    <button class="text-white mt-4" on:click={() => goto('/config')}>Continue without login</button>
  </div>
</div>