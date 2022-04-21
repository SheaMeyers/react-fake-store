import { createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import type { ProductType } from "./types"


const persistConfig = {
    key: 'root',
    storage,
}


export interface ReduxState {
    products: ProductType[]
}

const initialState = {
    products: [],
}

export type ReduxAction =  { type: 'ADD_PRODUCT', payload: ProductType }

export const performerReducer = (
    state: ReduxState = initialState,
    action: ReduxAction
) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }
        default:
            return state
    }
}

const persistedReducer = persistReducer<any, any>(persistConfig, performerReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
