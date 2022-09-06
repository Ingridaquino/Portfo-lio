
import styles  from './App.module.css';
import { Header } from './components/header/Header';
import { Provided } from './components/provided/Provided';
import { SideBar } from './components/sidebar/SideBar';
import { Skills } from './components/skills/Skills';
import  Projects  from './components/myprojects/Projects'


import './global.css';




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


