export type Persona = {
	nome: string;
	immagine: string;
	curiosita: string;
	ruolo: string;
};

// Le foto delle persone sono tutte nella cartella `static/images/persone`
export const persone: Array<Persona> = [
	{
		nome: 'Chiara Bob',
		immagine: 'chiara.jpeg',
		curiosita: 'Lorem ipsum ...',
		ruolo: 'Graphic designer'
	},
	{
		nome: 'Gino',
		immagine: 'giovanni.jpeg',
		curiosita: 'Lorem ipsum ...',
		ruolo: 'Sviluppatore'
	}
];
