import { BrowserRouter as Router } from 'react-router-dom';
import WebRoutes  from './routes/index';
import './App.css'

function App() {

  return (
    <>
      <Router basename={"/iot"}>
        <WebRoutes />
      </Router>
    </>
  )
}

export default App
