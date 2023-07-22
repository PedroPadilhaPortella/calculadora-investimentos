import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'Calculadoras'
  description = 'Fácil, rápido e direto no navegador. Conheça calculadoras e simuladores grátis para ajudar você a economizar.'

  constructor(
    private router: Router,
  ) { }

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }
}
