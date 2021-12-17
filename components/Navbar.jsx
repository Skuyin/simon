import styles from "../styles/Navbar.module.css";
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.container} >
            <Link href="/" passHref>
                <div className={styles.logo}>
                    <h1>Simon</h1>
                    <p>PATISSIER & CHOCOLATIER</p>
                </div>
            </Link>
            
        </div>
    )
}

export default Navbar
