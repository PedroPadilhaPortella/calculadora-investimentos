import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoPeriodo } from '../../../enums/TipoPeriodo.enum';
import { TipoTaxaJuros } from '../../../enums/TipoTaxaJuros.enum';
import { JurosCompostosFormula, JurosCompostosType } from './../../../models/formulas/juros-compostos.formula';

@Component({
  selector: 'app-calculadora-juros-compostos',
  templateUrl: './calculadora-juros-compostos.component.html',
  styleUrls: ['./calculadora-juros-compostos.component.scss']
})
export class CalculadoraJurosCompostosComponent implements OnInit {

  title = 'Calculadora de Juros Compostos'
  description = 'O juros composto pode ser utilizado para guiar seus investimentos, projetando o rendimento para seus investimentos no futuro.'

  jurosComposto!: JurosCompostosType;
  form: FormGroup = new FormGroup({});
  isSubmitted = false;

  tiposTaxaJuros = [
    { key: TipoTaxaJuros.ANUAL, value: TipoTaxaJuros.ANUAL },
    { key: TipoTaxaJuros.MENSAL, value: TipoTaxaJuros.MENSAL },
  ]

  tiposPeriodo = [
    { key: TipoPeriodo.ANOS, value: TipoPeriodo.ANOS },
    { key: TipoPeriodo.MESES, value: TipoPeriodo.MESES },
  ]

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      valorInicial: [null],
      valorMensal: [null],
      taxaJuros: [null, [Validators.required]],
      periodos: [null, [Validators.required]],
      tipoTaxaJuros: ['anual', [Validators.required]],
      tipoPeriodo: ['anos', [Validators.required]]
    });
  }

  submit() {
    if (this.form.valid) {
      this.isSubmitted = true;
      this.jurosComposto = new JurosCompostosFormula(
        this.form.controls['valorInicial'].value,
        this.form.controls['valorMensal'].value,
        this.form.controls['taxaJuros'].value,
        this.form.controls['periodos'].value,
        this.form.controls['tipoTaxaJuros'].value,
        this.form.controls['tipoPeriodo'].value,
      ).calcular();
    }
  }
}