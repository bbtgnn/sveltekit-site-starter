<script lang="ts" module>
	import type { Evento } from '../types';

	export const evento: Evento = {
		titolo: 'Torneo di Calcio Cittadino',
		sottitolo: 'Campionato estivo per squadre amatoriali e giovanili',
		data: new Date(2025, 6, 12, 9, 0), // July 12, 2025 at 9:00
		luogo: 'Centro Sportivo Comunale',
		immagine: '/images/torneo-calcio.jpg'
	};
</script>

<div class="prose mx-auto pt-8">
	<img src={evento.immagine} alt="Campo da calcio" class="rounded-lg" />

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
		È arrivato il momento di scendere in campo! Il <strong>Torneo di Calcio Cittadino</strong> è l'evento
		sportivo dell'estate che riunisce squadre amatoriali e giovanili per una competizione all'insegna
		del fair play e del divertimento.
	</p>

	<p>
		Il torneo si articola in diverse categorie:<br />
		• <strong>Under 16</strong> - per i giovani talenti<br />
		• <strong>Amatoriale</strong> - per squadre di amici e colleghi<br />
		• <strong>Veterani Over 35</strong> - per chi non smette mai di giocare
	</p>

	<p>
		Le partite si svolgeranno sui campi in erba sintetica del <strong
			>Centro Sportivo Comunale</strong
		>
		con inizio alle ore 9:00. Ogni squadra è composta da 7 giocatori + 3 riserve.<br />
		La finale si terrà nel pomeriggio alle 18:00 con premiazione a seguire.
	</p>

	<p>
		<strong>Iscrizioni:</strong> €50 per squadra (include kit gara e arbitraggio)<br />
		<strong>Scadenza iscrizioni:</strong> 5 luglio 2025
	</p>

	<p>
		Per iscrivere la tua squadra, compila il <a
			href="https://forms.gle/torneo-calcio-2025"
			target="_blank"
			rel="noopener">modulo di registrazione</a
		>.<br />
		Consulta il regolamento completo sul
		<a href="https://www.esempio.it/torneo-calcio-regolamento" target="_blank" rel="noopener"
			>sito ufficiale</a
		>.
	</p>

	<p>
		Per informazioni: <a href="mailto:torneo@centrosportivo.it">torneo@centrosportivo.it</a> o chiama
		il 333.123.4567
	</p>
</div>
