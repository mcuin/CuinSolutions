import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacrosManagerComponent } from './macros-manager.component';

describe('MacrosManagerComponent', () => {
  let component: MacrosManagerComponent;
  let fixture: ComponentFixture<MacrosManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacrosManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacrosManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
