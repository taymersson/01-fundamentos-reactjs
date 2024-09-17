import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({content, onDeleteCommnet}) {

    const [likeCount, setLikeCount] = useState (0);
    
    function handleDeleteComment() {
        onDeleteCommnet(content);
    }

    function handleLikeComment() {
        setLikeCount ((state) => {
            return state + 1
        });
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/carloshenriquefarias.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos Henrique</strong>
                            <time title="22 de Novembro ás 19:00h" dateTime="2024-03-19 19:00:59">Cerca de 30min atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Gostei <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}