import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JurosCompostosFormula } from '../../../models/formulas/juros-compostos.formula';
import { TipoTaxaJuros } from 'src/app/enums/TipoTaxaJuros.enum';
import { TipoPeriodo } from 'src/app/enums/TipoPeriodo.enum';

@Component({
  selector: 'app-calculadora-juros-compostos',
  templateUrl: './calculadora-juros-compostos.component.html',
  styleUrls: ['./calculadora-juros-compostos.component.scss']
})
export class CalculadoraJurosCompostosComponent implements OnInit {

  title = 'Calculadora de Juros Compostos'
  description = 'O juros composto pode ser utilizado para guiar seus investimentos, projetando o rendimento para seus investimentos no futuro.'

  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      valorInicial: [null, [Validators.required]],
      valorMensal: [null, [Validators.required]],
      taxaJuros: [null, [Validators.required]],
      periodos: [null, [Validators.required]],
      tipoTaxaJuros: ['anual'],
      tipoPeriodo: ['anos']
    });
  }


  submit() {
    if (this.form.valid) {
      const jurosComposto = new JurosCompostosFormula(
        this.form.controls['valorInicial'].value,
        this.form.controls['valorMensal'].value,
        this.form.controls['taxaJuros'].value,
        this.form.controls['periodos'].value,
        this.form.controls['tipoTaxaJuros'].value,
        this.form.controls['tipoPeriodo'].value,
      );

      console.warn(jurosComposto.getMontanteFinal());
      console.warn(jurosComposto.getValorInvestido());
      console.warn(jurosComposto.getJurosAcumulados());
    }
  }
}
