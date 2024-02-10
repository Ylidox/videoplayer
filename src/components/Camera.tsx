import { FC, useState } from "react"
import styles from '../styles/Camera.module.scss';
import { HiDotsVertical } from "react-icons/hi";
import { BsCameraVideoFill, BsCameraVideo } from "react-icons/bs";
import { useEditCamera } from "../hooks/useEditCamera";


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

export const Camera: FC<ICameraProp> = ({camera,}) => {
  let [run, setRun] = useState(false);
  let {setEditCamera, setShowModal} = useEditCamera();
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
            setEditCamera(camera);
            setShowModal(true);
          }}
        >
          <HiDotsVertical/>
        </div>
      </div>
    </div>
  )
}
