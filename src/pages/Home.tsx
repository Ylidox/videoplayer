import { EditModal } from "../components/EditModal"
import { Sidebar } from "../components/Sidebar"
import { ViewingPanel } from "../components/ViewingPanel"
import { EditCameraProvider } from "../contexts/EditCameraContext"

export const Home = () => {
  return (
    <>
      <EditCameraProvider>
        <EditModal/>
        <Sidebar/>
      </EditCameraProvider>
      <ViewingPanel/>
    </>
  )
}
