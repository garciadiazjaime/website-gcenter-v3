<script>
	import { onMount } from 'svelte';
	import { getEmptyReport } from '../support/report'

	let report = getEmptyReport()

	function getReport(data) {
		const reponse = data

		const reportSorted = [
			{ port: 'sanYsidro', data: reponse.report.sanYsidro },
			{ port: 'otay', data: reponse.report.otay },
			{ port: 'pedwest', data: reponse.report.pedwest }
		]

		report = reportSorted
	}

	onMount(async () => {
		if (!window.GC_REPORT) {
			window.ps.subscribe('report', getReport)
		} else {
			getReport(window.GC_REPORT)
		}

		window._BUILD_VERSION = 'BUILD_VERSION'
	});

	function timeConvert(num){
		const hours = Math.floor(num / 60);
		let minutes = num % 60;
		if (minutes < 10) {
			minutes = `0${minutes}`
		}
		return `${hours}:${minutes}`;
	}

	export function printPort(value) {
		if (value === 'otay') {
			return 'Garita de Otay Mesa'
		}

		if (value === 'pedwest') {
			return 'Garita El Chaparral'
		}

		return 'Garita de San Ysidro'
	}

	export function printType(value) {
		if (value === 'sentri') {
			return "Sentri"
		}

		if (value === 'readyLane') {
			return "Ready Lane"
		}
		
		return "Normal"
	}

	export function printTime(value) {
		if (!value || value === '0') {
			return 'Sin espera'
		}

		if (value === '-1') {
			return '...'
		}

		if (value < 60) {
			return `${value} Minuto${value > 1 ? 's' : ''}`
		}

		return `${timeConvert(value)} Hora${value > 60 ? 's' : ''}`
	}

	export function printLanes(value) {
		const s = value > 1 ? 's' : ''
		return `${value} Linea${s} Abierta${s}`
	}
</script>

<style>
	section {
		background-color: white;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
		padding: 6px 12px;
	}

	div {
		margin-left: 12px;
		line-height: 20px;
	}

	h2 {
		background-color: #ddd;
		margin: 0;
		padding: 6px 12px;
		font-size: 1em;
	}

	h2 small {
		float: right;
	}

	h3 {
		margin: 0;
		opacity: .8;
	}

	strong {
		font-size: 1.3em;
		font-weight: 500;
	}

	span {
		width: 42px;
		height: 42px;
		text-align: center;
		opacity: 0.9;
	}

	p {
		margin: 0;
		opacity: .7;
	}

	.fa-walking {
		width: 24px;
	}

	.msg {
		padding: 8px 0;
		opacity: .8;
	}
</style>

<svelte:head>
	<title>Garita Center - Reporte de Garitas. San Ysidro y Otay | Tijuana</title>
	<meta name="description" content="Reporte de Garitas las 24 horas para cruzar la linea fronteriza de Tijuana - San Diego para el puerto de San Ysidro y Otay. Ready Lane y Sentri.">
</svelte:head>

<section>
	<div class="msg">
		La Garita está cerrada para viajes no esenciales hasta Enero 21, 2021. <a href="./faq">FAQ</a>
	</div>
	{#if report }
		{#each report as port}
			<h2>{printPort(port.port)} <small>24 hrs</small></h2>
			<ul>
				{#if port.data }
					{#each Object.keys(port.data) as type}
						{#each Object.keys(port.data[type]) as entry}
							<li>
								<span>
									{#if type === 'pedestrian' }
										<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="walking" class="svg-inline--fa fa-walking fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm94.5 149.1l-23.3-11.8-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9-36-.1-55.9 10.1-93.3 25.2-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9 15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3 17.1-4.3 27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7 17.2-68.7 5.5 16.5c5.3 16.1 16.7 29.4 31.7 37l23.3 11.8c15.6 7.9 34.6 1.5 42.5-14.3 7.7-15.7 1.4-35.1-14.3-43zM73.6 385.8c-3.2 8.1-8 15.4-14.2 21.5l-50 50.1c-12.5 12.5-12.5 32.8 0 45.3s32.7 12.5 45.2 0l59.4-59.4c6.1-6.1 10.9-13.4 14.2-21.5l13.5-33.8c-55.3-60.3-38.7-41.8-47.4-53.7l-20.7 51.5z"></path></svg>
									{:else }
										<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="car" class="svg-inline--fa fa-car fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg>
									{/if}
								</span>
								<div>
									<h3>{printType(entry)}</h3>
									<strong>{printTime(port.data[type][entry].time)}</strong>
									<p>{printLanes(port.data[type][entry].lanes)}</p>
								</div>
							</li>
						{/each}
					{/each}
				{/if}
			</ul>
		{/each}
	{/if}
</section>
