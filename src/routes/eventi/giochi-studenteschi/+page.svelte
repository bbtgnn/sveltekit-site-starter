<script lang="ts" module>
	import type { Evento } from '../types';
	import copertina from './copertina.jpeg';

	export const evento: Evento = {
		titolo: 'Giochi Studenteschi',
		sottitolo: 'Una serata di giochi, sfide e divertimento per tutti gli studenti',
		data: new Date(2025, 5, 25, 19, 30),
		luogo: 'Palazzo del Ghiaccio',
		immagine: copertina
	};
</script>

<div class="prose mx-auto pt-8">
	<img src={evento.immagine} alt="Foto di copertina" class="rounded-lg" />

	<p>
		{evento.data.toLocaleDateString([], {
			hour: '2-digit',
			minute: '2-digit'
		})}
	</p>

	<h1>{evento.titolo}</h1>

	<h2>{evento.sottitolo}</h2>

	<p>
		Unisciti a noi per una serata di divertimento e competizione ai <strong
			>Giochi Studenteschi</strong
		>!<br />
		Partecipa a una varietà di giochi e sfide pensate per studenti di tutte le età: quiz a squadre, tornei
		di carte, giochi da tavolo e tanto altro.
	</p>

	<p>
		Metti alla prova le tue abilità, fai nuove amicizie e vinci fantastici premi! L'evento si terrà
		presso il <strong>Palazzo del Ghiaccio</strong> il 25 giugno 2025 alle 19:30.<br />
		L'ingresso è gratuito e aperto a tutti gli studenti.
	</p>

	<p>
		Per iscriverti, compila il <a
			href="https://forms.gle/gioco-studenteschi"
			target="_blank"
			rel="noopener">modulo di registrazione online</a
		>.<br />
		Scopri il programma completo della serata sulla
		<a href="https://www.esempio.it/giochi-studenteschi-programma" target="_blank" rel="noopener"
			>pagina ufficiale dell'evento</a
		>.
	</p>

	<p>
		Per ulteriori informazioni, scrivici a <a href="mailto:info@giochistudenteschi.it"
			>info@giochistudenteschi.it</a
		>
		o seguici su
		<a href="https://instagram.com/giochi.studenteschi" target="_blank" rel="noopener">Instagram</a
		>.
	</p>
</div>
