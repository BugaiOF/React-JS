import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './Global.css';

import styles from './App.module.css';

const posts = [
    {
      id= 1,
      author {
        avatarUrl = 'http://github.com/bugaiOF.png',
        role = 'Web Developer',
        name = 'Gustavo Silveira',
      },
      content:
        '',
      }
    
];


export function App() {
  return (
   <div>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar/>
        <main>        
          
            <Post 
              author = "Gustavo Silveira" 
              content = "lLorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nihil nam hic repellendus, earum facilis omnis corrupti, iusto voluptas praesentium saepe temporibus totam a voluptatum ratione quam similique enim aliquid?"
            />

            <Post
              author = "Kayque roger"
              content = "Lorem ipsum, dolor sit amet consectetur"
            />
        </main>
     
    </div>
   </div>
  )
}


