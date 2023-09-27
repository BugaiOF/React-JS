import styles from '../components/Post.module.css';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

export function Post(){
    return (
        <article className={styles.post}>
            <header className={styles.headerTop}> 
                <div className={styles.author}>
                    <Avatar hasBorder src="https://github.com/BugaiOF.png" />
                    <div className={styles.authorInfo}>
                        <strong>Gustavo Silveira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='as 3 da manhã de setembro' dateTime='' >Publicado há 1h</time> 
            </header >

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a> {' '}
                    <a href="">#nlw </a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                    placeholder='Deixe um comentario'
                />

                <footer>
                    <button type='submit'> Publicar </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}