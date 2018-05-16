import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoPanelComponent } from './kendo-panel.component';

describe('KendoPanelComponent', () => {
  let component: KendoPanelComponent;
  let fixture: ComponentFixture<KendoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
