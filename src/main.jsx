import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter}  from 'react-router-dom';
import AuthContextProvider from './context/AuthContext.jsx'

// import { ChakraProvider } from '@chakra-ui/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <BrowserRouter>
    <ChakraProvider>
       <App />
    </ChakraProvider>
  </BrowserRouter>
  </AuthContextProvider>
)
