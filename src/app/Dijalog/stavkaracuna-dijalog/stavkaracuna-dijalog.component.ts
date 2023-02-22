import { Component, OnInit, Inject } from '@angular/core';
import { StavkaRacunaService } from 'src/app/Service/stavkaracuna.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StavkaRacuna } from 'src/app/Model/stavkaracuna.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RacunService } from 'src/app/Service/racun.service';
import { ProizvodService } from 'src/app/Service/proizvod.service';
import { Racun } from 'src/app/Model/racun.model';
import { Proizvod } from 'src/app/Model/proizvod.model';

@Component({
  selector: 'app-stavkaracuna-dijalog',
  templateUrl: './stavkaracuna-dijalog.component.html',
  styleUrls: ['./stavkaracuna-dijalog.component.css']
})
export class StavkaracunaDijalogComponent implements OnInit {
  flag:number;
  racuni:Racun[];
  proizvodi:Proizvod[];

  constructor(public stavkaRacunaService:StavkaRacunaService,
              @Inject(MAT_DIALOG_DATA) public data:StavkaRacuna,
              public snackBar:MatSnackBar,
              public dialogRef:MatDialogRef<StavkaracunaDijalogComponent>,
              public racunService:RacunService,
              public proizvodService:ProizvodService) {}


  ngOnInit() {
    this.racunService.getAllRacun().subscribe(data=>{
      this.racuni= data;
    })

    this.proizvodService.getAllProizvod().subscribe(data=>{
      this.proizvodi = data;
    })
  }

  public add(){
    this.stavkaRacunaService.addStavkaRacuna(this.data);
    this.snackBar.open('Uspesno dodata stavka racuna:', 'U redu', {duration:2000})
  }

  public update(){
    this.stavkaRacunaService.updateStavkaRacuna(this.data);
    this.snackBar.open('Uspesno modifikovana stavka racuna: ' + this.data.id, 'U redu', {duration:2000})
  }

  public delete(){
    this.stavkaRacunaService.deleteStavkaRacuna(this.data.id);
    this.snackBar.open('Uspesno obrisana stavka racuna: ' + this.data.id, 'U redu', {duration:2000})
  }

  public cancel(){
    this.dialogRef.close();
    this.snackBar.open('Odustali ste','U redu', {duration:2000});
  }
}
