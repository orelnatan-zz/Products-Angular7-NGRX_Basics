import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../Models/Product.model';

@Component({
  selector: 'product-item',
  templateUrl: './ProductItem.subComponent.html',
  styleUrls: ['./ProductItem.subComponent.scss'],
})

export class ProductItem {
    @Input() product: Product;
    @Input() selected: number;

    @Output() onClick: EventEmitter<number> = new EventEmitter();
    @Output() onDelete: EventEmitter<number> = new EventEmitter();
    @Output() onEdit: EventEmitter<Product>  = new EventEmitter();
}
