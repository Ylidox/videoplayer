import { FC, useState } from "react"
import { ICamera } from "./Camera"
import { IoMdClose } from "react-icons/io";
import styles from '../styles/CameraModal.module.scss'
import { useCameraModal } from "../hooks/useCameraModal";
import { IList } from "./ListCameras";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { useEditCamera } from "../hooks/useEditCamera";
import { ListEdit } from "./ListEdit";
import { useListCameras } from "../hooks/useListCameras";

interface ICameraModal{
  camera?: ICamera,
  list: IList,
}

export const CameraModal: FC<ICameraModal> = ({camera, list}) => {
  let [showEditList, setShowEditList] = useState<boolean>(false);
  let {setShowModal} = useCameraModal();
  let {setEditCamera, setShowEdit} = useEditCamera();
  let {lists, cameras, setCameras} = useListCameras();
  
  let editHandler = () => {
    setEditCamera(camera);
    setShowEdit(true);
    setShowModal(false);
  }

  let deleteFromList = () => {
    let common_list_id = lists.filter(item => item.role === 'common')[0].id;
    cameras.forEach((item, index) => {
      if(item.id === camera?.id){
        cameras[index].list_id = common_list_id;
      }
    })
    setCameras([...cameras]);
    setShowModal(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.head}
        onClick={() => setShowModal(false)}
      >
        <p>{camera?.name}</p>
        <div className={styles.close}>
          <IoMdClose/>
        </div>
      </div>
      <div className={styles.content}>
        {showEditList ?
          <ListEdit camera={camera}/> :
          <ul>
            <li onClick={editHandler}><MdOutlineEdit className={styles.icon}/>Редактировать </li>
            {list.role == 'common' ?
              <li
                onClick={() => setShowEditList(true)}
              ><MdAdd className={styles.icon}/>Добавить в список</li> :
              <li
                onClick={() => deleteFromList()}
              ><MdDeleteOutline className={styles.icon}/>Удалить из списка</li>
            }
          </ul>
        }
      </div>
    </div>
  )
}
