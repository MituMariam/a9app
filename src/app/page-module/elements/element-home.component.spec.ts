import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementHomeComponent } from './element-home.component';

describe('ElementHomeComponent', () => {
  let component: ElementHomeComponent;
  let fixture: ComponentFixture<ElementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
