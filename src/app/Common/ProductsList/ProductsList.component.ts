import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../Models/Product.model';

@Component({
  selector: 'products-list',
  templateUrl: './ProductsList.component.html',
  styleUrls: ['./ProductsList.component.scss'],
})

export class ProductsList {
    @Input() products: Array<Product>;
    @Output() onSelect: EventEmitter<number> = new EventEmitter();
    @Output() onDelete: EventEmitter<number> = new EventEmitter();
    @Output() onEdit: EventEmitter<number> = new EventEmitter();

    selected: number;
}
