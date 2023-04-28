<script>
	export let onSuccess;
  
	const dispatch = createEventDispatcher();

	let username = '';
	let password = '';
	let errorMessage = '';

	async function handleSubmit(event) {
		event.preventDefault();
		errorMessage = '';

		try {
			const user = await loginUser(username, password);
			dispatch('success', user);
		} catch (error) {
			errorMessage = error.message;
		}
	}

	function handleLogin() {
		// Perform login logic
		onSuccess();
	}
</script>


<div class="login-container p-4">
  <h1 class="text-3xl font-bold mb-4">Login</h1>
  <form on:submit|preventDefault={handleLogin}>
    <label class="block mb-2" for="email">Email:</label>
    <input class="w-full border-gray-300 rounded-md shadow-sm" type="email" id="email" name="email" required>

    <label class="block mt-4 mb-2" for="password">Password:</label>
    <input class="w-full border-gray-300 rounded-md shadow-sm" type="password" id="password" name="password" required>

    <div class="mt-4 flex justify-end">
      <button type="submit" class="btn btn-primary">Not registred ? </button>
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
  </form>
  <div class="mt-4 flex justify-center">
    <button class="btn btn-secondary">Continue without an account</button>
  </div>
</div>


<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
