import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from '../styles/Sidebar.module.scss';
import { useState } from 'react';


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
          <Accordion disableGutters>
            <AccordionSummary id='panel1' aria-controls='panel1-content' expandIcon={<ExpandMore/>}>
              Общий список
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam expedita sapiente corporis dolore voluptate repellendus, nisi iure facilis modi iste harum optio incidunt placeat doloremque porro ipsam voluptatum earum eos.
            </AccordionDetails>
          </Accordion>
          <Accordion disableGutters>
            <AccordionSummary id='panel1' aria-controls='panel1-content' expandIcon={<ExpandMore/>}>
              Общий список
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam expedita sapiente corporis dolore voluptate repellendus, nisi iure facilis modi iste harum optio incidunt placeat doloremque porro ipsam voluptatum earum eos.
            </AccordionDetails>
          </Accordion>
          <Accordion disableGutters>
            <AccordionSummary id='panel1' aria-controls='panel1-content' expandIcon={<ExpandMore/>}>
              Общий список
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam expedita sapiente corporis dolore voluptate repellendus, nisi iure facilis modi iste harum optio incidunt placeat doloremque porro ipsam voluptatum earum eos.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
