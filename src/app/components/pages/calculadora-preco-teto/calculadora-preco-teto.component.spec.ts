import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPrecoTetoComponent } from './calculadora-preco-teto.component';

describe('CalculadoraPrecoTetoComponent', () => {
  let component: CalculadoraPrecoTetoComponent;
  let fixture: ComponentFixture<CalculadoraPrecoTetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraPrecoTetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraPrecoTetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
