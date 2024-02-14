import { useAddList } from "../hooks/useAddList"
import { useListCameras } from "../hooks/useListCameras";
import { IoMdClose } from "react-icons/io";import styles from '../styles/AddListModal.module.scss'
import { useEffect, useState } from "react";
import { IList } from "./ListCameras";
import { MdAdd } from "react-icons/md";
import cameras1 from '../json/cameras1.json';
import lists1 from '../json/lists1.json'

export const AddListModal = () => {
  let {lists, setLists, cameras, setCameras} = useListCameras();
  let {showAddList, setShowAddList} = useAddList();
  let [listsFile, setListsFile] = useState<IList[]>([]);

  useEffect(() => {
    listsFile = lists1.filter(item => {
      return !lists.some(list => list.id == item.id)
    });
    setListsFile(listsFile);
  }, []);

  let addList = (list: IList) => {
    lists.unshift(list);
    let cams = cameras1.filter(item => item.list_id == list.id);
    setCameras([...cameras, ...cams]);
    setLists([...lists]);
    setShowAddList(false);
  }
  return (
    <>
      {showAddList &&
      <div className={styles.container}>
        <div className={styles.head}
          onClick={() => setShowAddList(false)}
        >
          <p>Добавить в список</p>
          <div className={styles.close}>
            <IoMdClose/>
          </div>
        </div>
        <div className={styles.content}>
          <ul>
            {listsFile.map(item => 
              <li key={item.id}
                onClick={() => addList(item)}
              >
                <MdAdd/>{item.name}
              </li>)}
          </ul>
        </div>
      </div>
      }
    </>
  )
}
