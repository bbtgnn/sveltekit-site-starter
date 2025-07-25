<script lang="ts" module>
	import type { Evento } from '../types';

	export const evento: Evento = {
		titolo: 'Maratona Cittadina',
		sottitolo: 'Corsa su strada di 42,195 km attraverso il centro storico',
		data: new Date(2025, 4, 18, 8, 0), // May 18, 2025 at 8:00
		luogo: 'Piazza del Municipio',
		immagine: '/images/maratona.jpg'
	};
</script>

<div class="prose mx-auto pt-8">
	<img src={evento.immagine} alt="Corridori durante la maratona" class="rounded-lg" />

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
		Torna l'appuntamento più atteso dell'anno per gli amanti della corsa! La <strong
			>Maratona Cittadina</strong
		> ti porterà in un viaggio di 42,195 km attraverso i luoghi più belli e caratteristici della nostra
		città.
	</p>

	<p>
		<strong>Percorso:</strong><br />
		La partenza è fissata in <strong>Piazza del Municipio</strong> alle ore 8:00. Il tracciato attraversa
		il centro storico, i parchi cittadini, il lungofiume e ritorna al punto di partenza per un finale
		emozionante.
	</p>

	<p>
		<strong>Categorie di gara:</strong><br />
		• Maratona (42,195 km) - partenza ore 8:00<br />
		• Mezza Maratona (21,097 km) - partenza ore 9:00<br />
		• 10K Fun Run - partenza ore 10:00<br />
		• 5K Family Run - partenza ore 10:30
	</p>

	<p>
		<strong>Servizi inclusi:</strong><br />
		• Pettorale e chip cronometraggio<br />
		• Ristori ogni 5 km<br />
		• Assistenza medica lungo tutto il percorso<br />
		• Medaglia e pacco gara per tutti i finisher<br />
		• Spogliatoi e deposito borse
	</p>

	<p>
		<strong>Quote di iscrizione:</strong><br />
		Maratona: €35 | Mezza: €25 | 10K: €20 | 5K: €15<br />
		<em>Iscrizioni entro il 1° maggio: sconto del 20%</em>
	</p>

	<p>
		Iscriviti subito su <a
			href="https://www.runningitalia.it/maratona-cittadina"
			target="_blank"
			rel="noopener">Running Italia</a
		> o presso i nostri punti vendita convenzionati.
	</p>

	<p>
		Info: <a href="mailto:info@maratonacittadina.it">info@maratonacittadina.it</a> |
		<a href="https://facebook.com/maratonacittadina" target="_blank" rel="noopener">Facebook</a>
	</p>
</div>
