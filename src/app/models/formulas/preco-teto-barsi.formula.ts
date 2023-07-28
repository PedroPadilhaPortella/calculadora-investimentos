import { Formula } from "../../interfaces/formula.interface";

export type PrecoTetoBarsiType = {
  ticket: string;
  divYield: number;
  media: number;
  precoAtual: number;
  precoTeto: number;
  margemSeguranca: number;
}

export class PrecoTetoBarsiFormula implements Formula<PrecoTetoBarsiType> {

  constructor(
    private ticket: string,
    private precoAtual: number,
    private divYield: number,
    private dividendosAno1: number,
    private dividendosAno2: number,
    private dividendosAno3: number,
  ) { }

  calcular() {
    // possibilidade de calcular para 1 ano, 2 anos ou 3 anos.
    const media = (this.dividendosAno1 + this.dividendosAno2 + this.dividendosAno3) / 3;
    const precoTeto = media / (this.divYield / 100);
    const margemSeguranca = ((precoTeto / this.precoAtual) - 1) * 100;

    return {
      ticket: this.ticket,
      divYield: this.divYield,
      media: Number(media.toFixed(2)),
      precoAtual: this.precoAtual,
      precoTeto: Number(precoTeto.toFixed(2)),
      margemSeguranca: Number(margemSeguranca.toFixed(2)),
    }
  }

}