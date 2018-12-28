import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../Store/AppState.model';
import { ProductsActions, ProductsSelectors } from '../../Store';
import { Product } from '../../Models/Product.model';
import { Status } from '../../Models/Status.model';

  
@Component({
  selector: 'home',
  templateUrl: './Home.page.html',
  styleUrls: ['./Home.page.scss'],
})

export class Home implements OnInit {
  products$: Observable<Product[]>;
  isPending$: Observable<boolean>;
  status$: Observable<Status>;

  constructor(private store$: Store<AppState>){
      this.products$ = this.store$.select(
        ProductsSelectors.getAllProducts
      );

      this.isPending$ = this.store$.select(
          ProductsSelectors.getProductIsPending
      );

      this.status$ = this.store$.select(
          ProductsSelectors.getProductsRequestStatus
      )

      this.products$.subscribe((resp) => {console.log(resp)})
      this.isPending$.subscribe((resp) => {console.log('isPending ', resp)})
      this.status$.subscribe((resp) => {console.log('status ', resp)})

      this.store$.dispatch(
        new ProductsActions.LoadProducts()
      );

     
  }

  ngOnInit(){
    
  }


  refresh(){
    this.store$.dispatch(
      new ProductsActions.LoadProducts()
    );
  }












  ////////////////////////////////////////////////
//   changeProduct(product: Product): void {
//       let currentProduct = { ...product };
//       currentProduct.name = 'product changed!',
//       currentProduct.image = "https://picsum.photos/200/300/?image=" + Math.floor(Math.random() * 40) + 1;
//       currentProduct.price = 1000;

//       this.updateProduct(currentProduct);
//   }

//   generateProduct(): void {
//       let product: Product = {
//         "id": Math.floor(Math.random() * 999) + 100,
//         "name": "New product",
//         "price": Math.floor(Math.random() * 999) + 100,
//         "createdAt": "2015-07-18",
//         "image": "https://picsum.photos/200/300/?image=" + Math.floor(Math.random() * 40) + 1,
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
//       }

//       this.addProduct(product);
//   }


}

