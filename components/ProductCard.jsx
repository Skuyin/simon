import Image from "next/image"
import styles from '../styles/ProductCard.module.css'
import Link from "next/link"

const ProductCard = ({ product }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image  src={product.image} alt="" width="500" height="500" />
            </div>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.desc}>
                {product. description}
            </p>
            <span className={styles.price} >Price: {product.price}</span>
            <Link href={`/product/${product.slug}`} passHref>
                <button className={styles.button}>Details</button>
            </Link>
            
        </div>
    )
}

export default ProductCard
