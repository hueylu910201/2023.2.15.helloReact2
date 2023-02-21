import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div classNameName="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App;
