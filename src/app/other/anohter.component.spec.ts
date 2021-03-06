/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnohterComponent } from './anohter.component';

describe('AnohterComponent', () => {
  let component: AnohterComponent;
  let fixture: ComponentFixture<AnohterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnohterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnohterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
