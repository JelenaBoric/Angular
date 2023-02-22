import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proizvodjac } from 'src/app/Model/proizvodjac.model';
import { ProizvodjacService } from 'src/app/Service/proizvodjac.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-proizvodjac-dijalog',
  templateUrl: './proizvodjac-dijalog.component.html',
  styleUrls: ['./proizvodjac-dijalog.component.css']
})
export class ProizvodjacDijalogComponent implements OnInit {
  flag:number;
  
  constructor(public dialogRef:MatDialogRef<ProizvodjacDijalogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:Proizvodjac,
              public proizvodjacService:ProizvodjacService,
              public snackBar:MatSnackBar) {}
              
  ngOnInit() {
  }

  public add(){
    this.proizvodjacService.addProizvodjac(this.data);
    this.snackBar.open('Uspesno dodat proizvodjac: ', 'U redu', {duration:2000})
  }
  
  public update(){
    this.proizvodjacService.updateProizvodjac(this.data);
    this.snackBar.open('Uspesno modifikovan proizvodjac: ' + this.data.id, 'U redu', {duration:2000})
  }

  public delete(){
    this.proizvodjacService.deleteProizvodjac(this.data.id);
    this.snackBar.open('Uspesno obrisan proizvodjac: ' + this.data.id, 'U redu', {duration:2000})
  }

  public cancel(){
    this.dialogRef.close();
    this.snackBar.open('Odustali ste','U redu', {duration:2000})
  }
}
