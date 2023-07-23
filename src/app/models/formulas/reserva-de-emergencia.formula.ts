import { Profissoes } from "src/app/enums/Profissoes.enum";

export type ReservaType = {
  profissao: string,
  reservaMeses: number,
  reservaDeEmergencia: number,
  valorGuardado: number,
  tempoReservaEmergencia: number,
}

export class ReservaDeEmergenciaFormula {

  constructor(
    private profissao: Profissoes,
    private custoFixo: number,
    private salario: number,
    private economiaMensal: number,
  ) {}

  calcular(): ReservaType {
    let reservaMeses = 0
    let reservaDeEmergencia = 0
    let profissao = '';

    if(this.profissao === Profissoes.FUNCIONARIO_PUBLICO) {
      reservaMeses = 3;
      reservaDeEmergencia = this.custoFixo * reservaMeses;
    } else if(this.profissao === Profissoes.CLT) {
      reservaMeses = 6;
      reservaDeEmergencia = this.custoFixo * reservaMeses;
    } else {
      reservaMeses = 12;
      reservaDeEmergencia = this.custoFixo * reservaMeses;
    }

    const tempoReservaEmergencia = reservaDeEmergencia / (this.salario * (this.economiaMensal / 100));

    return {
      profissao: this.profissao,
      reservaMeses,
      reservaDeEmergencia,
      valorGuardado: this.economiaMensal,
      tempoReservaEmergencia,
    }
  }
}