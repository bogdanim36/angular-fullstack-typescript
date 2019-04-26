import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpkTableToolbarComponent } from './spk-table-toolbar.component';

describe('SpkTableToolbarComponent', () => {
  let component: SpkTableToolbarComponent;
  let fixture: ComponentFixture<SpkTableToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpkTableToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpkTableToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  	console.log('componenet',component);
    expect(component).toBeTruthy();
  });
});
