import { EditModal } from "../components/EditModal"
import { Sidebar } from "../components/Sidebar"
import { ViewingPanel } from "../components/ViewingPanel"
import { CameraModalProvider } from "../contexts/CameraModalContext"
import { EditCameraProvider } from "../contexts/EditCameraContext"
import { AddListProvider } from "../contexts/AddListContext"

export const Home = () => {
  return (
    <>
      <EditCameraProvider>
        <EditModal/>
        <AddListProvider>
          <CameraModalProvider>
            <Sidebar/>
          </CameraModalProvider>
        </AddListProvider>
      </EditCameraProvider>
      <ViewingPanel/>
    </>
  )
}
