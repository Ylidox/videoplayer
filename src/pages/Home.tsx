import { EditModal } from "../components/EditModal"
import { Sidebar } from "../components/Sidebar"
import { ViewingPanel } from "../components/ViewingPanel"
import { CameraModalProvider } from "../contexts/CameraModalContext"
import { EditCameraProvider } from "../contexts/EditCameraContext"

export const Home = () => {
  return (
    <>
      <EditCameraProvider>
        <EditModal/>
        <CameraModalProvider>
          <Sidebar/>
        </CameraModalProvider>
      </EditCameraProvider>
      <ViewingPanel/>
    </>
  )
}
