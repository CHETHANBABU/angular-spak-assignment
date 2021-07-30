import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaserouteComponent } from './baseroute.component';

describe('BaserouteComponent', () => {
  let component: BaserouteComponent;
  let fixture: ComponentFixture<BaserouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaserouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaserouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
