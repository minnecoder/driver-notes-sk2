<div class="main">
	<a class="navLink" href="/addnotes">Add</a>
	<a class="navLink" href="/stoplist">Stops</a>

	<form class="logoutForm" action="/logout" method="POST">
		<button class="logout" type="submit">Logout</button>
	</form>
</div>

<style>
	.main {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #1e1f23;
		text-align: center;
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
	}

	.navLink {
		display: inline-block;
		padding: 0.5rem 1rem;
		margin: 0.5rem 0;
		text-decoration: none;
		color: #fff;
	}

	.logout {
		border: none;
		background: none;
		font-family: inherit;
		font-size: 1rem;
		cursor: pointer;
		color: #fff;
	}
</style>
