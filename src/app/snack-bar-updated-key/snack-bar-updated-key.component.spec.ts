import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarUpdatedKeyComponent } from './snack-bar-updated-key.component';

describe('SnackBarUpdatedKeyComponent', () => {
  let component: SnackBarUpdatedKeyComponent;
  let fixture: ComponentFixture<SnackBarUpdatedKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarUpdatedKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarUpdatedKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
