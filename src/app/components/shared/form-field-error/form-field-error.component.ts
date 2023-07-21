import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss']
})
export class FormFieldErrorComponent implements OnInit {

  @Input('form-control') formControl!: any;
  @Input('field-name') fieldName!: string;

  constructor() { }

  ngOnInit() {
  }

  public get errorMessage(): string | null {
    if (this.hasAnyError()) {
      return this.getErrorMessage();
    } else {
      return null
    }
  }

  private hasAnyError() {
    return this.formControl?.invalid && this.formControl?.touched;
  }

  private getErrorMessage() {
    if (this.formControl?.errors?.['required']) {
      return `Campo ${this.fieldName} Obrigatório`;

    } else if (this.formControl?.errors?.['minlength']) {
      const requiredLength = this.formControl?.errors?.['minlength'].requiredLength
      return `Campo ${this.fieldName} ter no mínimo ${requiredLength} caracteres`;

    } else if (this.formControl?.errors?.['maxlength']) {
      const requiredLength = this.formControl?.errors?.['maxlength'].requiredLength
      return `Campo ${this.fieldName} ter no máximo ${requiredLength} caracteres`;

    } else if (this.formControl?.errors?.['email']) {
      return `Formato de Email Inválido`;
    }
    return null;
  }
}