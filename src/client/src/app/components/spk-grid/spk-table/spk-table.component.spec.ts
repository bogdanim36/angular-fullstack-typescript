import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpkTableComponent } from './spk-table.component';

describe('SpkTableComponent', () => {
  let component: SpkTableComponent;
  let fixture: ComponentFixture<SpkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpkTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
