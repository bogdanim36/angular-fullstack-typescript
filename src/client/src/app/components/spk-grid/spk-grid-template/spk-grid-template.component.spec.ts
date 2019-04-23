import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpkGridTemplateDirective } from './spk-grid-template.directive';

describe('SpkGridTemplateDirective', () => {
  let component: SpkGridTemplateDirective;
  let fixture: ComponentFixture<SpkGridTemplateDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpkGridTemplateDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpkGridTemplateDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
