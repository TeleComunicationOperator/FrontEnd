import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopUpUpdateProfileComponent } from './pop-up-update-profile.component';

describe('PopUpUpdateProfileComponent', () => {
  let component: PopUpUpdateProfileComponent;
  let fixture: ComponentFixture<PopUpUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpUpdateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
