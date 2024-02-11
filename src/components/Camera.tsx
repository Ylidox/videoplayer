import { FC, useState, memo } from "react"
import styles from '../styles/Camera.module.scss';
import { HiDotsVertical } from "react-icons/hi";
import { BsCameraVideoFill, BsCameraVideo } from "react-icons/bs";
import { useCameraModal } from "../hooks/useCameraModal";

export interface ICamera{
  id: number,
  list_id: number,
  name: string,
  ip: string,
  port: string,
  list_permissions: string[],
  src: string,
  preview: string,
}

export interface ICameraProp{
  camera: ICamera,
}

export const Camera: FC<ICameraProp> = memo(({camera,}) => {
  let [run, setRun] = useState(false);


  let {setShowModal, setCameraModal} = useCameraModal();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.camera_head}
          onClick={() => setRun(run => !run)}
        >
          <div className={`${styles.logo} ${run ? styles.start : styles.stop}`}>
            {run ? <BsCameraVideoFill/> : <BsCameraVideo/>} 
          </div>
          <p>{camera.name}</p>
          
        </div>
        <div
          onClick={() => {
            setShowModal(true);
            setCameraModal(camera);
          }}
        >
          <HiDotsVertical/>
        </div>
      </div>
    </div>
  )
})
