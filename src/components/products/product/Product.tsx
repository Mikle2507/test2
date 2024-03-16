import type{ ProductProp } from "./model/types";
import styles from './styles.module.css';

interface Props extends JSX.IntrinsicAttributes {
  item: ProductProp
}


const Product = ({item}:Props) => {

  return (
    <article className={styles.item}>
      <img className={styles.img} src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div>
        Цена ${item.price}
      </div>
      <div>В наличии: {item.stock}шт</div>
      <div>Бренд: {item.brand}</div>
    </article>
  );
};

export default Product;