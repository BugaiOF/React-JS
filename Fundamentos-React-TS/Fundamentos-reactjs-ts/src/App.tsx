import { Post , PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './Global.css';

import styles from './App.module.css';

const post:PostType [] = [
    {
      id: 1,
      author: {
        avatarUrl: 'http://github.com/bugaiOF.png',
        role: 'Web Developer',
        name: 'Gustavo Silveira',
      },
      content: [
        {type:'paragraph', content: 'Fala galeraa 👋'},

        {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        
        { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-09-28 04:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'http://github.com/Kayqueew.png',
        role: 'Web Developer',
        name: 'Kayque Roger',
      },
      content: [
        {type:'paragraph', content: 'Fala galeraa 👋'},

        {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        
        { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-09-29 04:00:00'),
    },
    
];


export function App() {
  return (
   <div>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar/>
        <main>
          {post.map(post =>{
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}        
        </main>
     
    </div>
   </div>
  )
}


