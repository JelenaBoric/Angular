import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodDijalogComponent } from './proizvod-dijalog.component';

describe('ProizvodDijalogComponent', () => {
  let component: ProizvodDijalogComponent;
  let fixture: ComponentFixture<ProizvodDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProizvodDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
