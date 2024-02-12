import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { ICamera } from "../components/Camera";
// import cameras from '../json/cameras.json'

export interface IWindow{
  camera: ICamera,
  run: boolean,
  coord: {
    x: number,
    y: number,
  },
}

interface IViewingPanelContext{
  windows: IWindow[],
  setWindows: React.Dispatch<React.SetStateAction<IWindow[]>>,
}

interface IViewingPanelProvider{
  children: ReactNode,
}

export const ViewingPanelContext = createContext<IViewingPanelContext>({
  windows: [],
  setWindows: () => {},
});

export const ViewingPanelProvider: FC<IViewingPanelProvider> = ({children}) => {
  let [windows, setWindows] = useState<IWindow[]>([]);
  
  // useEffect(() => {
  //   let cams = cameras.slice(0, 4);
  //   windows = cams.map(item => {
  //     return {
  //       camera: item,
  //       run: false,
  //     }
  //   });
  //   setWindows([...windows]);
  // }, []);


  return (
    <ViewingPanelContext.Provider
      value={{
        windows,
        setWindows,
      }}
    >
      {children}
    </ViewingPanelContext.Provider>
  );
}