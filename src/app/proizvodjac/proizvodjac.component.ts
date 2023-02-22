import { Component, OnInit, ViewChild } from '@angular/core';
import { ProizvodjacService } from '../Service/proizvodjac.service';
import { MatTableDataSource } from '@angular/material/table';
import { Proizvodjac } from '../Model/proizvodjac.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ProizvodjacDijalogComponent } from '../Dijalog/proizvodjac-dijalog/proizvodjac-dijalog.component';

@Component({
  selector: 'app-proizvodjac',
  templateUrl: './proizvodjac.component.html',
  styleUrls: ['./proizvodjac.component.css']
})
export class ProizvodjacComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'naziv', 'adresa', 'kontakt', 'akcije'];
  dataSource : MatTableDataSource<Proizvodjac>;  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private proizvodjacService:ProizvodjacService, public dialog:MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(){
    this.proizvodjacService.getAllProizvodjac().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openDialog(flag:number, id:number, naziv:string, adresa:string, kontakt:string){
    const dialogRef = this.dialog.open(ProizvodjacDijalogComponent, {data: {id:id, naziv:naziv, adresa:adresa, kontakt:kontakt}})
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result=>{
      if(result === 1){
        this.loadData();
      }
    })
  }
}
