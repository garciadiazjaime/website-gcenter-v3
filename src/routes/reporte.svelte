<style>
	img {
		width: 100%;
	}
  h1, p {
    color: white;
  }
</style>

<svelte:head>
	<title>Garita Center - Reporte de las últimas 24 horas</title>
	<meta name="description" content="Reporte de las últimas 24 horas para cruzar la linea fronteriza de Tijuana - San Diego para el puerto de San Ysidro.">
</svelte:head>

<section>
  <h1>Reporte de las últimas 24 horas</h1>
  <p>
    Garita: San Ysidro <br />
    Cruzando en: Carro <br />
    Tipo de puerta: Normal
  </p>
	<img src="https://api.garitacenter.com/report/last-24hrs-image?city=tijuana" alt="últimas 24 horas"/>
</section>
