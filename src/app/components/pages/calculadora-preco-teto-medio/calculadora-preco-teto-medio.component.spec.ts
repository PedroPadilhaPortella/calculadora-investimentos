import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPrecoTetoMedioComponent } from './calculadora-preco-teto-medio.component';

describe('CalculadoraPrecoTetoMedioComponent', () => {
  let component: CalculadoraPrecoTetoMedioComponent;
  let fixture: ComponentFixture<CalculadoraPrecoTetoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraPrecoTetoMedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraPrecoTetoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
