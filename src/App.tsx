import React from 'react'
import ReactDOM from 'react-dom/client'

import Debugging from './Debugging'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <>
  <BrowserRouter>
    <Debugging></Debugging>
  </BrowserRouter>
  </>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)