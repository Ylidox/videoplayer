import React, { FC, createContext, useState } from "react";
import { ICamera } from "../components/Camera";

interface ICameraModalContext{
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  cameraModal?: ICamera,
  setCameraModal:  React.Dispatch<React.SetStateAction<ICamera | undefined>>,
}

interface ICameraModalProvider{
	children: React.ReactNode,
}

export const CameraModalContext = createContext<ICameraModalContext>({
  showModal: false,
  setShowModal: () => {},
  cameraModal: undefined,
  setCameraModal: () => {},
});

export const CameraModalProvider: FC<ICameraModalProvider> = ({children}) => {
  let [showModal, setShowModal] = useState(false);
  let [cameraModal, setCameraModal] = useState<ICamera>();
  return (
	<CameraModalContext.Provider
		value={{
      showModal,
      setShowModal,
      cameraModal,
      setCameraModal,
    }}
	>
		{children}
	</CameraModalContext.Provider>
  );
}