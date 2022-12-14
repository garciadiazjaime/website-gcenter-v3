<script>
	export let city = 'tijuana'

	const	data = {
		tijuana: {
			title: 'Reporte de Garitas Tijuana',
			subtitle: 'Línea de San Ysidro y Otay'
		},
		mexicali:{
			title: 'Reporte de Garitas Mexicali',
			subtitle: 'Línea East (Nuevo) y West (Centro)'
		}
	}
</script>
<style>
	header {
		display: flex;
		height: 48px;
		margin-bottom: 6px;
	}
	h1 {
		color: white;
		font-size: 20px;
		margin: 0 12px;
	}
	h2 {
		color: white;
		margin: 0 12px;
		font-size: 16px;
	}
	img {
		width: 41px;
	}
</style>

<header>
	<a href="/">
		<img src="/garita-center-logo.webp" alt="Garita Center - Reporte de Garitas" width="41px" height="41px" />
	</a>
	<div>
		<h1>{data[city].title}</h1>
		<h2>{data[city].subtitle}</h2>
	</div>
</header>
