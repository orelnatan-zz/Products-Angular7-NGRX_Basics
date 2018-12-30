import { ProductsState } from './Products/ProductsState.model';
import { SystemState } from './System/SystemState.model';

export interface AppState {
  products: ProductsState,
  system: SystemState,
}
