import styles from './Buttons.module.css'

function Buttons() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                <li><a href="/" className={styles.navLink}>Inicio</a></li>
                <li><a href="/products" className={styles.navLink}>Productos</a></li>
                <li><a href="/cart" className={styles.navLink}>Carrito</a></li>
            </ul>
        </nav>
    )
}

export default Buttons