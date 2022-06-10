import styles  from './App.module.css';
import { Header } from './components/Header';
import './global.css';

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        sideBar
      </div>
    </div>
  )
}


