import { Allegato } from './allegato';
export class Lezione {
    titolo: string;
    descrizione: string;
    autore: string;
    contenuto: string;
    allegati: Allegato[];
    id: number;
    dataCreazione: Date;
}
