import {withRouter, Router} from 'next/router'
import styles from '../styles/Home.module.scss'
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Script from 'next/script'

export interface IProduct {
  id: string
  name: string
  price: number
  url: string
  description: string
  image: string
}

interface IProductProps {
  product: IProduct
  router: Router
}

// <h2 className={styles.product__title}>{props.product.name}</h2>
// <p className={styles.product__description}>{props.product.description}</p>
// <img src={props.product.image} alt="" className={styles.product__image}/>
// <div className={styles.product__price_button_container}>
//   <div className={styles.product__price}>${props.product.price.toFixed(2)}</div>
//   <button
//     className="snipcart-add-item product__button"
//     data-item-id={props.product.id}
//     data-item-name={props.product.name}
//     data-item-price={props.product.price}
//     data-item-url={props.router.pathname}
//     data-item-image={props.product.image}>
//     Add to cart
//   </button>
// </div>

const Product = (props: IProductProps) => {
  return (
    <div className={styles.productArea} >
        <Card style={{ display: 'flex', flexDirection: 'row',width: '100%', marginBottom: '5%', marginTop: '5%' }} >
          <Card.Img style={{ width: '20%' }} src={props.product.image} fluid="true" />
          <Card.Body >
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>
              {props.product.description}
            </Card.Text>
            <button
              className="snipcart-add-item product__button"
              data-item-id={props.product.id}
              data-item-name={props.product.name}
              data-item-price={props.product.price}
              data-item-url={props.router.pathname}
              data-item-image={props.product.image}
            >Add to cart</button> {' '}
            <button className={styles.button} ><Link href="/productDetails"><a className={styles.Link}>Details</a></Link></button> {' '}
            <button href="#" className={styles.button} >Suggest</button>
            <div className={styles.product__price}>${props.product.price.toFixed(2)}</div>
          </Card.Body>
        </Card>
    </div>
  )
}

export default withRouter(Product)
