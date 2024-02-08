import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from '../styles/Sidebar.module.scss';
import { useState } from 'react';
import { ListCreator } from './ListCreator';


export const Sidebar = () => {
  let [open, setOpen] = useState(true);
  // console.log(cameras)
  return (
    <div className={styles.container}>
      <div className={styles.closer}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaChevronLeft/> : <FaChevronRight/>}
      </div>
      <div className={`${styles.sidebar} ${open ? styles.open : styles.close}`} >
        <div className={styles.content}>
          <ListCreator/>
        </div>
      </div>
    </div>
  )
}
