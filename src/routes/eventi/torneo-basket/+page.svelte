<script lang="ts" module>
	import type { Evento } from '../types';

	export const evento: Evento = {
		titolo: 'Torneo di Basket 3vs3 Urban League',
		sottitolo: 'Street basketball in stile americano nel cuore della città',
		data: new Date(2025, 8, 7, 10, 0), // September 7, 2025 at 10:00
		luogo: 'Piazza dello Sport',
		immagine: '/images/basket-street.jpg'
	};
</script>

<div class="prose mx-auto pt-8">
	<img src={evento.immagine} alt="Partita di streetball" class="rounded-lg" />

	<p>
		{evento.data.toLocaleDateString([], {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		})}
	</p>

	<h1>{evento.titolo}</h1>

	<h2>{evento.sottitolo}</h2>

	<p>
		Preparati a vivere l'energia pura del basket di strada! L'<strong>Urban League</strong> porta nella
		nostra città l'atmosfera autentica dello streetball americano con un torneo 3vs3 che promette spettacolo
		e adrenalina pura.
	</p>

	<p>
		<strong>Format del torneo:</strong><br />
		• Squadre da 3 giocatori + 1 riserva<br />
		• Partite a tempo: 12 minuti o primo a 21 punti<br />
		• Canestri da 2 punti (dentro l'arco) e 3 punti (oltre l'arco)<br />
		• Eliminazione diretta con ripescaggi per i quarti
	</p>

	<p>
		I campi street allestiti in <strong>Piazza dello Sport</strong> ricreeranno l'atmosfera dei playground
		di New York, con musica hip-hop, speaker ufficiale e un'energia che coinvolgerà tutta la città.
	</p>

	<p>
		<strong>Categorie:</strong><br />
		• <strong>Under 18</strong> (nati dal 2007)<br />
		• <strong>Open Maschile</strong> (senza limiti di età)<br />
		• <strong>Femminile</strong> (tutte le età)<br />
		• <strong>Over 35</strong> (veterani del parquet)
	</p>

	<p>
		<strong>Premi eccezionali:</strong><br />
		🏆 1° posto: €800 + Trofeo + Scarpe da basket per tutti<br />
		🥈 2° posto: €500 + Trofeo + Palloni ufficiali<br />
		🥉 3° posto: €300 + Trofeo<br />
		<em>Premio speciale per la schiacciata più spettacolare!</em>
	</p>

	<p>
		<strong>Experience completa:</strong><br />
		DJ set, food truck, area relax, streaming live su Instagram, contest di tiri da tre e skills challenge.
	</p>

	<p>
		<strong>Iscrizione:</strong> €60 per team (include maglie personalizzate)<br />
		Scadenza: <strong>30 agosto 2025</strong>
	</p>

	<p>
		Iscriviti su <a href="https://streetbasket.it/urban-league" target="_blank" rel="noopener"
			>streetbasket.it</a
		><br />
		Info: <a href="mailto:urbanleague@basket.it">urbanleague@basket.it</a> |
		<a href="https://tiktok.com/@urbanleague_basket" target="_blank" rel="noopener"
			>@urbanleague_basket</a
		>
	</p>
</div>
