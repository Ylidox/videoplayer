import { FC } from "react"
import { ICamera } from "./Camera"
import { IoMdClose } from "react-icons/io";
import styles from '../styles/CameraModal.module.scss'
import { useCameraModal } from "../hooks/useCameraModal";
import { IList } from "./ListCameras";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { useEditCamera } from "../hooks/useEditCamera";

interface ICameraModal{
  camera?: ICamera,
  list: IList,
}

export const CameraModal: FC<ICameraModal> = ({camera, list}) => {
  let {setShowModal} = useCameraModal();
  let {setEditCamera, setShowEdit} = useEditCamera();

  let editHandler = () => {
    setEditCamera(camera);
    setShowEdit(true);
    setShowModal(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.close}
        onClick={() => setShowModal(false)}
      >
        <IoMdClose/>
      </div>
      <div className={styles.content}>
        <ul>
          <li onClick={editHandler}><MdOutlineEdit className={styles.icon}/>Редактировать </li>
          {list.role == 'common' ?
            <li><MdAdd className={styles.icon}/>Добавить в список</li> :
            <li><MdDeleteOutline className={styles.icon}/>Удалить из списка</li>
          }
        </ul>
      </div>
    </div>
  )
}
