import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoMainContenetAreaComponent } from './kendo-main-contenet-area.component';

describe('KendoMainContenetAreaComponent', () => {
  let component: KendoMainContenetAreaComponent;
  let fixture: ComponentFixture<KendoMainContenetAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoMainContenetAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoMainContenetAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
