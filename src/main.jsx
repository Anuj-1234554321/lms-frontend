//css imports
import './index.css'
//library imports
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
 import { Provider } from 'react-redux'
import store from './Redux/store.js'

//components imports
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <Toaster />
        </BrowserRouter>
    </Provider>  
)
