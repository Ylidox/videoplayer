import { FC, createContext, useState } from "react";
import { ICamera } from "../components/Camera";

interface IEditCameraContext{
  editCamera?: ICamera,
  setEditCamera: React.Dispatch<React.SetStateAction<ICamera | undefined>>,
  showEdit: boolean,
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>,
}

interface IEditCameraProvider{
  children: React.ReactNode,
}

export const EditCameraContext = createContext<IEditCameraContext>({
  editCamera: undefined,
  setEditCamera: () => {},
  showEdit: false,
  setShowEdit: () => {},
});

export const EditCameraProvider: FC<IEditCameraProvider> = ({children}) => {
  let [showEdit, setShowEdit] = useState(false);
  let [editCamera, setEditCamera] = useState<ICamera>();
  

  return (
    <EditCameraContext.Provider 
      value={{
        editCamera,
        setEditCamera,
        showEdit,
        setShowEdit
      }}
    >    
      {children}
    </EditCameraContext.Provider>
  )
}
