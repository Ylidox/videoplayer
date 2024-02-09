import { useEditCamera } from '../hooks/useEditCamera';
import styles from '../styles/CameraModal.module.scss';

export const CameraModal = () => {
  let {show, setShow, camera} = useEditCamera();
  return (
    <>
      {show && (
      <div className={styles.outside}
        onClick={() => setShow?.(false)}
      >
        <div className={`${styles.container} ${styles.center}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.content}>
            {camera?.name}
          </div>
        </div>
      </div>
      )}
    </>
  )
}
