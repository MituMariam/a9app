import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModHomeComponent } from './mod-home.component';

describe('ModHomeComponent', () => {
  let component: ModHomeComponent;
  let fixture: ComponentFixture<ModHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
