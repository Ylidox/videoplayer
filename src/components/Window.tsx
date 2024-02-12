import { FC } from "react"
import { IWindow } from "../contexts/ViewingPanelContext"
import { motion } from "framer-motion"
import styles from "../styles/Window.module.scss"

interface IWindowProp{
  window: IWindow,
  dragConst: React.RefObject<HTMLDivElement>,
}


export const Window: FC<IWindowProp> = ({window, dragConst}) => {
  return (
    <motion.div 
      drag 
      dragConstraints={dragConst}
      className={styles.container}
      dragMomentum={false}
      animate={{x:window.coord.x, y: window.coord.y,}}
      // initial={{x:window.coord.x, y: window.coord.y,}}
    >
      <div className={styles.content}>
        <div className={styles.controls}>
          <p>{window.camera.name}</p>
        </div>
        <video src={window.camera.src} controls ></video>
      </div>
    </motion.div>
  )
}
