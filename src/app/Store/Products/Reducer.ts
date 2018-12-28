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
            console.log('LOAD_PRODUCTS')
            return {
                ... state,
                isPending: true,
                status: {
                    isAjaxFailed: false,
                    notification: 'Request sent...'
                },
            }
        }
        case ActionTypes.PRODUCTS_LOAD_SUCCESS: {
            console.log('PRODUCTS_LOAD_SUCCESS')
            return {
                products: action.payload.products,
                isPending: false,
                status: {
                    isAjaxFailed: false,
                    notification: action.payload.successAlert
                },
            }
        }
        case ActionTypes.PRODUCTS_LOAD_FAILED: {
            console.log('PRODUCTS_LOAD_FAILED')
            return {
                products: [],
                isPending: false,
                status: {
                    isAjaxFailed: true,
                    notification: action.payload.errorAlert,
                },
            }
        }
        default: {
            return state;
        }
    }
}

