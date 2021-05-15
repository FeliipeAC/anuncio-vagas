import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  /**
   * Nome do formControl no formulário
   */
  @Input() controlName: FormControl = new FormControl();

  /**
   * Label referente ao campo
   */
  @Input() label: string = '';

  /**
   * Texto de placeholder do input
   */
  @Input() placeholder: string = '';

  /**
   * Informação sobre o campo exibido abaixo do input
   */
  @Input() info: string = '';

  /**
   * Texto de erro na validação do campo
   */
  @Input() erro: string = '';

  @Input() type: string = '';

  @Input() readonly: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  isInvalid(): boolean {
    return this.controlName.invalid && this.controlName.touched;
  }

  getErro(): string {
    return '';
  }
}
