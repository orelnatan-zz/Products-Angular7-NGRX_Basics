import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Product } from '../../Models/Product.model';
import { AppState } from '../../Models/AppState.model';
import * as productsSelector from '../../Store/Selectors/Products.selector';

@Component({
  selector: 'home',
  templateUrl: './Home.page.html',
  styleUrls: ['./Home.page.scss'],
})

export class Home implements OnInit {

  products$: Observable<Product[]>;
  productsList: Array<Product>;

  constructor(private store: Store<AppState>){
    this.products$ = this.store.select(productsSelector.getProducts);
  }


  ngOnInit() {

    this.products$.subscribe((result: Array<Product>) => {
      this.productsList = result;
    })

    console.log(this.productsList);
  }

}

