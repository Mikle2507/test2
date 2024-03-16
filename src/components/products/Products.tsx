import { useEffect } from 'react';
import { UseZustandProducts } from './store/UseZustandProducts';
import Product from './product/Product';
import styles from './styles.module.css';
import Loader from '../loader/Loader';

const Products = () => {
  const products = UseZustandProducts(state=>state.products);
  const status = UseZustandProducts(state=>state.status);
  const fetchPrroducts = UseZustandProducts(state=>state.fetchProduct);

  useEffect(()=>{
    fetchPrroducts();
  },[fetchPrroducts]);


  switch(status) {

    case "pending":
      return <Loader/>;
      
    case "success":
      return (
        <div className={styles.list}>

          {products.map(item=><Product key={item.id} item={item}/>)}

        </div>
      )
  }

};

export default Products;