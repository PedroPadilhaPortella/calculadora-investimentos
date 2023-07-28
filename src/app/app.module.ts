import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraJurosCompostosComponent } from './components/pages/calculadora-juros-compostos/calculadora-juros-compostos.component';
import { CalculadoraPrecoTetoMedioComponent } from './components/pages/calculadora-preco-teto-medio/calculadora-preco-teto-medio.component';
import { CalculadoraPrecoTetoProjetivoComponent } from './components/pages/calculadora-preco-teto-projetivo/calculadora-preco-teto-projetivo.component';
import { CalculadoraPrecoTetoComponent } from './components/pages/calculadora-preco-teto/calculadora-preco-teto.component';
import { CalculadoraReservaDeEmergenciaComponent } from './components/pages/calculadora-reserva-de-emergencia/calculadora-reserva-de-emergencia.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CardComponent } from './components/shared/card/card.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FormFieldErrorComponent } from './components/shared/form-field-error/form-field-error.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PageTitleComponent } from './components/shared/page-title/page-title.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalculadoraPrecoTetoComponent,
    PageTitleComponent,
    CalculadoraJurosCompostosComponent,
    FormFieldErrorComponent,
    HomeComponent,
    CalculadoraReservaDeEmergenciaComponent,
    CardComponent,
    CalculadoraPrecoTetoProjetivoComponent,
    CalculadoraPrecoTetoMedioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
