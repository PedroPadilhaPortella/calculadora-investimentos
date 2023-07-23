import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profissoes } from '../../../enums/Profissoes.enum';
import { ReservaDeEmergenciaFormula, ReservaType } from '../../../models/formulas/reserva-de-emergencia.formula';

@Component({
  selector: 'app-calculadora-reserva-de-emergencia',
  templateUrl: './calculadora-reserva-de-emergencia.component.html',
  styleUrls: ['./calculadora-reserva-de-emergencia.component.scss']
})
export class CalculadoraReservaDeEmergenciaComponent implements OnInit {

  title = 'Calculadora de Reserva de Emergência'
  description = 'A reserva de emergência é uma reserva de extrema importância para garantir que você consiga investir e construir seu patrimônio de forma segura. Calcule de forma simples!';

  reservaDeEmergencia!: ReservaType;
  form: FormGroup = new FormGroup({});
  isSubmitted = false;

  profissoes = [
    Profissoes.FUNCIONARIO_PUBLICO,
    Profissoes.CLT,
    Profissoes.MEI_AUTONOMO_EMPREENDEDOR,
  ]

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      profissao: [Profissoes.FUNCIONARIO_PUBLICO, [Validators.required]],
      custoFixo: [null, [Validators.required]],
      salario: [null, [Validators.required]],
      economiaMensal: [null, [Validators.required]],
    })
  }

  submit() {
    if (this.form.valid) {
      this.isSubmitted = true;
      this.reservaDeEmergencia = new ReservaDeEmergenciaFormula(
        this.form.controls['profissao'].value,
        this.form.controls['custoFixo'].value,
        this.form.controls['salario'].value,
        this.form.controls['economiaMensal'].value
      ).calcular();
    }
  }
}
