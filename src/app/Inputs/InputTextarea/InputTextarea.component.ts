import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-textarea',
  templateUrl: './InputTextarea.component.html',
  styleUrls: [ './InputTextarea.component.scss', '../inputs.styles.scss'],
})

export class InputTextarea {
    @Input() title: string;
    @Input() validation: string;
    @Input() placeholder: string;
    @Input() value: string;
    @Input() rows: number;
    @Input() cols: number;
    @Input() submitted: boolean;
    @Input() invalid: boolean;

    @Output() onChange: EventEmitter<any> = new EventEmitter();

}


// v