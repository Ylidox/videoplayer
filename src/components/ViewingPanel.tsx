import { motion } from 'framer-motion';
import { useViewingPanel } from '../hooks/useViewingPanel';
import styles from '../styles/ViewingPanel.module.scss';
import { ICamera } from './Camera';
import { useRef } from 'react';
import { Window } from './Window';

export const ViewingPanel = () => {
  let {windows, setWindows} = useViewingPanel();
  let drop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('drop')
    let camera: ICamera = JSON.parse(event.dataTransfer.getData('camera'));
    console.log(camera)
    if(windows.every(item => item.camera.id !== camera.id)){
      windows.push({
        camera,
        run: false,
        coord: {
          x: event.clientX,
          y: event.clientY,
        }
      })
      setWindows([...windows]);
    }
  }
  
  let dragConst = useRef<HTMLDivElement>(null);
  return (
    <motion.div className={styles.container} onDrop={drop} onDragOver={(e) => e.preventDefault()} ref={dragConst} 
    >
      {windows.map(item => <Window window={item} dragConst={dragConst} key={item.camera.id}/>)}
    </motion.div>
  )
}
