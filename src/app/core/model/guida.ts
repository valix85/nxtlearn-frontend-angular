import { Livello } from './livello';
import { Capitolo } from './capitolo';

export class Guida {
    id: number;
    nome: string;
    descrizione: string;
    url: string;
    image: string;
    livello: Livello;
    capitoli: Capitolo[];
}
