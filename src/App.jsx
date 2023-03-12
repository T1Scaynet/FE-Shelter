import { useState } from 'react'
import { Route, Router } from 'react-router-dom'
import Routes from './routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Route path='/*' element={<Routes />}/>
    </Router>
  )
}

export default App
