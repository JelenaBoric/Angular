import { Component, OnInit, ViewChild } from '@angular/core';
import { ProizvodService } from '../Service/proizvod.service';
import { MatTableDataSource } from '@angular/material/table';
import { Proizvod } from '../Model/proizvod.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProizvodDijalogComponent } from '../Dijalog/proizvod-dijalog/proizvod-dijalog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.css']
})
export class ProizvodComponent implements OnInit {

  displayedColumns: string[] = ['id', 'naziv', 'proizvodjac','akcije'];
  dataSource : MatTableDataSource<Proizvod>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private proizvodService:ProizvodService, public dialog:MatDialog) { }
  
  ngOnInit() {
    this.loadData();
  }

  public loadData(){
    this.proizvodService.getAllProizvod().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openDialog(flag:number, id:number, naziv:string, proizvodjacBean:string){
    const dialogRef = this.dialog.open(ProizvodDijalogComponent, {data: {id:id, naziv:naziv, proizvodjacBean:proizvodjacBean}})
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result=>{
      if(result === 1){
        this.loadData();
      }
    })
  }
}
