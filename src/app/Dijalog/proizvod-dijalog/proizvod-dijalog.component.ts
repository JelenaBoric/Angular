import { Component, OnInit, Inject } from '@angular/core';
import { Proizvodjac } from 'src/app/Model/proizvodjac.model';
import { ProizvodService } from 'src/app/Service/proizvod.service';
import { ProizvodjacService } from 'src/app/Service/proizvodjac.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Proizvod } from 'src/app/Model/proizvod.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-proizvod-dijalog',
  templateUrl: './proizvod-dijalog.component.html',
  styleUrls: ['./proizvod-dijalog.component.css']
})
export class ProizvodDijalogComponent implements OnInit {
  flag: number;
  proizvodjaci: Proizvodjac[];

  constructor(public proizvodService:ProizvodService,
              @Inject(MAT_DIALOG_DATA) public data:Proizvod,
              public snackBar:MatSnackBar,
              public dialogRef:MatDialogRef<ProizvodDijalogComponent>,
              public proizvodjacService:ProizvodjacService) {}

  ngOnInit() {
    this.proizvodjacService.getAllProizvodjac().subscribe(data=>{
      this.proizvodjaci = data;
    })
  }

  public add(){
    this.proizvodService.addProizvod(this.data);
    this.snackBar.open('Uspesno dodat proizvod:', 'U redu', {duration:2000})
  }

  public update(){
    this.proizvodService.updateProizvod(this.data);
    this.snackBar.open('Uspesno modifikovan proizvod: ' + this.data.id, 'U redu', {duration:2000})
  }

  public delete(){
    this.proizvodService.deleteProizvod(this.data.id);
    this.snackBar.open('Uspesno obrisan proizvod: ' + this.data.id, 'U redu', {duration:2000})
  }

  public cancel(){
    this.dialogRef.close();
    this.snackBar.open('Odustali ste','U redu', {duration:2000})
  }
}
