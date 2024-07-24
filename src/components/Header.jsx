import styles from './Header.module.css'
console.log(styles);

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo Ignite"/>
            <h1>Taymersson</h1>
        </header>
    );
}