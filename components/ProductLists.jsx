import styles from '../styles/ProductLists.module.css'
import ProductCard from './ProductCard'

const ProductLists = ({ data }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Homemade Cakes</h1>
            <div className={styles.wrapper}>
                {data.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                
            </div>
        </div>
    )
}

export default ProductLists
