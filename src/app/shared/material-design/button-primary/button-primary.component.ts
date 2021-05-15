import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
})
export class ButtonPrimaryComponent implements OnInit {
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
