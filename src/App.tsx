
import styles  from './App.module.css';
import './global.css';

import { Skills } from './components/Skills';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import Projects from './components/Projects';
import { Provided } from './components/Provided';


export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Skills />
          <Projects />
          <Provided />
        </main>
      </div>
    </div>
  )
}


