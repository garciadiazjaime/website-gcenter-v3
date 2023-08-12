<script>
  export let city = 'tijuana'

  const data = {
    tijuana: {
      title: 'Tijuana - San Ysidro y Otay',
      subtitle: 'Tijuana'
    },
    mexicali: {
      title: 'Mexicali - Calexico East / West',
      subtitle: 'Mexicali'
    }
  }
</script>
<style>
	footer {
		padding: 6px 0;
		color: white;
	}
  small {
		font-size: 10px;
	}
  small a {
    text-decoration: none;
  }

  .social-links {
		list-style-type: none;
		padding-left: 0;
		display: flex;
	}

 li {
		margin-right: 10px;
	}

	.sponsored{
		color: #EEE;
		margin: 12px 0;
	}

	.sponsored strong{
		display: block;
		font-weight: normal;
	}

	.sponsored a{
		color: #EEE;
		font-size: 14px;
		text-decoration: none;
	}
	.info {
		margin: 12px 0;
		color: white;
	}
	.info a{
		color: white;
	}
</style>

<footer>
  <div class="info">
    Datos Curiosos sobre Garitas:
    <ul>
      <li>La Garita de San Ysidro es la más transitada del mundo.</li>
      <li>La Garita de Otay es la principal garita comercial que conecta a California y México.</li>
      <li>La Garita de Otay y la Garita de San Ysidro están a 10 kilómetros de distancia.</li>
    </ul>
  </div>
  <div class="info">
    Visita nuestra sección de <a href="/faq">Preguntas Frecuentes</a>, con información sobre el cruce de Garitas {data[city].title}.
  </div>
  <ul class="social-links">
    <li>
      <a href="https://www.facebook.com/garitacenter/" title="Facebook Reporte Garitas Tijuana | Garita Center" rel="nofollow">
        <svg width="50" height="50" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="15" fill="#666" />
          <path d="M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z" fill="#fff" />
        </svg>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/garita_center" title="Twitter Reporte Garitas Tijuana | Garita Center" rel="nofollow">
        <svg width="50" height="50" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="15" fill="#666" />
          <path d="M23.5 9.7c-0.6 0.3-1.3 0.5-2 0.5 0.7-0.4 1.3-1.1 1.5-1.9 -0.7 0.4-1.4 0.7-2.2 0.8 -0.6-0.7-1.5-1.1-2.5-1.1 -1.9 0-3.5 1.6-3.5 3.5 0 0.3 0 0.5 0.1 0.8 -2.9-0.1-5.5-1.5-7.2-3.6 -0.3 0.5-0.5 1.1-0.5 1.8 0 1.2 0.6 2.3 1.6 2.9 -0.6 0-1.1-0.2-1.6-0.4 0 0 0 0 0 0 0 1.7 1.2 3.1 2.8 3.4 -0.3 0.1-0.6 0.1-0.9 0.1 -0.2 0-0.4 0-0.7-0.1 0.4 1.4 1.7 2.4 3.3 2.4 -1.2 0.9-2.7 1.5-4.3 1.5 -0.3 0-0.6 0-0.8 0 1.5 1 3.4 1.6 5.3 1.6 6.4 0 9.9-5.3 9.9-9.9 0-0.1 0-0.3 0-0.4C22.4 11 23 10.4 23.5 9.7z" fill="#fff" />
        </svg>
      </a>
    </li>
  </ul>
  <div class="sponsored">
    <strong>Reporte Garitas {data[city].subtitle} patrocinado por</strong>
    <a href="https://coupons.garitacenter.com/">Coupons Promo codes | Papa Johns</a> <br />
  </div>

  <div class="info">
    <small>
      <strong>Garita Center</strong> muestra <a href="/reporte/">reporte</a> <a href="/garitas">garitas</a> para cruzar <strong>línea {data[city].title}</strong>. Datos extraidos de CBP, para vehículos particulares y cruce peatonal.
      <br />
      <a href="/" title="Reporte de Garitas Tijuana">Tijuana</a> | <a href="/mexicali/" title="Reporte de Garitas Mexicali">Mexicali</a>
    </small>
  </div>
</footer>
