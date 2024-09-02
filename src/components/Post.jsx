import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/taymersson.png" />
                    <div className={styles.authorInfo}>
                        <strong>Taymersson</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time
                    title="22 de Novembro ás 19:00h"
                    dateTime="2024-03-19 19:00:59">Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='Submit'>Publicar</button>
                </footer>
            </form>
            
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}