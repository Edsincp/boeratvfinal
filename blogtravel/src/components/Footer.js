import React from "react";
import styles from './Footer.module.css';

const Footer = () => { 

    return ( 
        <footer className={styles.Footer}>
            <h6>Desenvolvido por: Edson Pereira de Carvalho</h6>
            <h6>Blog do HORSEBM &copy; 2024</h6>
        </footer>       
    );
}; 
export default Footer;