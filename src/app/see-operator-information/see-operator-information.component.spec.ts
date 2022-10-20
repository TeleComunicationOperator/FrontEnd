import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeOperatorInformationComponent } from './see-operator-information.component';

describe('SeeOperatorInformationComponent', () => {
  let component: SeeOperatorInformationComponent;
  let fixture: ComponentFixture<SeeOperatorInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeOperatorInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeOperatorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
