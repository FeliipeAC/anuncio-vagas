import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea-form',
  templateUrl: './textarea-form.component.html',
  styleUrls: ['./textarea-form.component.scss'],
})
export class TextareaFormComponent implements OnInit {
  /**
   * Nome do formControl no formulário
   */
  @Input() controlName!: string;

  @Input() form!: FormGroup;

  /**
   * Label referente ao campo
   */
  @Input() label!: string;

  /**
   * Texto de placeholder do input
   */
  @Input() placeholder!: string;

  /**
   * Informação sobre o campo exibido abaixo do input
   */
  @Input() info!: string;

  @Input() type!: string;

  @Input() readonly!: boolean;

  @Input() rows!: number;

  constructor() {}

  ngOnInit() {}
}
