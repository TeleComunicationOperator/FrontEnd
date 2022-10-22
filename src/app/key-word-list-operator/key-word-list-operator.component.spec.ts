import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyWordListOperatorComponent } from './key-word-list-operator.component';

describe('KeyWordListOperatorComponent', () => {
  let component: KeyWordListOperatorComponent;
  let fixture: ComponentFixture<KeyWordListOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyWordListOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyWordListOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
