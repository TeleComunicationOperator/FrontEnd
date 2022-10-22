import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBardUpdatedOperatorComponent } from './snack-bard-updated-operator.component';

describe('SnackBardUpdatedOperatorComponent', () => {
  let component: SnackBardUpdatedOperatorComponent;
  let fixture: ComponentFixture<SnackBardUpdatedOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBardUpdatedOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBardUpdatedOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
