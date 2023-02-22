import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { ProizvodjacComponent } from "./proizvodjac/proizvodjac.component";
import { ProizvodComponent } from "./proizvod/proizvod.component";
import { RacunComponent } from "./racun/racun.component";
import { StavkaRacunaComponent } from "./stavkaracuna/stavkaracuna.component";
import { RouterModule, Routes } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { ProizvodjacService } from "./Service/proizvodjac.service";
import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RacunService } from "./Service/racun.service";
import { ProizvodService } from "./Service/proizvod.service";
import { StavkaRacunaService } from "./Service/stavkaracuna.service";
import { ProizvodjacDijalogComponent } from "./Dijalog/proizvodjac-dijalog/proizvodjac-dijalog.component";
import { ProizvodDijalogComponent } from "./Dijalog/proizvod-dijalog/proizvod-dijalog.component";
import { RacunDijalogComponent } from "./Dijalog/racun-dijalog/racun-dijalog.component";
import { StavkaracunaDijalogComponent } from "./Dijalog/stavkaracuna-dijalog/stavkaracuna-dijalog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { HomeComponent } from "./core/home/home.component";
import { AboutComponent } from "./core/about/about.component";
import { AuthorComponent } from "./core/author/author.component";

const Routes = [
  { path: "proizvod", component: ProizvodComponent },
  { path: "proizvodjac", component: ProizvodjacComponent },
  { path: "racun", component: RacunComponent },
  { path: "stavkaracuna", component: StavkaRacunaComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "author", component: AuthorComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    ProizvodjacComponent,
    ProizvodComponent,
    RacunComponent,
    StavkaRacunaComponent,
    ProizvodjacDijalogComponent,
    ProizvodDijalogComponent,
    RacunDijalogComponent,
    StavkaracunaDijalogComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forRoot(Routes),
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [
    ProizvodjacService,
    RacunService,
    ProizvodService,
    StavkaRacunaService,
  ],
  entryComponents: [
    ProizvodjacDijalogComponent,
    ProizvodDijalogComponent,
    RacunDijalogComponent,
    StavkaracunaDijalogComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
