import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormProfileComponent } from './update-form-profile.component';

describe('UpdateFormProfileComponent', () => {
  let component: UpdateFormProfileComponent;
  let fixture: ComponentFixture<UpdateFormProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFormProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
