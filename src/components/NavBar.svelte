<script>
	import { redirect } from '@sveltejs/kit';

	function logout() {
		//    localStorage.removeItem("token");
		redirect(307, '/');
	}
</script>

<div class="main">
	<a class="navLink" href="/add">Add</a>
	<a class="navLink" href="/stops">Stops</a>
	<a class="navLink" href="" onclick={logout}> Log Out </a>
</div>

<style>
	.main {
		background: #d0d1d4;
		text-align: center;
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
	}

	.navLink {
		display: inline-block;
		padding: 0.5rem 1rem;
		margin: 0.5rem 0;
		text-decoration: none;
		color: black;
	}
</style>
