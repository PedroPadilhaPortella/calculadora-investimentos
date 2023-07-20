import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraPrecoTetoComponent } from './components/pages/calculadora-preco-teto/calculadora-preco-teto.component';
import { CalculadoraJurosCompostosComponent } from './components/pages/calculadora-juros-compostos/calculadora-juros-compostos.component';
import { PageRoutes } from './enums/PageRoutes';

const routes: Routes = [
  {
    component: CalculadoraPrecoTetoComponent,
    path: PageRoutes.PRECO_TETO
  },
  {
    component: CalculadoraJurosCompostosComponent,
    path: PageRoutes.JUROS_COMPOSTOS
  },
  {
    path: '',
    redirectTo: PageRoutes.JUROS_COMPOSTOS,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
