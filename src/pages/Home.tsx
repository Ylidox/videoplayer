import { CameraModal } from "../components/CameraModal"
import { Sidebar } from "../components/Sidebar"
import { ViewingPanel } from "../components/ViewingPanel"
import { EditCameraProvaider } from "../contexts/EditCameraContext"

export const Home = () => {
  return (
    <>
      <EditCameraProvaider>
        <CameraModal/>
        <Sidebar/>
      </EditCameraProvaider>
      <ViewingPanel/>
    </>
  )
}
