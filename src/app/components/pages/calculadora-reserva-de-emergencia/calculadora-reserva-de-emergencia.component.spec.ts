import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraReservaDeEmergenciaComponent } from './calculadora-reserva-de-emergencia.component';

describe('CalculadoraReservaDeEmergenciaComponent', () => {
  let component: CalculadoraReservaDeEmergenciaComponent;
  let fixture: ComponentFixture<CalculadoraReservaDeEmergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraReservaDeEmergenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraReservaDeEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
