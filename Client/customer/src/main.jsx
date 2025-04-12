import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {StoreContextProvider} from "./context/StoreContext.js";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StoreContextProvider>
            <App />
        </StoreContextProvider>
    </BrowserRouter>

)
