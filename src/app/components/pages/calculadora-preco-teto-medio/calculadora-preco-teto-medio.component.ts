import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrecoTetoMedioFormula, PrecoTetoMedioType } from '../../../models/formulas/preco-teto-medio.formula';

@Component({
  selector: 'app-calculadora-preco-teto-medio',
  templateUrl: './calculadora-preco-teto-medio.component.html',
  styleUrls: ['./calculadora-preco-teto-medio.component.scss']
})
export class CalculadoraPrecoTetoMedioComponent {

  title = 'Calculadora de Preço Teto Médio'
  description = 'A Calculadora de Preço Teto Médio se baseia na média dos proventos dos últimos 3 anos para estimar o preço teto dessa ação para o ano atual. O preço teto pode ser utilizado para guiar seus investimentos, definindo um preço máximo para os seus aportes nos investimentos, com base nos proventos distribuídos.'

  precoTeto!: PrecoTetoMedioType;
  form: FormGroup = new FormGroup({});
  isSubmitted = false;
  currentYear = 0
  lastYears = [0, 0, 0]
  innerWidth = 0

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getLastYears();
    this.setInnerWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setInnerWidth();
  }

  createForm() {
    this.form = this.formBuilder.group({
      ticket: ['', [Validators.required]],
      preco: [null, [Validators.required]],
      yield: [null, [Validators.required]],
      dividendosAno1: [null, [Validators.required]],
      dividendosAno2: [null, [Validators.required]],
      dividendosAno3: [null, [Validators.required]],
    });
  }

  getLastYears() {
    this.currentYear = new Date().getFullYear();
    this.lastYears = [this.currentYear - 1, this.currentYear - 2, this.currentYear - 3];
  }

  setInnerWidth() {
    this.innerWidth = window.innerWidth;
  }

  submit() {
    if (this.form.valid) {
      this.isSubmitted = true;
      
      this.precoTeto = new PrecoTetoMedioFormula(
        this.form.controls['ticket'].value,
        this.form.controls['preco'].value,
        this.form.controls['yield'].value,
        this.form.controls['dividendosAno1'].value,
        this.form.controls['dividendosAno2'].value,
        this.form.controls['dividendosAno3'].value,
      ).calcular();
      console.warn(this.precoTeto)
    }
  }
}
