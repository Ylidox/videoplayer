import { FC, createContext, useState } from "react";
import { ICamera } from "../components/Camera";

interface IEditCameraContext{
  editCamera?: ICamera,
  setEditCamera: React.Dispatch<React.SetStateAction<ICamera | undefined>>,
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

interface IEditCameraProvider{
  children: React.ReactNode,
}

export const EditCameraContext = createContext<IEditCameraContext>({
  editCamera: undefined,
  setEditCamera: () => {},
  showModal: false,
  setShowModal: () => {},
});

export const EditCameraProvider: FC<IEditCameraProvider> = ({children}) => {
  let [showModal, setShowModal] = useState(false);
  let [editCamera, setEditCamera] = useState<ICamera>();
  

  return (
    <EditCameraContext.Provider 
      value={{
        editCamera,
        setEditCamera,
        showModal,
        setShowModal
      }}
    >    
      {children}
    </EditCameraContext.Provider>
  )
}
