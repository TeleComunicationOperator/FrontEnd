import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarImcompleteRegisterFieldsComponent } from './snack-bar-imcomplete-register-fields.component';

describe('SnackBarImcompleteRegisterFieldsComponent', () => {
  let component: SnackBarImcompleteRegisterFieldsComponent;
  let fixture: ComponentFixture<SnackBarImcompleteRegisterFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarImcompleteRegisterFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarImcompleteRegisterFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
