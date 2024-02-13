import { FC, useEffect, useRef, useState } from "react"
import { IWindow } from "../contexts/ViewingPanelContext"
import { motion } from "framer-motion"
import styles from "../styles/Window.module.scss"
import { IoMdClose } from "react-icons/io";
import { useViewingPanel } from "../hooks/useViewingPanel";

interface IWindowProp{
  window: IWindow,
  dragConst: React.RefObject<HTMLDivElement>,
}


export const Window: FC<IWindowProp> = ({window, dragConst}) => {
  let {windows, setWindows} = useViewingPanel();
  let [play, setPlay] = useState(window.run);

  const deleteWindow = () => {
    let i = 0;
    for(; i < windows.length; i++){
      if(windows[i].camera.id == window.camera.id) break;
    }
    windows.splice(i , 1);
    setWindows([...windows]);
  }

  let ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if(ref.current?.volume)
      ref.current.volume = 0;
    
  }, []);

  useEffect(() => {
    if(window.run){
      ref.current?.play();
    }else{
      ref.current?.pause();
    }
  }, [window.run])

  useEffect(() => {
    
    if(window.run == play) return;
    let index = windows.findIndex(item => item.camera.id == window.camera.id);
    windows[index].run = play;

    setWindows([...windows]);
  }, [play]);

  return (
    <motion.div 
      drag 
      dragConstraints={dragConst}
      className={styles.container}
      dragMomentum={false}
      animate={{x:window.coord.x, y: window.coord.y,}}
    >
      <div className={styles.content}>
        <div className={styles.controls}>
          <p>{window.camera.name}</p>
          <div className={styles.close}
            onClick={deleteWindow}
          >
            <IoMdClose />
          </div>
        </div>
        <video 
          src={window.camera.src} 
          controls 
          ref={ref} 
          onPlay={() => setPlay(true)}
          onPause={() => setPlay(false)}
          
        ></video>
      </div>
    </motion.div>
  )
}
