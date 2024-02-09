import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from '../styles/Sidebar.module.scss';
import { useState } from 'react';
import { ListContainer } from './ListContainer';


export const Sidebar = () => {
  let [open, setOpen] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.closer}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaChevronLeft/> : <FaChevronRight/>}
      </div>
      <div className={`${styles.sidebar} ${open ? styles.open : styles.close}`} >
        <div className={styles.content}>
          <ListContainer/>
        </div>
      </div>
    </div>
  )
}
