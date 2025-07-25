<script lang="ts" module>
	import type { Evento } from '../types';

	export const evento: Evento = {
		titolo: 'Gare di Nuoto Regionali',
		sottitolo: 'Campionato regionale di nuoto per tutte le categorie',
		data: new Date(2025, 5, 14, 15, 30), // June 14, 2025 at 15:30
		luogo: 'Piscina Olimpica Comunale',
		immagine: '/images/nuoto.jpg'
	};
</script>

<div class="prose mx-auto pt-8">
	<img src={evento.immagine} alt="Nuotatori in gara" class="rounded-lg" />

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
		Tuffati nell'emozione delle <strong>Gare di Nuoto Regionali</strong>! Un weekend dedicato al
		nuoto competitivo che vedrà gareggiare i migliori atleti della regione nella moderna
		<strong>Piscina Olimpica Comunale</strong>.
	</p>

	<p>
		<strong>Categorie e distanze:</strong><br />
		• <strong>Esordienti A (2013-2014):</strong> 50m e 100m stile libero, dorso, rana<br />
		• <strong>Ragazzi (2011-2012):</strong> 50m, 100m, 200m tutti gli stili + 200m misti<br />
		• <strong>Juniores (2009-2010):</strong> 50m, 100m, 200m, 400m + 200m/400m misti<br />
		• <strong>Seniores (2008 e precedenti):</strong> Tutte le distanze olimpiche
	</p>

	<p>
		<strong>Programma gare:</strong><br />
		<strong>Sabato 14 giugno</strong> - Batterie pomeriggio (15:30-19:00)<br />
		<strong>Domenica 15 giugno</strong> - Finali mattino (9:00-12:30) e pomeriggio (15:30-18:00)
	</p>

	<p>
		La competizione si svolge in vasca da 50 metri con cronometraggio elettronico e sistema
		anti-onda. Tutte le gare sono valide per il ranking regionale FIN e per le qualificazioni ai
		campionati italiani.
	</p>

	<p>
		<strong>Iscrizione e documenti:</strong><br />
		• Iscrizione: €8 per gara individuale, €12 per staffetta<br />
		• Scadenza: 7 giugno 2025 ore 24:00<br />
		• Richiesti: certificato medico agonistico e tessera FIN
	</p>

	<p>
		<strong>Servizi:</strong> Riscaldamento pre-gara, cronometraggio ufficiale, assistenza medica, cerimonia
		di premiazione, live streaming delle finali.
	</p>

	<p>
		Iscrizioni tramite <a
			href="https://federnuoto.it/iscrizioni-regionali"
			target="_blank"
			rel="noopener">portale FIN</a
		><br />
		Info: <a href="mailto:gare@nuotocomunale.it">gare@nuotocomunale.it</a> | Tel. 348.123.4567
	</p>
</div>
