import react from 'react';
import styles from './Title.module.css';

function Title (){
    return (
       <div className={styles.logo}>
            <h1 className={styles.title}>Bienvenido a mi pagina</h1>
       </div>
    );
};

export default Title