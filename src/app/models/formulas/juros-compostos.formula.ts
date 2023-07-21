import { TipoPeriodo } from "../../enums/TipoPeriodo.enum";
import { TipoTaxaJuros } from "../../enums/TipoTaxaJuros.enum";

/**
 * O cálculo é feito utilizando a fórmula M = C * (1 + r)^n, onde M é o montante final, 
 * C é o capital inicial, r é a taxa de juros por período e n é o número total de períodos
 * de investimento. O método aplica os juros compostos no montante atual antes de realizar
 * os aportes mensais no final de cada mês. Esse processo é repetido para cada período 
 * de investimento, acumulando os rendimentos e os aportes ao longo do tempo.
 */
export class JurosCompostosFormula {

  private _montanteFinal!: number;
  private _valorInvestido!: number;
  private _jurosAcumulados!: number;

  constructor(
    private capitalInitial: number,
    private aporteMensal: number,
    private taxaJuros: number,
    private periodo: number,
    private tipoTaxaJuros: TipoTaxaJuros,
    private tipoPeriodo: TipoPeriodo
  ) {
    this.calcularMontanteComAportes()
  }
  
  getMontanteFinal(): number {
    return this._montanteFinal;
  }

  getValorInvestido(): number {
    return this._valorInvestido;
  }

  getJurosAcumulados(): number {
    return this._jurosAcumulados;
  }

  private calcularMontanteComAportes() {
    console.warn(
      this.capitalInitial,
      this.aporteMensal,
      this.taxaJuros,
      this.periodo,
      this.tipoTaxaJuros,
      this.tipoPeriodo
    );

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

    this._montanteFinal = Math.round(montante);
    this._valorInvestido = Math.round(this.capitalInitial + (this.aporteMensal * totalDePeriodos));
    this._jurosAcumulados = Math.round(this._montanteFinal - this._valorInvestido);
  }
}