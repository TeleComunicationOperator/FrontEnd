import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfullCreatedKeyComponent } from './sucessfull-created-key.component';

describe('SucessfullCreatedKeyComponent', () => {
  let component: SucessfullCreatedKeyComponent;
  let fixture: ComponentFixture<SucessfullCreatedKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessfullCreatedKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessfullCreatedKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
