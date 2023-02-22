import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { StavkaRacunaService } from '../Service/stavkaracuna.service';
import { StavkaRacuna } from '../Model/stavkaracuna.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Racun } from '../Model/racun.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { StavkaracunaDijalogComponent } from '../Dijalog/stavkaracuna-dijalog/stavkaracuna-dijalog.component';
import { Proizvod } from '../Model/proizvod.model';

@Component({
  selector: 'app-stavkaracuna',
  templateUrl: './stavkaracuna.component.html',
  styleUrls: ['./stavkaracuna.component.css']
})
export class StavkaRacunaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'rednibroj', 'kolicina','jedinicamere','cena','racun','proizvod', 'akcije'];
  dataSource : Observable<StavkaRacuna[]>;
  @Input() selektovanRacun:Racun;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private stavkaRacunaService:StavkaRacunaService, public dialog:MatDialog) { }

  ngOnInit() {
  }

  public loadData(){
    this.dataSource = this.stavkaRacunaService.getAllStavkaRacunaForRacun(this.selektovanRacun.id);
  }

  ngOnChanges(){
    if(this.selektovanRacun.id){
      this.loadData();
    }
  }

  public openDialog(flag:number, id:number,redniBroj:number, kolicina:number, jedinicaMere:number, cena:number, racunBean:Racun, proizvodBean:Proizvod){
    const dialogRef = this.dialog.open(StavkaracunaDijalogComponent, {data: {id:id, redniBroj:redniBroj, kolicina:kolicina, jedinicaMere:jedinicaMere, cena:cena, racunBean:racunBean, proizvodBean:proizvodBean}})
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result=>{
      if(result === 1){
        this.loadData();
      }
    })
  }
}
