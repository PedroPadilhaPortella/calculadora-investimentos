import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraPrecoTetoComponent } from './components/pages/calculadora-preco-teto/calculadora-preco-teto.component';
import { PageRoutes } from './enums/PageRoutes';

const routes: Routes = [
  {
    component: CalculadoraPrecoTetoComponent,
    path: PageRoutes.PRECO_TETO
  },
  {
    path: '',
    redirectTo: PageRoutes.PRECO_TETO,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
