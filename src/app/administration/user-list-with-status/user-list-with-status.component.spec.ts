import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListWithStatusComponent } from './user-list-with-status.component';

describe('UserListWithStatusComponent', () => {
  let component: UserListWithStatusComponent;
  let fixture: ComponentFixture<UserListWithStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListWithStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListWithStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
