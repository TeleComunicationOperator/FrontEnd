import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeClientInfoComponent } from './see-client-info.component';

describe('SeeClientInfoComponent', () => {
  let component: SeeClientInfoComponent;
  let fixture: ComponentFixture<SeeClientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeClientInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeClientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
