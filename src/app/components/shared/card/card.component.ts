import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input('card-image') cardImage!: string
  @Input('card-title') cardTitle!: string
  @Input('url') url!: string
  @Input('disabled') disabled?: boolean

  constructor(private router: Router) { }

  navigate() {
    !this.disabled && this.router.navigateByUrl(this.url);
  }
}
