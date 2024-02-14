import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from '../styles/Sidebar.module.scss';
import { useState } from 'react';
import { ListContainer } from './ListContainer';
import { MdAdd } from "react-icons/md";
import { useAddList } from "../hooks/useAddList";
import { AddListModal } from "./AddListModal";



export const Sidebar = () => {
  let [open, setOpen] = useState(true);
  let {showAddList, setShowAddList} = useAddList();
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
          
          {!showAddList ?
            <div className={styles.add_list}>
              <button
                onClick={() => setShowAddList(show => !show)}
              >
                <MdAdd/>Добавить список
              </button>
            </div> 
            :
            <AddListModal/>
          }
        </div>
        
      </div>
    </div>
  )
}
