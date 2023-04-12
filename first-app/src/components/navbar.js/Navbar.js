import { useProduct } from '../ProductProviders/ProductProvider';
import styles from './navbar.module.css'
const Navbar = () => {
    const products = useProduct()
    const value = products.length
    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>Sepi's shoe locker</h1>
            <span className={styles.cartlength}>{value}</span>
        </div>
     );
}
 
export default Navbar;