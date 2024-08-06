import styles from './Avatar.module.css'

export function Avatar(propos) {
    return (
        <img className={styles.avatar} src={propos.src} />
    );
}