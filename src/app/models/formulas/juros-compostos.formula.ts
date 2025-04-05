import { Formula } from "../../interfaces/formula.interface";
import { TipoPeriodo } from "../../enums/TipoPeriodo.enum";
import { TipoTaxaJuros } from "../../enums/TipoTaxaJuros.enum";

export type JurosCompostosType = {
  montanteFinal: number;
  valorInvestido: number;
  jurosAcumulados: number;
  tabelaDados: JurosCompostosTabelaType[]
}

export type JurosCompostosTabelaType = {
  montanteTotal: number;
  rendimentoTotal: number;
  investimentoTotal: number;
}

export class JurosCompostosFormula implements Formula<JurosCompostosType> {

  constructor(
    private capitalInitial: number,
    private aporteMensal: number,
    private taxaJuros: number,
    private periodo: number,
    private tipoTaxaJuros: TipoTaxaJuros,
    private tipoPeriodo: TipoPeriodo
  ) { }

  calcular(): JurosCompostosType {
    // Verifica se o período está em anos ou meses e ajusta a taxa de juros para a base correta
    const taxaDeJurosPeriodo = (this.tipoTaxaJuros === TipoTaxaJuros.ANUAL)
      ? this.taxaJuros / (12 * 100)
      : this.taxaJuros / 100;

    // Converte os periodos de anos para meses
    const totalDePeriodos = (this.tipoPeriodo === TipoPeriodo.ANOS)
      ? this.periodo * 12
      : this.periodo;

    // Inicializa o montanteTotal e o investimentoTotal com o valor inicial investido
    let montanteTotal = this.capitalInitial;

    let investimentoTotal = this.capitalInitial;

    let data: JurosCompostosTabelaType[] = [];

    // Calcula o montante final com aportes mensais e juros compostos
    for (let i = 0; i < totalDePeriodos; i++) {
      // Gerencia a progressão dos periodos (seja em meses ou anos)
      const periodo = i + 1;

      // Calcula os juros compostos no montante atual
      montanteTotal *= 1 + taxaDeJurosPeriodo;

      // Aportes realizados no final de cada mês (após os juros compostos)
      montanteTotal += this.aporteMensal;
      investimentoTotal += this.aporteMensal;

      // Calcula o rendimento total até o periodo
      const rendimentoTotal = montanteTotal - this.aporteMensal * periodo - this.capitalInitial;

      data.push({
        montanteTotal,
        rendimentoTotal,
        investimentoTotal,
      });
    }

    const montanteFinal = Math.round(montanteTotal);
    const valorInvestido = Math.round(this.capitalInitial + (this.aporteMensal * totalDePeriodos));
    const jurosAcumulados = Math.round(montanteFinal - valorInvestido);

    const tabelaDados = this.tipoPeriodo === TipoPeriodo.MESES
      ? data
      : data.filter((_, i) => (i + 1) % 12 === 0);

    return {
      montanteFinal,
      valorInvestido,
      jurosAcumulados,
      tabelaDados,
    }
  }
}