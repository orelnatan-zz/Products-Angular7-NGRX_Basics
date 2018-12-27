import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Product } from '../../Models/Product.model';
import { AppState } from '../../Models/AppState.model';
import * as productsSelector from '../../Store/Selectors/Products.selector';
import * as productsActions from '../../Store/Actions/Products.action';

@Component({
  selector: 'home',
  templateUrl: './Home.page.html',
  styleUrls: ['./Home.page.scss'],
})

export class Home {
  productsList: Array<Product>;

  constructor(private store: Store<AppState>){
      this.store.select(productsSelector.getProducts).subscribe((products: Array<Product>) => {
          this.productsList = products;
      });
  }

  // Ngrx Actions //
  removeProduct(id: number): void {
      this.store.dispatch(new productsActions.RemoveProduct(id));
  }

  addProduct(product: Product): void {
      this.store.dispatch(new productsActions.AddProduct(product));
  }

  updateProduct(updates: Product): void {
      this.store.dispatch(new productsActions.UpdateProduct(updates));
  }
















  ////////////////////////////////////////////////
  changeProduct(product: Product): void {
      let currentProduct = { ...product };
      currentProduct.name = 'product changed!',
      currentProduct.image = "https://picsum.photos/200/300/?image=" + Math.floor(Math.random() * 40) + 1;
      currentProduct.price = 1000;

      this.updateProduct(currentProduct);
  }

  generateProduct(): void {
      let product: Product = {
        "id": Math.floor(Math.random() * 999) + 100,
        "name": "New product",
        "price": Math.floor(Math.random() * 999) + 100,
        "createdAt": "2015-07-18",
        "image": "https://picsum.photos/200/300/?image=" + Math.floor(Math.random() * 40) + 1,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
      }

      this.addProduct(product);
  }


}

