import { FC, useState } from "react"
import styles from '../styles/Camera.module.scss';
import { HiDotsVertical } from "react-icons/hi";
import { BsCameraVideoFill, BsCameraVideo } from "react-icons/bs";

interface ICamera{
  id: number,
  name: string,
  ip: string,
  port: string,
  list_permissions: string[],
  src: string,
  preview: string,
}

export const Camera: FC<ICamera> = (camera) => {
  let [run, setRun] = useState(false);
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
        <div>
          <HiDotsVertical/>
        </div>
      </div>
    </div>
  )
}
