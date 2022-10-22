import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeyWordFormComponent } from './add-key-word-form.component';

describe('AddKeyWordFormComponent', () => {
  let component: AddKeyWordFormComponent;
  let fixture: ComponentFixture<AddKeyWordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKeyWordFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKeyWordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
