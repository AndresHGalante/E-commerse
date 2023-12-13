import react from 'react';
import styles from './Title.module.css';
import {Link} from 'react-router-dom'

function Title (){
    return (
       <Link to="/" className={styles.logo}>
            <h1>Bienvenido a mi pagina</h1>
       </Link>
    );
};

export default Title