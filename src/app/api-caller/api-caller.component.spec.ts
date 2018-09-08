import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallerComponent } from './api-caller.component';

describe('ApiCallerComponent', () => {
  let component: ApiCallerComponent;
  let fixture: ComponentFixture<ApiCallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiCallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
