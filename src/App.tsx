
import styles  from './App.module.css';
import './global.css';

import { Skills } from './components/Skills';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import Projects from './components/Projects';


export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Skills />
          <Projects />
        
        </main>
      </div>
    </div>
  )
}


