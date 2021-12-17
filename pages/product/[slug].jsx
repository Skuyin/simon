import React, { useState } from 'react';
import data from '../../utils/data';
import styles from '../../styles/ProductDetails.module.css';
import Image from 'next/image';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Link from 'next/link'


export default function ProductDetails({product}) {
    const [ order, setOrder ] = useState(false)


    if(!product) {
        <div>Product not found</div>
    }

    return (
        <>
        <Navbar />
        <div className={styles.container}>
            <Link href="/" passHref><h4 style={{cursor: 'pointer'}}>Back to Home</h4></Link>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={product.image} alt="" width="500px" height="500px"/>
                </div>
                    
                </div>
                <div className={styles.right}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <button className={styles.btn} onClick={() => setOrder(!order)}>{order ? "Close Order" : "Order"}</button>
                </div>
            </div>
            {order && 
                <div className={styles.orderContainer}>
                    <h1>Payment</h1>
                    <h4>currently we using manual payment for confirm your pls contact admin below</h4>
                    <h4>Your Order: {product.name}</h4>
                    <h4>Price: {product.price}</h4>
                    <h5>*Prices not include shipping costs more info contact whatsup or instagram </h5>
                    <label>
                        <tr>
                            <td className={styles.labelList}>Admin:</td>
                            <td className={styles.labelList}>Luqman</td>
                        </tr>
                        <tr>
                            <td className={styles.labelList}>Whatsup:</td>
                            <td className={styles.labelList}><Link href="https://web.whatsapp.com/">+34 35 3243</Link></td>
                        </tr>
                        <tr>
                            <td className={styles.labelList}>Instagram:</td>
                            <td className={styles.labelList}><Link href="https://www.instagram.com/">Simoncakes</Link></td>
                        </tr>
                    </label>
                </div>
            }
        </div>
        <Footer />
        </>
    )
}

export const getStaticPaths = async () => {
    const products = data.products;
    const paths = products.map((item) => {
        return {
            params: { slug: item.slug }
        }
    });
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (ctx) =>  {
    const slug = ctx.params.slug
    const product = data.products.filter((item) => item.slug === slug)[0];
    return {
        props: {
            product
        }
    }
}

