<script>
	let user = $state({
		userName: '',
		password: '',
		error: ''
	});

	// function handleSubmit(event) {
	// 	event.preventDefault();
	// 	fetch('/api/v1/user/add', {
	// 		method: 'POST',
	// 		mode: 'cors',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
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
	// 			if (Object.prototype.hasOwnProperty.call(data, 'success')) {
	// 				localStorage.setItem('token', data.token);
	// 				history.push('/stops');
	// 			}
	// 		});
	// }
</script>

<div>
	<h1 class="registerTitle">Delivery Notes</h1>
	<p class="error">{user.error}</p>
	<!-- TODO: Add "handleSubmit" to form below -->
	<form class="registerForm">
		<input
			required
			name="userName"
			type="text"
			placeholder="User Name"
			bind:value={user.userName}
		/>

		<input
			required
			name="password"
			type="password"
			placeholder="Password"
			bind:value={user.password}
		/>

		<input type="submit" value="Submit" />

		<div>
			<p>
				Already have an account? <a class="link" href="/">Login</a>
			</p>
			<p>
				Login as a Demo User <a class="link" href="/demo">Click Here</a>
			</p>
		</div>
	</form>
</div>

<style>
	.registerTitle {
		text-align: center;
		color: red;
		margin-top: 4rem;
	}

	.error {
		text-align: center;
	}

	.registerForm {
		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.registerForm input {
		width: 20rem;
		margin: 0.5rem 0;
		padding: 1rem 0;
		text-align: center;
		border-radius: 8px;
		border: solid 1px #c0c6c8;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	}

	.registerForm input[type='submit'] {
		width: 5rem;
		background: #767676;
		color: white;
		border: solid 1px #767676;
	}
	.link {
		text-decoration: none;
	}
</style>
