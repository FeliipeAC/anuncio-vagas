import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ErrorsFormsService } from '../../services/errors-forms.service';

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

  constructor(private errorsForms: ErrorsFormsService) {}

  ngOnInit() {}

  isInvalid(): boolean {
    return (
      this.form.get(this.controlName)!.invalid &&
      this.form.get(this.controlName)!.touched
    );
  }

  getError(): string {
    return this.errorsForms.getError(
      this.form.get(this.controlName) as FormControl
    );
  }
}
