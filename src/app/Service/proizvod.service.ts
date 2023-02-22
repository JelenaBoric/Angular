import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Proizvod } from '../Model/proizvod.model';

@Injectable()
export class ProizvodService{

    private url = 'http://localhost:8083/proizvod/';
    proizvod:BehaviorSubject<Proizvod[]> = new BehaviorSubject<Proizvod[]>([]);
    
    constructor(private httpClient:HttpClient){}

    public getAllProizvod():Observable<Proizvod[]>{
        this.httpClient.get<Proizvod[]>(this.url).subscribe(data=>{
            this.proizvod.next(data);
        },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
        return this.proizvod.asObservable();
    }

    public addProizvod(proizvod:Proizvod){
        this.httpClient.post(this.url, proizvod).subscribe();
    }

    public updateProizvod(proizvod:Proizvod){
        this.httpClient.put(this.url + proizvod.id, proizvod).subscribe();
    }

    public deleteProizvod(id:number){
        this.httpClient.delete(this.url + id).subscribe();
    }
}