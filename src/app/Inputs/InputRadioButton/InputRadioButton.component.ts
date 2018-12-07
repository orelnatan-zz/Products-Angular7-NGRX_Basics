import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-radiobutton',
  templateUrl: './InputRadioButton.component.html',
  styleUrls: ['./InputRadioButton.component.scss', '../inputs.styles.scss'],
})

export class InputRadioButton {

    @Input() id: string;
    @Input() name: string;
    @Input() value: object;
    @Input() checked: boolean;
    @Input() showTitle: boolean = true;

    @Output() onChange = new EventEmitter();


}
