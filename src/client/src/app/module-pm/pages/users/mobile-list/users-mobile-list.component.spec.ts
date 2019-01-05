import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMobileListComponent } from './users-mobile-list.component';

describe('ProjectsMobileListComponent', () => {
  let component: UsersMobileListComponent;
  let fixture: ComponentFixture<UsersMobileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersMobileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMobileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
