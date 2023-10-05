import { format, formatDistanceToNow } from 'date-fns';

import styles from '../components/Post.module.css';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export function Post({author , publishedAt, content}){
    const [comments, setComments] = useState([
        1,
        2,
    ]);


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })
    
    const pubblishedRelativeToNow = formatDistanceToNow (publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(){
        event.preventDefault();

        setComments([...comments, comments.length + 1]);
    }

    return (
        <article className={styles.post}>
            <header className={styles.headerTop}> 
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >
                    {pubblishedRelativeToNow}
                </time> 
            </header >

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    }else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                    placeholder='Deixe um comentario'
                />

                <footer>
                    <button type='submit'> Publicar </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment/>
                })}
            </div>
        </article>
    )
}