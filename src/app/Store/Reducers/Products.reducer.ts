import { Action } from '@ngrx/store'
import { Product } from '../../Models/Product.model';
import * as ProductsActions from '../Actions/Products.action';

const initialState: Array<Product> = [
  {
    "id": 223,
    "name": "Stewart",
    "price": 732,
    "createdAt": "2015-07-18",
    "image": "https://picsum.photos/200/300/?image=05",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
  },
  {
    "id": 346,
    "name": "Lee",
    "price": 222,
    "createdAt": "2014-02-18",
    "image": "https://picsum.photos/200/300/?image=15",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
  },
  {
    "id": 838,
    "name": "Swanson",
    "price": 470,
    "createdAt": "2018-10-09",
    "image": "https://picsum.photos/200/300/?image=25",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
  },
  {
    "id": 189,
    "name": "Harvey",
    "price": 470,
    "createdAt": "2014-01-08",
    "image": "https://picsum.photos/200/300/?image=35",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
  },
  {
    "id": 581,
    "name": "Conner",
    "price": 558,
    "createdAt": "2015-05-19",
    "image": "https://picsum.photos/200/300/?image=45",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
  },
  {
    "id": 353,
    "name": "Ball",
    "price": 148,
    "createdAt": "2015-05-20",
    "image": "https://picsum.photos/200/300/?image=55",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
  },
  {
    "id": 111,
    "name": "Fleming",
    "price": 777,
    "createdAt": "2017-10-29",
    "image": "https://picsum.photos/200/300/?image=65",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
  },
  {
    "id": 183,
    "name": "Calderon",
    "price": 776,
    "createdAt": "2014-03-26",
    "image": "https://picsum.photos/200/300/?image=75",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
  },
  {
    "id": 656,
    "name": "Munoz",
    "price": 783,
    "createdAt": "2018-11-21",
    "image": "https://picsum.photos/200/300/?image=85",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
  },
  {
    "id": 714,
    "name": "Flowers",
    "price": 158,
    "createdAt": "2018-06-30",
    "image": "https://picsum.photos/200/300/?image=95",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...."
  }
]

export function productReducer(state = initialState, action: ProductsActions.Actions): Array<Product>{
  let newState = state;

  switch(action.type) {
    case ProductsActions.ADD_PRODUCT:
      newState.unshift(action.payload);

      return newState;

    case ProductsActions.REMOVE_PRODUCT:
      let deletedProductIndex = newState.findIndex((product: Product) => product.id == action.payload);
      newState.splice(deletedProductIndex, 1);

      return newState;

    case ProductsActions.UPDATE_PRODUCT:
      let currentProduct = newState.find((product: Product) => product.id == action.payload.id);

      Object.keys(currentProduct).forEach((key) => {
          currentProduct[key] = action.payload[key];
      });
      return newState;

    default:
      return newState;
  }

}

export const getProducts = (state: Array<Product>) => state;
