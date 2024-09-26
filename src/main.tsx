import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "./App.css"
import router from './routes/routes.tsx'
import theme from './Theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} /> 
    </ChakraProvider>
  </React.StrictMode>,
)
