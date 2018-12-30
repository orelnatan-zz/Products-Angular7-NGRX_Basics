import { Product } from '../../Models/Product.model';
import { Status } from '../../Models/Status.model';

export interface ProductsState {
  products: Array<Product>;
 // isPending: boolean;
  status: Status;
}
