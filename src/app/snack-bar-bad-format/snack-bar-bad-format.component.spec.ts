import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnackBarBadFormatComponent } from './snack-bar-bad-format.component';

describe('SnackBarBadFormatComponent', () => {
  let component: SnackBarBadFormatComponent;
  let fixture: ComponentFixture<SnackBarBadFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarBadFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarBadFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
