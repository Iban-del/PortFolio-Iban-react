import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GenericRenderContext } from './Core/RenderContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GenericRenderContext>
      <App />
    </GenericRenderContext>
  </StrictMode>,
)
