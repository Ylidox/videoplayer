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
      setPlay(true)
    }else{
      ref.current?.pause();
      
      setPlay(false)
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
        {/* <div className={styles.click_listener}
          onClick={() => {}}
        ></div> */}
        <video 
          src={window.camera.src} 
          controls 
          ref={ref} 
          onPlay={() => setPlay(true)}
          onPause={() => setPlay(false)}
          // onMouseDownCapture={() => {console.log('mousedown')}}
          // onPlay={() => {console.log('play', seek)}}
          // onPause={() => {console.log('pause', seek)}}
          // onSeeked={(e) => {seek = false; console.log('seek', seek);}}
          // onSeeking={() =>  {seek = true; console.log('seeking', seek)}}
          // onPauseCapture={() => console.log('pauseCapture')}
          // onClickCapture={() => console.log('clickcapt')}
          // onAuxClick={()=>console.log('auxclick')}
          // onTimeUpdateCapture={() => {console.log('update', ref.current?.paused)}}
          
          className={play ? styles.open : styles.hide}
        ></video>
        <img 
          src={window.camera.preview} 
          className={play ? styles.hide :  styles.open }
          onClick={() => setPlay(!play)}
        />
        
      </div>
    </motion.div>
  )
}

/*
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

  console.log('width: ', ref.current?.style.width)
  return (
    <motion.div 
      drag 
      dragConstraints={dragConst}
      className={styles.container}
      dragMomentum={false}
      animate={{x:window.coord.x, y: window.coord.y,}}
      style={{width: ref.current?.style.width}}
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
          onTimeUpdate={() => {setPlay(true)}}
          className={play ? styles.open : styles.hide}
        ></video>
        <img 
          src={window.camera.preview} 
          className={play ? styles.hide :  styles.open }
          onClick={() => setPlay(!play)}
        />
      </div>
    </motion.div>
  )
}

*/