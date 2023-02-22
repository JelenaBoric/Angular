import { Racun } from './racun.model';
import { Proizvod } from './proizvod.model';

export class StavkaRacuna{
    id:number;
    rednibroj:number;
    kolicina:number;
    jedinicaMere:string;
    cena:number;
    racunBean:Racun;
    proizvodBean:Proizvod;
}