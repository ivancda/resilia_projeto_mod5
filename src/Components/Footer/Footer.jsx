import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
     <p>
        Resilia - todos os direitos reservados
     </p>
     <div className={styles.creditos}>
              <h2>Desenvolvido por:</h2>
              <ul>
                <li><a href='https://github.com/AlexPNO'>Alexandre</a></li>
                <li><a href='https://github.com/ivancda'>Ivan</a></li>
                <li><a href='https://github.com/patandrade09'>Patrícia</a></li>
                <li><a href='https://github.com/Pedro-jds'>Pedro Jr.</a></li>
              </ul>
    </div>
    </footer>
  );
}

export default Footer;
