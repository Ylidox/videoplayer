import { FC, createContext, useState } from "react";
import { ICamera } from "../components/Camera";

interface IEditCameraContext{
  camera?: ICamera | null,
  setCamera?:  React.Dispatch<React.SetStateAction<ICamera | null>>, 
  show?: boolean,
  setShow?: React.Dispatch<React.SetStateAction<boolean>>, 
}

interface IEditCameraProvider{
  children: React.ReactNode,
}

export const EditCameraContext = createContext<IEditCameraContext>({});

export const EditCameraProvaider: FC<IEditCameraProvider> = ({children}) => {
  let [show, setShow] = useState(false);
  let [camera, setCamera] = useState<ICamera | null>(null);
  return (
    <EditCameraContext.Provider 
      value={{
        show,
        setShow,
        camera,
        setCamera,
      }
    }>    
      {children}
    </EditCameraContext.Provider>
  )
}
