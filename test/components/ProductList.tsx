import Product, { IProduct } from "./Product"
import styles from '../styles/Home.module.scss'

interface IProductListProps {
  products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className={styles.product_list}>
      {props.products?.map((product, index) => <Product product={product} key={index}/>)}
    </div>
  )
}

export default ProductList
