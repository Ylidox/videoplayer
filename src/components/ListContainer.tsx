import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import lists from '../json/lists.json';
import { Camera } from './Camera';
import styles from '../styles/ListCreator.module.scss';

export const ListContainer = () => {
  
  return (
    <>
    {lists.map(item => {
      return (
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMore/>} className={styles.list_header}>
            {item.name}
          </AccordionSummary>
          <AccordionDetails>
            {item.cameras.map(camera => {
              return (
                <Camera {...camera}/>
              );
            })}
          </AccordionDetails>
        </Accordion>
      );
    })}
    </>
  )
}
