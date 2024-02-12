import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ListCamerasProvider } from './contexts/ListCamerasContext.tsx'
import { ViewingPanelProvider } from './contexts/ViewingPanelContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ListCamerasProvider>
    <ViewingPanelProvider>
      <App />
    </ViewingPanelProvider>
  </ListCamerasProvider>,
)
