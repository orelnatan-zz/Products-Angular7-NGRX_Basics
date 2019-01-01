import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsActions, ProductsSelectors, SystemActions, SystemSelectors } from '../../Store';
import { AppState } from '../../Store/AppState.model';
import { Product } from '../../Models/Product.model';
import { Status } from '../../Models/Status.model';
import { Loader } from '../../Modals/Loader';
import { Dialog } from '../../Modals/Dialog';
import { Success } from '../../Modals/Success';
import { Router } from '@angular/router';
import { Route } from '../../Models/Route.model';

@Component({
  selector: 'home',
  templateUrl: './Home.page.html',
  styleUrls: ['./Home.page.scss'],
})

export class Home implements OnInit {
  @ViewChild('loaderRef') loaderRef: Loader;
  @ViewChild('dialogRef') dialogRef: Dialog;
  @ViewChild('successRef') successRef: Success;

  products$: Observable<Product[]>;
  isPending$: Observable<boolean>;
  status$: Observable<Status>;
  onRedirect$: Observable<Route>;

  productId: number;

  constructor(private store$: Store<AppState>, 
			  private router: Router){
      this.products$ = this.store$.select(
          ProductsSelectors.getAllProducts
      );

      this.isPending$ = this.store$.select(
          SystemSelectors.getIsPending
      );

      this.status$ = this.store$.select(
          ProductsSelectors.getProductsRequestStatus
	  )
	  
	//   this.onRedirect$ = this.store$.select(
	// 	  SystemSelectors.getOnRedirect
	//   )
  }

  ngOnInit(){
      this.store$.dispatch(
          	new ProductsActions.LoadProducts()
      );

      this.store$.dispatch(
        	new SystemActions.Pending({ isPending: true })
      )

      this.isPending$.subscribe((isPending: boolean) => {
          	isPending ? this.loaderRef.showLoader() : this.loaderRef.hideLoader();
      });

    //   this.onRedirect$.subscribe((route: Route) => {
	// 		this.router.navigate([route.path], {
	// 			queryParams: route.queryParams
	// 		})
	//   });


  }

   removeProduct(productId: number): void {
      this.store$.dispatch(
          new ProductsActions.RemoveProduct({
              productId: productId,
          })
	  )
	  this.successRef.showSuccess();
  }

  addNewProduct(product: Product): void {
	  this.store$.dispatch(
		  new ProductsActions.AddProduct({
			  product: product,
		  })
	  )
  }

  updateProduct(product: Product): void {
	  this.store$.dispatch(
		  new ProductsActions.UpdateProduct({
			  product: product,
		  })
	  )
  }

  navigateToAbout(){
	this.router.navigate(['Home/About'], {
		queryParams: { productId: 4},
	})
  }


  //////////////////////////////////////////////////////////////////////////////////
  generateNewProduct(): void {
      let product: Product = {
        "id": Math.floor(Math.random() * 999) + 100,
        "name": "New product",
        "price": Math.floor(Math.random() * 999) + 100,
        "createdAt": "2015-07-18",
        "image": "https://picsum.photos/200/300/?image=" + Math.floor(Math.random() * 40) + 1,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
      }
      this.addNewProduct(product);
  }

  changeProduct(product: Product): void {
      let currentProduct = { ...product };
      currentProduct.name = 'product changed!',
      currentProduct.image = "https://picsum.photos/200/300/?image=" + Math.floor(Math.random() * 40) + 1;
      currentProduct.price = 1000;

      this.updateProduct(currentProduct);
  }




}

  // this.products$.subscribe((resp) => {console.log(resp)})
  // this.isPending$.subscribe((resp) => {console.log('isPending ', resp)})
  // this.status$.subscribe((resp) => {console.log('status ', resp)})
