import { Actions, ActionTypes } from './Actions';
import { Product } from '../../Models/Product.model';
import { ProductsState } from './ProductsState.model';

const initialState: ProductsState = {
    products: [],
    isPending: false,
    status: {
        isAjaxFailed: false,
        notification: null
    },
}

export function ProductsReducer(state = initialState, action: Actions): ProductsState {
    switch(action.type) {
        case ActionTypes.LOAD_PRODUCTS: {
            return {
                ... state,
                isPending: true,
                status: {
                    isAjaxFailed: false,
                    notification: 'Request sent...'
                },
            }
        };
        case ActionTypes.PRODUCTS_LOAD_SUCCESS: {
            return {
                products: action.payload.products,
                isPending: false,
                status: {
                    isAjaxFailed: false,
                    notification: action.payload.successAlert
                },
            }
        };
        case ActionTypes.PRODUCTS_LOAD_FAILED: {
            return {
                products: [],
                isPending: false,
                status: {
                    isAjaxFailed: true,
                    notification: action.payload.errorAlert,
                },
            }
        };
        case ActionTypes.REMOVE_PRODUCT: {
            const deleteIndex: number = state.products.findIndex((product: Product) => product.id == action.payload.productId);
            state.products.splice(deleteIndex, 1);

            return {
                ... state,
            }
        };
        case ActionTypes.ADD_PRODUCT: {
            state.products.unshift(action.payload.product);

            return {
                ... state,
            }
		};
		case ActionTypes.UPDATE_PRODUCT: {
			const currentProduct: Product = state.products.find((product: Product) => product.id == action.payload.product.id);
			
			Object.keys(currentProduct).forEach((key) => {
				currentProduct[key] = action.payload.product[key];
			});

			return {
                ... state,
            }
		}

        default: {
            return state;
        };
    }
}

