<script>
	import Nav from '../components/Header.svelte';
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: #343740;
		padding: 6px 12px;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.munchis {
		margin-top: 20px;
    min-height: 48px;
	}
	footer {
		padding: 6px 0;
		color: white;
		font-size: 10px;
	}
	footer p {
		margin: 0;
		padding: 0;
	}
</style>

<main>
	<Nav />
	<slot></slot>
	<div class="munchis">
		<script data-ad-client="ca-pub-2643588035417760" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	</div>
	<footer>
		<p>El Reporte de Garitas es extraido de CBP</p>
		<p>Reporte de Garitas para San Ysidro y Otay | Tijuana</p>
		<p>Un proyecto de MINT</p>
		<p>Diseño de Pool</p>
	</footer>
</main>
