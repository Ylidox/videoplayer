import {FC, createContext, useState} from 'react'
import { ICamera } from '../components/Camera';
import {IList} from '../components/ListCameras'
import list_cameras from '../json/cameras.json'
import list_json from '../json/lists.json';


interface IListCamerasContext{
  lists: IList[],
  setLists:  React.Dispatch<React.SetStateAction<IList[]>>,
  cameras: ICamera[],
  setCameras: React.Dispatch<React.SetStateAction<ICamera[]>>,
}

interface IListCamerasProvaider{
  children: React.ReactNode,
}

export const ListCamerasContext = createContext<IListCamerasContext>({
  lists: [],
  setLists: () => {},
  cameras: [],
  setCameras: () => {},
});

export const ListCamerasProvider: FC<IListCamerasProvaider> = ({children}) => {
  let [lists, setLists] = useState<IList[]>(list_json);
  let [cameras, setCameras] = useState<ICamera[]>(list_cameras);

  return (
    <ListCamerasContext.Provider 
      value={{
        lists,
        setLists,
        cameras,
        setCameras,
      }}
    >
      {children}
    </ListCamerasContext.Provider>
  );
}
