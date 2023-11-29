import React from 'react';
import styles from './NavBar.module.css';
import Buttons from '../Buttons/Buttons.jsx';
import Title from '../Title/Title.jsx';

function NavBar() {
  return (
    <header className={styles.Header}>
      <div>
        < Title />
      </div>
      <div>
        < Buttons />
      </div>
    </header>
  );
}

export default NavBar;