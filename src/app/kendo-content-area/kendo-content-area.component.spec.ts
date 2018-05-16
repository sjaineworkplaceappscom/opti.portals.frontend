import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoContentAreaComponent } from './kendo-content-area.component';

describe('KendoContentAreaComponent', () => {
  let component: KendoContentAreaComponent;
  let fixture: ComponentFixture<KendoContentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoContentAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
