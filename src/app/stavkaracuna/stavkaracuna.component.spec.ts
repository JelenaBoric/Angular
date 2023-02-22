import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaRacunaComponent } from './stavkaracuna.component';

describe('StavkaRacunaComponent', () => {
  let component: StavkaRacunaComponent;
  let fixture: ComponentFixture<StavkaRacunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaRacunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaRacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
