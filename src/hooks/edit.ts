import { useContext } from "react";
import { ListCamerasContext } from "../contexts/ListCamerasContext";
import { EditCameraContext } from "../contexts/EditCameraContext";

export const edit = () => {
  let {cameras, setCameras} = useContext(ListCamerasContext); 
  let {editCamera} = useContext(EditCameraContext);
  setCameras(
    [...cameras.map((item) => {
      if(item.id == editCamera?.id){
        return editCamera;
      }else return item;
    })]
  );
}