import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpkTableBodyCellComponent } from './spk-table-body-cell.component';

describe('SpkTableBodyCellComponent', () => {
  let component: SpkTableBodyCellComponent;
  let fixture: ComponentFixture<SpkTableBodyCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpkTableBodyCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpkTableBodyCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
