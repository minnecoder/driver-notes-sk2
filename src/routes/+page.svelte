<script lang="ts">
	let user = $state({
		userName: '',
		password: '',
		error: ''
	});

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	fetch('/api/v1/user/login', {
	// 		method: 'POST',
	// 		mode: 'cors',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify({
	// 			userName: user.userName,
	// 			password: user.password
	// 		})
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			if (Object.prototype.hasOwnProperty.call(data, 'error')) {
	// 				setUser({ error: data.error });
	// 				history.push('/');
	// 			}
	// 			if (Object.prototype.hasOwnProperty.call(data, 'token')) {
	// 				localStorage.setItem('token', data.token);
	// 				history.push('/stops');
	// 			}
	// 		});
	// };
</script>

<div class="main">
	<h1 class="loginTitle">Delivery Notes</h1>
	<p class="error">{user.error}</p>
	<!-- TODO: add "handleSubmit" to form below -->
	<form class="loginForm">
		<input name="userName" type="text" placeholder="User Name" bind:value={user.userName} />

		<input name="password" type="password" placeholder="Password" bind:value={user.password} />

		<input type="submit" value="Submit" />
		<div>
			<p>
				Don't have an account? <a class="link" href="/register">Register User</a>
			</p>
			<p>
				Login as a Demo User <a class="link" href="/demo">Click Here</a>
			</p>
		</div>
	</form>
</div>

<style>
	.main {
		background: #c0c6c8;
	}

	.loginTitle {
		text-align: center;
		color: red;
		margin-top: 4rem;
	}

	.error {
		text-align: center;
		color: red;
		font-weight: bold;
	}

	.loginForm {
		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.loginForm input {
		width: 20rem;
		margin: 0.5rem 0;
		padding: 1rem 0;
		text-align: center;
		border-radius: 8px;
		border: solid 1px #c0c6c8;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}

	.loginForm input[type='submit'] {
		width: 5rem;
		background: #767676;
		color: white;
		border: solid 1px #767676;
	}

	.link {
		text-decoration: none;
	}
</style>
