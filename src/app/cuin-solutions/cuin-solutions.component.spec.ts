import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuinSolutionsComponent } from './cuin-solutions.component';

describe('CuinSolutionsComponent', () => {
  let component: CuinSolutionsComponent;
  let fixture: ComponentFixture<CuinSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuinSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuinSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
