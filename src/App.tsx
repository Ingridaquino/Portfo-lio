import styles  from './App.module.css';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import './global.css';


export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar />
      </div>
    </div>
  )
}


