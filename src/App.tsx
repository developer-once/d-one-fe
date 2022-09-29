import { useState } from 'react';
import logo from './logo.svg';
import Pages from './pages/index';
import './App.css'
import 'antd/dist/antd.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pages></Pages>
    </div>
  )
}

export default App
