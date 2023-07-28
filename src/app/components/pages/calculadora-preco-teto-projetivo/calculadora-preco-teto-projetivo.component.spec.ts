import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPrecoTetoProjetivoComponent } from './calculadora-preco-teto-projetivo.component';

describe('CalculadoraPrecoTetoProjetivoComponent', () => {
  let component: CalculadoraPrecoTetoProjetivoComponent;
  let fixture: ComponentFixture<CalculadoraPrecoTetoProjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraPrecoTetoProjetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraPrecoTetoProjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
