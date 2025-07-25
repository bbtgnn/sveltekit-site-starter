<script lang="ts" module>
	import type { Evento } from '../types';

	export const evento: Evento = {
		titolo: 'Torneo di Pallavolo Summer Cup',
		sottitolo: 'Competizione estiva di pallavolo su sabbia e indoor',
		data: new Date(2025, 7, 23, 14, 0), // August 23, 2025 at 14:00
		luogo: 'Palazzetto dello Sport',
		immagine: '/images/pallavolo.jpg'
	};
</script>

<div class="prose mx-auto pt-8">
	<img src={evento.immagine} alt="Partita di pallavolo" class="rounded-lg" />

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
		Il più grande evento di pallavolo dell'estate è qui! La <strong>Summer Cup</strong> combina la tradizione
		del volley indoor con l'energia esplosiva del beach volley, offrendo due giorni di pura adrenalina
		e competizione.
	</p>

	<p>
		<strong>Tornei in programma:</strong><br />
		• <strong>Beach Volley 2vs2</strong> (sabato mattina)<br />
		• <strong>Volley Indoor 6vs6 Maschile</strong> (sabato pomeriggio)<br />
		• <strong>Volley Indoor 6vs6 Femminile</strong> (domenica mattina)<br />
		• <strong>Volley Misto 6vs6</strong> (domenica pomeriggio)
	</p>

	<p>
		Le partite di beach volley si svolgeranno sui campi esterni in sabbia, mentre i tornei indoor si
		disputeranno nel <strong>Palazzetto dello Sport</strong> su 4 campi regolamentari. Sistema di eliminazione
		diretta con gironi di qualificazione.
	</p>

	<p>
		<strong>Premi in palio:</strong><br />
		1° classificato: €500 + Coppa + Medaglie<br />
		2° classificato: €300 + Coppa + Medaglie<br />
		3° classificato: €200 + Medaglie<br />
		<em>Premi aggiuntivi per miglior servizio e miglior schiacciata</em>
	</p>

	<p>
		<strong>Iscrizioni:</strong><br />
		Beach Volley: €40 per coppia<br />
		Indoor: €80 per squadra<br />
		<em>Include arbitraggio, assistenza medica e buffet finale</em>
	</p>

	<p>
		Scadenza iscrizioni: <strong>15 agosto 2025</strong><br />
		Registrazione online:
		<a href="https://volleytournament.it/summer-cup" target="_blank" rel="noopener"
			>volleytournament.it</a
		>
	</p>

	<p>
		Contatti: <a href="mailto:summercup@pallavolo.it">summercup@pallavolo.it</a> |
		<a href="https://instagram.com/summercup_volley" target="_blank" rel="noopener"
			>@summercup_volley</a
		>
	</p>
</div>
