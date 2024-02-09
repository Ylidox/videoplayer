import {FC, createContext, useState} from 'react'
import list_json from '../json/lists.json';
import { ICamera } from '../components/Camera';

interface IListCamerasContext{
  
}

interface IListCamerasProvaider{
  children: React.ReactNode,
}

interface IListCameras{
  cameras: ICamera[],
  name: string,
  role: string,
}

export const ListCamerasContext = createContext<IListCamerasContext>({});

export const ListCamerasProvaider: FC<IListCamerasProvaider> = ({children}) => {
  let [lists, setLists] = useState<IListCameras[]>(list_json);
  


  return (
    <ListCamerasContext.Provider 
      value={{}}
    >
      {children}
    </ListCamerasContext.Provider>
  );
}
