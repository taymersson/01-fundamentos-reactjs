import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Taymersson PHILIPE"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit obcaecati neque nihil aspernatur sequi unde repudiandae pariatur officia mollitia cupiditate, suscipit impedit voluptates iure deleniti. Quos laboriosam neque culpa."
          />
        </main>
      </div>
    </div>
  )
}