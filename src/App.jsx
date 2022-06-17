import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import {store} from './store';
import { Provider, connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './routes/index'

function App() {
  const [count, setCount] = useState(0)

  return(
    <Provider store={store}>
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    </Provider>
  )
}

export default App
