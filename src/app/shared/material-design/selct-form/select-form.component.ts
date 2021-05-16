import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { IdNameModel } from '../../models/id-name-model';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss'],
})
export class SelectFormComponent implements OnInit {
  /**
   * Nome do formControl no formulário
   */
  @Input() controlName!: string;

  @Input() form!: FormGroup;

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

  @Input() list: IdNameModel[] = [];

  @Input() readonly: boolean = false;

  @Input() multiple: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getErro(): string {
    return '';
  }

  getTextTrigger(): string {
    const count = this.form ? this.form.get(this.controlName)!.value.length : 0;
    const txt = count === 1 ? ' selected item' : ' selected items';
    return `${count} ${txt}`;
  }
}