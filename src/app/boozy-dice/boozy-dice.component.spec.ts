import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoozyDiceComponent } from './boozy-dice.component';

describe('BoozyDiceComponent', () => {
  let component: BoozyDiceComponent;
  let fixture: ComponentFixture<BoozyDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoozyDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoozyDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
