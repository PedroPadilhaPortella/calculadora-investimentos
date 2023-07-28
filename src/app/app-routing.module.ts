import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraJurosCompostosComponent } from './components/pages/calculadora-juros-compostos/calculadora-juros-compostos.component';
import { CalculadoraPrecoTetoMedioComponent } from './components/pages/calculadora-preco-teto-medio/calculadora-preco-teto-medio.component';
import { CalculadoraPrecoTetoProjetivoComponent } from './components/pages/calculadora-preco-teto-projetivo/calculadora-preco-teto-projetivo.component';
import { CalculadoraPrecoTetoComponent } from './components/pages/calculadora-preco-teto/calculadora-preco-teto.component';
import { CalculadoraReservaDeEmergenciaComponent } from './components/pages/calculadora-reserva-de-emergencia/calculadora-reserva-de-emergencia.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PageRoutes } from './enums/PageRoutes';

const routes: Routes = [
  {
    component: HomeComponent,
    path: PageRoutes.HOME
  },
  {
    component: CalculadoraJurosCompostosComponent,
    path: PageRoutes.JUROS_COMPOSTOS
  },
  {
    component: CalculadoraReservaDeEmergenciaComponent,
    path: PageRoutes.RESERVA_DE_EMERGENCIA
  },
  {
    component: CalculadoraPrecoTetoMedioComponent,
    path: PageRoutes.PRECO_TETO_MEDIO
  },
  {
    component: CalculadoraPrecoTetoComponent,
    path: PageRoutes.PRECO_TETO
  },
  {
    component: CalculadoraPrecoTetoProjetivoComponent,
    path: PageRoutes.PRECO_TETO_PROJETIVO
  },
  {
    path: '',
    redirectTo: PageRoutes.HOME,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
