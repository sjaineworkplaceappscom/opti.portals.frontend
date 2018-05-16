import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipingGridComponent } from './shiping-grid.component';

describe('ShipingGridComponent', () => {
  let component: ShipingGridComponent;
  let fixture: ComponentFixture<ShipingGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipingGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
