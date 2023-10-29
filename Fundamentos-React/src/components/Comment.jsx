import styles from './Comment.module.css';
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar';


export function Comment ({content}){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/BugaiOF.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Silveira</strong>
                            <time title='as 3 da manhã de setembro' dateTime='' >Cerca de 1h atrás</time> 
                        </div>
                        <button title='Deletar Comentário'>
                        <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}