import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Proizvodjac } from '../Model/proizvodjac.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProizvodjacService{

    private url = 'http://localhost:8083/proizvodjac/';
    proizvodjac:BehaviorSubject<Proizvodjac[]> = new BehaviorSubject<Proizvodjac[]>([]);

    constructor(private httpClient:HttpClient){}

    public getAllProizvodjac():Observable<Proizvodjac[]>{
        this.httpClient.get<Proizvodjac[]>(this.url).subscribe(data=>{
            this.proizvodjac.next(data);
        },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
        return this.proizvodjac.asObservable();
    }

    public addProizvodjac(proizvodjac:Proizvodjac){
        this.httpClient.post(this.url, proizvodjac).subscribe();
    }

    public updateProizvodjac(proizvodjac:Proizvodjac){
        this.httpClient.put(this.url + proizvodjac.id, proizvodjac).subscribe();
    }

    public deleteProizvodjac(id:number){
        this.httpClient.delete(this.url + id).subscribe();
    }
}