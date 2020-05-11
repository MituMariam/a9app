import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParnersComponent } from './parners.component';

describe('ParnersComponent', () => {
  let component: ParnersComponent;
  let fixture: ComponentFixture<ParnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
