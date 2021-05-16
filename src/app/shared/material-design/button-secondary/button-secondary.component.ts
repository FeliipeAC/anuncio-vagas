import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss'],
})
export class ButtonSecondaryComponent implements OnInit {
  @Input() text: string = '';

  @Input() icon: string = '';

  @Input() disabled: boolean = false;

  @Input() loading: boolean = false;

  @Output() eventClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  click(): void {
    this.eventClick.emit();
  }
}
