import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarComponentFail } from './snack-bar.component';

describe('SnackBarComponent', () => {
  let component: SnackBarComponentFail;
  let fixture: ComponentFixture<SnackBarComponentFail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarComponentFail ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarComponentFail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
