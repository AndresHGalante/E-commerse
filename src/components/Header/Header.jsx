import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.title}>Bienvenido a mi pagina</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><a href="/" className={styles.navLink}>Inicio</a></li>
          <li><a href="/products" className={styles.navLink}>Productos</a></li>
          <li><a href="/cart" className={styles.navLink}>Carrito</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;