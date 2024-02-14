import { motion } from 'framer-motion';
import { useViewingPanel } from '../hooks/useViewingPanel';
import { CiGrid41 } from "react-icons/ci";
import styles from '../styles/ViewingPanel.module.scss';
import { ICamera } from './Camera';
import { useRef } from 'react';
import { Window } from './Window';

export const ViewingPanel = () => {
  let {windows, setWindows} = useViewingPanel();
  let drop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let camera: ICamera = JSON.parse(event.dataTransfer.getData('camera'));
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

  let grid = () => {
    let w = 400, h = 250;
    let count_j = window.innerWidth / w | 0;
    let count_i = Math.ceil(windows.length / count_j);
    let offset_x = (window.innerWidth - w * count_j) / 2;
    let offset_y = count_i * h < window.innerHeight ? (window.innerHeight - h * count_i) / 2 : 0;
      // (window.innerHeight - h * count_i) / 2 : 0;

    // setWindows([...windows.map(item => {item.coord.x++; return item})]);

    let counter = (count_j: number) => {
      let prev = [0, 0];
      let coord = [0, 0];
      let increment = () => {
        prev = [...coord];
        coord[0]++;
        if(coord[0] == count_j){
          coord[0] = 0;
          coord[1]++;
        }
        return prev;
      }
      return increment;
    }

    let incr = counter(count_j);

    for(let i = 0; i < windows.length; i++){
      let coord = incr();
      windows[i].coord = {
        x: offset_x + w * coord[0],
        y: offset_y + h * coord[1],
      }
      console.log('name: ', windows[i].camera.name,
      'y: ', windows[i].coord.x,
      'y: ', windows[i].coord.y)
    }
    setWindows([...windows]);
  }
  
  let dragConst = useRef<HTMLDivElement>(null);
  return (
    <motion.div className={styles.container} onDrop={drop} onDragOver={(e) => e.preventDefault()} ref={dragConst} 
    >
      <div className={styles.grid}
        onClick={grid}
      >
        <CiGrid41/>
      </div>
      {windows.map(item => <Window window={item} dragConst={dragConst} key={item.camera.id}/>)}
    </motion.div>
  )
}
