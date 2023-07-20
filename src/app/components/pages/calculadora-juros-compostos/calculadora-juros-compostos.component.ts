import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      valorInicial: [null],
      valorMensal: [null],
      taxaJuros: [null],
      periodos: [null],
      tipoTaxaJuros: [null],
      tipoPeriodo: [null]
    });
  }


  submit() {
    console.warn(this.form.value);
  }
}
