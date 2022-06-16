
import styles  from './App.module.css';
import { Skills } from './components/Skills';


import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import './global.css';


export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Skills />
        </main>
      </div>
    </div>
  )
}


