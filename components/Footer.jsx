import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.container}>
                <div className={styles.item}>
                        <li className={styles.list}><Image src="/img/simon.png" alt="" width="200px" height="100px" /></li>
                        <li className={styles.list}>Simon provide homemade cakes with <br /> luxurious taste and and special</li>
                </div>
                <div className={styles.item}>
                        <h2 className={styles.title}>Contact Info</h2>
                        <li className={styles.list}>+34 43 54 34</li>
                        <li className={styles.list}>France</li>

                </div>
                <div className={styles.item}>
                        <h2 className={styles.title}>Social Links</h2>
                        <li className={styles.list}>Facebook</li>
                        <li className={styles.list}>Instagram</li>
                        <li className={styles.list}>Twitter</li>
                        <li className={styles.list}>Linked In</li>
                </div>
            </div>
            <div className={styles.copyRight}>
                © 2022 - Simon | Simon
            </div>
        </div>
    )
}

export default Footer