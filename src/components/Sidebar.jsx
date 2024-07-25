import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <img className={styles.avatar}
                    src="https://github.com/taymersson.png"
                    alt="Foto de Taymersson Araújo"
                />

                <strong>Taymersson Araujo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
            </aside>
    );
}