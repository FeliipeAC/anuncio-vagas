import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss'],
})
export class ButtonSecondaryComponent implements OnInit {
  @Input() texto: string = '';

  @Input() icone: string = '';

  @Input() disabled: boolean = false;

  @Input() loading: boolean = false;

  @Output() eventClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  click(): void {
    this.eventClick.emit();
  }
}
