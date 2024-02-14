import { useEditCamera } from '../hooks/useEditCamera';
import styles from '../styles/EditModal.module.scss';
import { ICamera } from './Camera';
import { IoCloseOutline } from "react-icons/io5";
import { useListCameras } from '../hooks/useListCameras';
import { useRef } from 'react';
import { useViewingPanel } from '../hooks/useViewingPanel';

export const EditModal = () => {
  let {showEdit, setShowEdit, editCamera, setEditCamera} = useEditCamera();
  let {windows, setWindows} = useViewingPanel();
  let {cameras, setCameras} = useListCameras();

  let editHandler = (event: React.ChangeEvent<HTMLInputElement>, prop: keyof ICamera) => {
    if(editCamera){
      setEditCamera({
        ...editCamera,
        [prop]: event.currentTarget.value,
      })
    }
  }

  let inputImage = useRef<HTMLInputElement>(null);

  let selectFile = () => {
    inputImage.current?.click();
  }

  let dropImage = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    drawImage(e.dataTransfer.files[0])
  }

  let downloadImage = () => {
    let file = inputImage.current?.files && inputImage.current?.files[0];
    file && drawImage(file);
  }

  let drawImage = (file: File) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if(editCamera) {
        editCamera.preview = '' + reader.result;
        setEditCamera({...editCamera});
      }
    }
  }

  let saveEdit = () => {
    setWindows([...windows.map(item => {
      if(item.camera.id == editCamera?.id){
        item.camera = editCamera;
        return item;
      }else return item;
    })]);
    setCameras(
      [...cameras.map((item) => {
        if(item.id == editCamera?.id){
          return editCamera;
        }else return item;
      })]
    );
    setShowEdit(false);
  }

  return (
    <>
      {showEdit && (
      <div className={styles.outside}
        onClick={() => setShowEdit(false)}
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
                <div className={`${styles.li_content} ${styles.select_photo_container}`}
                  onDragStart={e => e.preventDefault()}
                  onDragOver={e => e.preventDefault()}
                  onDrop={dropImage}
                >                  
                  <img src={editCamera?.preview} alt="Превью"/>
                  <input onChange={downloadImage} className={styles.hidden} ref={inputImage} placeholder="Image" type="file" />
                  <button className={styles.select_photo} onClick={selectFile}>
                    Выберите фото
                  </button>
                </div>                 
              </li>
            </ul>

            <div className={styles.button_container}>
              <button
                onClick={saveEdit}
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
