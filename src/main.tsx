import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ListCamerasProvider } from './contexts/ListCamerasContext.tsx'
// import { EditCameraProvider } from './contexts/EditCameraContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ListCamerasProvider>
    {/* <EditCameraProvider> */}
      <App />
    {/* </EditCameraProvider> */}
  </ListCamerasProvider>,
)
