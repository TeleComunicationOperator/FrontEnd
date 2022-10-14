import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarSuccesfullComponent } from './snack-bar-succesfull.component';

describe('SnackBarSuccesfullComponent', () => {
  let component: SnackBarSuccesfullComponent;
  let fixture: ComponentFixture<SnackBarSuccesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarSuccesfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarSuccesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
