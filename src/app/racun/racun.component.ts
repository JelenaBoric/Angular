import { Component, OnInit, ViewChild } from '@angular/core';
import { RacunService } from '../Service/racun.service';
import { MatTableDataSource } from '@angular/material/table';
import { Racun } from '../Model/racun.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RacunDijalogComponent } from '../Dijalog/racun-dijalog/racun-dijalog.component';

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {
  displayedColumns: string[] = ['id', 'datum', 'nacinplacanja', 'akcije'];
  dataSource : MatTableDataSource<Racun>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selektovanRacun :Racun;
  
  constructor(private racunService:RacunService, public dialog:MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(){
    this.racunService.getAllRacun().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public selectRow(row){
    this.selektovanRacun = row;
  }

  public openDialog(flag:number, id:number, datum:string, nacinPlacanja:string){
    const dialogRef = this.dialog.open(RacunDijalogComponent, {data: {id:id, datum:datum, nacinPlacanja:nacinPlacanja}})
    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result=>{
      if(result === 1){
        this.loadData();
      }
    })
  }
}
