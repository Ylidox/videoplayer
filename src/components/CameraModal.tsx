import { useEditCamera } from '../hooks/useEditCamera';
import styles from '../styles/CameraModal.module.scss';
import { ICamera } from './Camera';
import { IoCloseOutline } from "react-icons/io5";
import {edit} from '../hooks/edit';
import { useListCameras } from '../hooks/useListCameras';

export const CameraModal = () => {
  let {showModal, setShowModal, editCamera, setEditCamera} = useEditCamera();
  let {cameras, setCameras} = useListCameras();

  let editHandler = (event: React.ChangeEvent<HTMLInputElement>, prop: keyof ICamera) => {
    if(editCamera){
      setEditCamera({
        ...editCamera,
        [prop]: event.currentTarget.value,
      })
    }
  }

  return (
    <>
      {showModal && (
      <div className={styles.outside}
        onClick={() => setShowModal(false)}
      >
        <div className={styles.icon_close}>
          <IoCloseOutline />
        </div>
        <div className={styles.container }
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.content}>
            <ul className={styles.list}>
              <li className={styles.li}>
                <div className={styles.title}>Название:</div> 
                <div className={styles.li_content}>
                  <input 
                    type="text" value={editCamera?.name} 
                    onChange={(event) => editHandler(event, "name")}
                  />
                </div>
              </li>
              <li className={styles.li}>
                <div className={styles.title}>IP:</div> 
                <div className={styles.li_content}>            
                  <input 
                    type="text" value={editCamera?.ip} 
                    onChange={(event) => editHandler(event, "ip")}
                  />
                </div>
              </li>
              <li className={styles.li}>                 
                <div className={styles.title}>Порт:</div> 
                <div className={styles.li_content}>                  
                  <input 
                    type="text" value={editCamera?.port} 
                    onChange={(event) => editHandler(event, "port")}
                  />
                </div>
              </li>
              <li className={styles.li}>                
                <div className={styles.title}>Источник:</div> 
                <div className={styles.li_content}>                  
                  <input 
                    type="text" value={editCamera?.src} 
                    onChange={(event) => editHandler(event, "src")}
                  />
                </div>
              </li>
              <li className={styles.li}>
                <div className={`${styles.title} ${styles.__top}`}>Превью:</div>
                <div className={styles.li_content}>                  
                  <img src={editCamera?.preview} alt="Превью"/>
                </div>                 
              </li>
            </ul>

            <div className={styles.button_container}>
              <button
                onClick={() => {
                  setCameras(
                    [...cameras.map((item) => {
                      if(item.id == editCamera?.id){
                        return editCamera;
                      }else return item;
                    })]
                  );
                  setShowModal(false);
                }}
              >
                Изменить
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}
