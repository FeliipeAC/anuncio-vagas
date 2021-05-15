import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { KeyNameModel } from '../../models/key-name-model';

@Component({
  selector: 'app-selct-form',
  templateUrl: './selct-form.component.html',
  styleUrls: ['./selct-form.component.scss'],
})
export class SelctFormComponent implements OnInit {
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

  @Input() list: KeyNameModel[] = [];

  @Input() readonly: boolean = false;

  @Input() multiple: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getErro(): string {
    return '';
  }
  isInvalid(): boolean {
    return this.controlName.invalid && this.controlName.touched;
  }
}
