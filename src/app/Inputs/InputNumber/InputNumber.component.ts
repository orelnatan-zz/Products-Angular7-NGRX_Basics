import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-number',
  templateUrl: './InputNumber.component.html',
  styleUrls: [ './InputNumber.component.scss', '../inputs.styles.scss'],
})

export class InputNumber {
    @Input() title: string;
    @Input() validation: string;
    @Input() placeholder: string;
    @Input() value: string;
    @Input() max: number;
    @Input() min: number;
    @Input() submitted: boolean;
    @Input() invalid: boolean;

    @Output() onChange: EventEmitter<any> = new EventEmitter();

}
