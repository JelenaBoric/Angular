import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodjacDijalogComponent } from './proizvodjac-dijalog.component';

describe('ProizvodjacDijalogComponent', () => {
  let component: ProizvodjacDijalogComponent;
  let fixture: ComponentFixture<ProizvodjacDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProizvodjacDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodjacDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
