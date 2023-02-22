import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { StavkaRacuna } from '../Model/stavkaracuna.model';

@Injectable()
export class StavkaRacunaService{

    private url = 'http://localhost:8083/stavkaracuna/';
    private urll = 'http://localhost:8083/stavkaracuna/id/';

    stavkaracuna:BehaviorSubject<StavkaRacuna[]> = new BehaviorSubject<StavkaRacuna[]>([]);
    
    constructor(private httpClient:HttpClient){}

    public getAllStavkaRacuna():Observable<StavkaRacuna[]>{
        this.httpClient.get<StavkaRacuna[]>(this.url).subscribe(data=>{
            this.stavkaracuna.next(data);
        },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
        return this.stavkaracuna.asObservable();
    }

    public getAllStavkaRacunaForRacun(idRacuna:number):Observable<StavkaRacuna[]>{
        this.httpClient.get<StavkaRacuna[]>(this.urll + idRacuna).subscribe(data=>{
            this.stavkaracuna.next(data);
        },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
        return this.stavkaracuna.asObservable();
    }

    public addStavkaRacuna(stavkaracuna:StavkaRacuna){
        this.httpClient.post(this.url, stavkaracuna).subscribe();
    }

    public updateStavkaRacuna(stavkaracuna:StavkaRacuna){
        this.httpClient.put(this.url + stavkaracuna.id, stavkaracuna).subscribe();
    }

    public deleteStavkaRacuna(id:number){
        this.httpClient.delete(this.url + id).subscribe();
    }
}