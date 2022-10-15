import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleoperadoresComponent } from './teleoperadores.component';

describe('TeleoperadoresComponent', () => {
  let component: TeleoperadoresComponent;
  let fixture: ComponentFixture<TeleoperadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleoperadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleoperadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
