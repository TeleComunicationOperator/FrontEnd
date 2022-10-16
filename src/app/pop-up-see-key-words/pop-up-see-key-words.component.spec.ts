import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSeeKeyWordsComponent } from './pop-up-see-key-words.component';

describe('PopUpSeeKeyWordsComponent', () => {
  let component: PopUpSeeKeyWordsComponent;
  let fixture: ComponentFixture<PopUpSeeKeyWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpSeeKeyWordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSeeKeyWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
