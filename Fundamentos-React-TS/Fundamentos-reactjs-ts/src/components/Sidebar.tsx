import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1575889449637-02336c8d3652?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxmb3JtdWxhJTIwb25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/BugaiOF.png"/>

                <strong>Gustavo Silveira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#" >
                <PencilLine size={20}/>
                Editar perfil
                </a>
            </footer>
        </aside>
    )
}