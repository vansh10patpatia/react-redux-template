import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import {store} from './store';
import { Provider, connect } from 'react-redux';

function App() {
  const [count, setCount] = useState(0)

  return(
    <Provider store={store}>
        {/* <Navigator /> */}
        <h1>Basic React Redux Template</h1>
    </Provider>
  )
}

export default App
