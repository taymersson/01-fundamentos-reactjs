import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/carloshenriquefarias.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos Henrique</strong>
                            <time title="22 de Novembro ás 19:00h" dateTime="2024-03-19 19:00:59">Cerca de 30min atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom! Parabens</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Gostei <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}