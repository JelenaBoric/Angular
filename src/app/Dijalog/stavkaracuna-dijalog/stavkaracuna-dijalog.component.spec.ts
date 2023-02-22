import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaracunaDijalogComponent } from './stavkaracuna-dijalog.component';

describe('StavkaracunaDijalogComponent', () => {
  let component: StavkaracunaDijalogComponent;
  let fixture: ComponentFixture<StavkaracunaDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaracunaDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaracunaDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
