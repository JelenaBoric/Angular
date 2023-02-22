import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Racun } from '../Model/racun.model';

@Injectable()
export class RacunService{

    private url = 'http://localhost:8083/racun/';
    racun:BehaviorSubject<Racun[]> = new BehaviorSubject<Racun[]>([]);
    
    constructor(private httpClient:HttpClient){}

    public getAllRacun():Observable<Racun[]>{
        this.httpClient.get<Racun[]>(this.url).subscribe(data=>{
            this.racun.next(data);
        },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
        return this.racun.asObservable();
    }

    public addRacun(racun:Racun){
        this.httpClient.post(this.url, racun).subscribe();
    }

    public updateRacun(racun:Racun){
        this.httpClient.put(this.url + racun.id, racun).subscribe();
    }

    public deleteRacun(id:number){
        this.httpClient.delete(this.url + id).subscribe();
    }
}