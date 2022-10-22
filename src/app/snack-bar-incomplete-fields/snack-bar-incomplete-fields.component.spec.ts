import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarIncompleteFieldsComponent } from './snack-bar-incomplete-fields.component';

describe('SnackBarIncompleteFieldsComponent', () => {
  let component: SnackBarIncompleteFieldsComponent;
  let fixture: ComponentFixture<SnackBarIncompleteFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarIncompleteFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarIncompleteFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
