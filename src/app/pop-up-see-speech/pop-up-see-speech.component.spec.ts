import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSeeSpeechComponent } from './pop-up-see-speech.component';

describe('PopUpSeeSpeechComponent', () => {
  let component: PopUpSeeSpeechComponent;
  let fixture: ComponentFixture<PopUpSeeSpeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpSeeSpeechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSeeSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
