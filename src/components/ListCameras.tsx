import { FC} from "react"
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Camera } from './Camera';
import styles from '../styles/ListCameras.module.scss'
import { useListCameras } from "../hooks/useListCameras";
import { useCameraModal } from "../hooks/useCameraModal";
import { CameraModal } from "./CameraModal";
import {ICamera} from './Camera'

export interface IList{
  id: number,
  name: string,
  role: string,
}

export const ListCameras: FC<IList> = (list) => {
  let {cameras, setCameras} = useListCameras();
  let list_cameras = cameras.filter((cam) => cam.list_id == list.id);

  let {showModal, cameraModal} = useCameraModal();

  let drop = (event: React.DragEvent<HTMLDivElement>) => {
    let camera: ICamera = JSON.parse(event.dataTransfer.getData('camera'));
    let i = 0;
    for(; i < cameras.length; i++){
      if(cameras[i].id == camera.id) break;
    }
    if(cameras[i].list_id != list.id){
      cameras[i].list_id = list.id;
      setCameras([...cameras]);
    }
  }

  return (
    <div onDrop={drop} onDragOver={(e) => e.preventDefault()}>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMore/>} className={styles.list_header}>
          {list.name}
        </AccordionSummary>
        <AccordionDetails>
          {showModal && cameraModal?.list_id == list.id &&
            <CameraModal camera={cameraModal} list={list}/>
          }
          <div style={{display: showModal && cameraModal?.list_id == list.id ? 'none' : 'block'}}>
            {list_cameras.map((camera, index) => {
              return (
                <Camera key={index} camera={{...camera}}/>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
