import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyWordsAdminComponent } from './key-words-admin.component';

describe('KeyWordsAdminComponent', () => {
  let component: KeyWordsAdminComponent;
  let fixture: ComponentFixture<KeyWordsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyWordsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyWordsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
