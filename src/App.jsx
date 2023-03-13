
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Route, Router } from 'react-router-dom'
import Routes from './routes/Routes'

function App () {
  const tasksState = useSelector((state) => state.tasks)
  console.log({ tasksState })

  return (
    <Router>
      <Route path='/*' element={<Routes />}/>
    </Router>
  )
}

export default App
