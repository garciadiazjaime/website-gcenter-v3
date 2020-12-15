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
	footer {
		padding: 6px 0;
		color: white;
		font-size: 10px;
	}
	footer p {
		margin: 0;
		padding: 0;
	}
	footer a {
		text-decoration: none;
		color: #EEE;
	}
	footer a:visited {
		color: #EEE;
	}

	ul {
		list-style-type: none;
		padding-left: 0;
		display: flex;
	}

 li {
		margin-right: 10px;
	}

	.sponsored {
		color: #EEE;
	}
</style>

<main>
	<Nav />
	<slot></slot>
	<ul className="social-links">
		<li>
			<a href="https://www.facebook.com/garitacenter/" title="Facebook Garita Center" rel="nofollow">
				<svg width="50" height="50" viewBox="0 0 30 30">
					<circle cx="15" cy="15" r="15" fill="#666" />
					<path d="M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z" fill="#fff" />
				</svg>
			</a>
		</li>
		<li>
			<a href="https://twitter.com/garita_center" title="Twitter Garita Center" rel="nofollow">
				<svg width="50" height="50" viewBox="0 0 30 30">
					<circle cx="15" cy="15" r="15" fill="#666" />
					<path d="M23.5 9.7c-0.6 0.3-1.3 0.5-2 0.5 0.7-0.4 1.3-1.1 1.5-1.9 -0.7 0.4-1.4 0.7-2.2 0.8 -0.6-0.7-1.5-1.1-2.5-1.1 -1.9 0-3.5 1.6-3.5 3.5 0 0.3 0 0.5 0.1 0.8 -2.9-0.1-5.5-1.5-7.2-3.6 -0.3 0.5-0.5 1.1-0.5 1.8 0 1.2 0.6 2.3 1.6 2.9 -0.6 0-1.1-0.2-1.6-0.4 0 0 0 0 0 0 0 1.7 1.2 3.1 2.8 3.4 -0.3 0.1-0.6 0.1-0.9 0.1 -0.2 0-0.4 0-0.7-0.1 0.4 1.4 1.7 2.4 3.3 2.4 -1.2 0.9-2.7 1.5-4.3 1.5 -0.3 0-0.6 0-0.8 0 1.5 1 3.4 1.6 5.3 1.6 6.4 0 9.9-5.3 9.9-9.9 0-0.1 0-0.3 0-0.4C22.4 11 23 10.4 23.5 9.7z" fill="#fff" />
				</svg>
			</a>
		</li>
	</ul>
	<div class="sponsored">
		<p>
			Reporte patrocinado por:
			<br />
			<b>Portable Car Vacuum Cleaner</b>
		</p>
		<a target="_blank" rel="nofollow" href="https://www.amazon.com/gp/product/B08FCGW4TR/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08FCGW4TR&linkCode=as2&tag=mintitmedia-20&linkId=4fd29d97e600fc6daa84c60f333c57e0"><img alt="" border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B08FCGW4TR&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=mintitmedia-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=mintitmedia-20&l=am2&o=1&a=B08FCGW4TR" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
	</div>
	<footer>
		<p><a href="garitas">Garita Center</a> muestra el <a href="reporte">reporte</a> de garitas para cruzar la linea de Tijuana a San Ysidro. Datos extraidos de la la U.S. CBP, para vehículos particulares o cruce peatonal.</p>
		<p>Un proyecto de MINT. Diseño de Pool.</p>
	</footer>
</main>
