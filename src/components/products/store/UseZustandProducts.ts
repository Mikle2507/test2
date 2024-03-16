import {create} from "zustand";
import {FetchProductListSchema, type ProductPropList} from "../product/model/types" 

type ProductState = {
  products: ProductPropList,
  status: 'pending' | 'success',
  errors: [],
  fetchProduct: () => void
}


export const UseZustandProducts = create<ProductState>((set)=> (
  {
    products: [],
    status: 'pending',
    errors: [],
    fetchProduct: async() => {
        const result = await fetch('https://dummyjson.com/products');
        const json = await result.json();
        const parseData = FetchProductListSchema.parse(json);
        if(parseData) {
          set({products: parseData.products});
          set({status: 'success'});
        }
    }

  }
));