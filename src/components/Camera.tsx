import { FC, useState, memo, useEffect } from "react"
import styles from '../styles/Camera.module.scss';
import { HiDotsVertical } from "react-icons/hi";
import { BsCameraVideoFill, BsCameraVideo, BsCameraVideoOff} from "react-icons/bs";
import { useCameraModal } from "../hooks/useCameraModal";
import { useViewingPanel } from "../hooks/useViewingPanel";

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

type display = 'disabled' | 'stop' | 'run';

export const Camera: FC<ICameraProp> = memo(({camera,}) => {
  let [run, setRun] = useState<display>('disabled');
  let {setShowModal, setCameraModal} = useCameraModal();
  let {windows, setWindows} = useViewingPanel();

  let drag = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('camera', JSON.stringify(camera));
  };

  useEffect(() => {
    setRun('disabled');
    windows.some(item => {
      if(item.camera.id == camera.id){
        item.run ? setRun('run') : setRun('stop');
        return true;
      }
      
      return false;   
    })
  }, [windows]);

  let getClassName = () => {
    return (run == 'disabled' || run == 'stop') ? styles.stop : styles.start;
  }

  let getIcon = () => {
    if(run == 'run') return <BsCameraVideoFill/>;
    if(run == 'stop') return <BsCameraVideo/>;
    else return <BsCameraVideoOff/>;
  }

  let runHandler = () => {
    if(run == 'disabled') return;
    run = run == 'run' ? 'stop' : 'run';
    let index = windows.findIndex((item) => item.camera.id === camera.id);
    windows[index].run = run == 'run' ? true : false;
    setRun(run);
    setWindows([...windows]);
  }

  return (
    <div 
      className={styles.container} 
      draggable 
      onDragStart={drag}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className={styles.content}>
        <div className={styles.camera_head}
          onClick={runHandler}
        >
          <div className={`${styles.logo} ${getClassName()}`}>
            {getIcon()} 
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
