import { FC, useState } from "react"
import {ICamera} from './Camera'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Camera } from './Camera';
import styles from '../styles/ListCameras.module.scss'
import { useListCameras } from "../hooks/useListCameras";




export interface IList{
  id: number,
  name: string,
  role: string,
}

export const ListCameras: FC<IList> = (list) => {
  let {cameras} = useListCameras();
  let list_cameras = cameras.filter((cam) => cam.list_id == list.id);
  return (
    <Accordion disableGutters>
      <AccordionSummary expandIcon={<ExpandMore/>} className={styles.list_header}>
        {list.name}
      </AccordionSummary>
      <AccordionDetails>
        {list_cameras.map((camera, index) => {
          return (
            <Camera key={index} camera={{...camera}}/>
          );
        })}
      </AccordionDetails>
    </Accordion>
  )
}
