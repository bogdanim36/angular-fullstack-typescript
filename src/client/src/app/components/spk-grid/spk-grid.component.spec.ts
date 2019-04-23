import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpkGridComponent } from './spk-grid.component';

describe('SpkGridComponent', () => {
  let component: SpkGridComponent;
  let fixture: ComponentFixture<SpkGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpkGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpkGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
