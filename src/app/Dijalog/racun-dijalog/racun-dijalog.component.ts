import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Racun } from 'src/app/Model/racun.model';
import { RacunService } from 'src/app/Service/racun.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-racun-dijalog',
  templateUrl: './racun-dijalog.component.html',
  styleUrls: ['./racun-dijalog.component.css']
})
export class RacunDijalogComponent implements OnInit {
  flag:number;
  
  constructor(public dialogRef:MatDialogRef<RacunDijalogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:Racun,
              public racunService:RacunService,
              public snackBar:MatSnackBar) { }
              
  ngOnInit() {
  }

  public add(){
    this.racunService.addRacun(this.data);
    this.snackBar.open('Uspesno dodat racun: ', 'U redu', {duration:2000})
  }
  
  public update(){
    this.racunService.updateRacun(this.data);
    this.snackBar.open('Uspesno modifikovan racun: ' + this.data.id, 'U redu', {duration:2000})
  }

  public delete(){
    this.racunService.deleteRacun(this.data.id);
    this.snackBar.open('Uspesno obrisan racun: ' + this.data.id, 'U redu', {duration:2000})
  }

  public cancel(){
    this.dialogRef.close();
    this.snackBar.open('Odustali ste','U redu', {duration:2000})
  }
}
