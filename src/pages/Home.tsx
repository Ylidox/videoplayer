import { CameraModal } from "../components/CameraModal"
import { Sidebar } from "../components/Sidebar"
import { ViewingPanel } from "../components/ViewingPanel"
import { EditCameraProvider } from "../contexts/EditCameraContext"

export const Home = () => {
  return (
    <>
      <EditCameraProvider>
        <CameraModal/>
        <Sidebar/>
      </EditCameraProvider>
      <ViewingPanel/>
    </>
  )
}
