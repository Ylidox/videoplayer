import { FC } from "react"
import { useListCameras } from "../hooks/useListCameras"
import { MdAdd } from "react-icons/md";
import styles from "../styles/CameraModal.module.scss"
import { ICamera } from "./Camera";
import { useCameraModal } from "../hooks/useCameraModal";

interface IListEdit{
  camera?: ICamera,
}

export const ListEdit: FC<IListEdit> = ({camera}) => {
  let {lists, cameras, setCameras} = useListCameras();
  let {setShowModal} = useCameraModal();

  let updateList = (new_list_id: number) => {
    cameras.forEach((item, index) => {
      if(item.id === camera?.id){
        cameras[index].list_id = new_list_id;
      }
    })
    setShowModal(show => !show);
    setCameras([...cameras]);
  }

  return (
    <div>
      <ul>
        {lists.map(
          item => item.role !== 'common' &&
            <li onClick={() => updateList(item.id)} key={item.id}><MdAdd className={styles.icon}/>{item.name}</li>
        )}
      </ul>
    </div>
  )
}
