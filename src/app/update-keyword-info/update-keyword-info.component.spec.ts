import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKeywordInfoComponent } from './update-keyword-info.component';

describe('UpdateKeywordInfoComponent', () => {
  let component: UpdateKeywordInfoComponent;
  let fixture: ComponentFixture<UpdateKeywordInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateKeywordInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateKeywordInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
