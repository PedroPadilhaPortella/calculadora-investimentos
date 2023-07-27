import { Formula } from "../../interfaces/formula.interface";
import { TipoPeriodo } from "../../enums/TipoPeriodo.enum";
import { TipoTaxaJuros } from "../../enums/TipoTaxaJuros.enum";

export type JurosCompostosType = {
  montanteFinal: number;
  valorInvestido: number;
  jurosAcumulados: number;
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

    // Inicializa o montante com o valor inicial
    let montante = this.capitalInitial;

    // Calcula o montante final com aportes mensais e juros compostos
    for (let i = 0; i < totalDePeriodos; i++) {
      // Calcula os juros compostos no montante atual
      montante *= 1 + taxaDeJurosPeriodo;
      // Aportes realizados no final de cada mês (após os juros compostos)
      montante += this.aporteMensal;
    }

    const montanteFinal = Math.round(montante);
    const valorInvestido = Math.round(this.capitalInitial + (this.aporteMensal * totalDePeriodos));
    const jurosAcumulados = Math.round(montanteFinal - valorInvestido);

    return {
      montanteFinal,
      valorInvestido,
      jurosAcumulados,
    }
  }
}