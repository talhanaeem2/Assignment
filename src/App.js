import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import { data } from './data'
import { Loading } from './components'
import { showData } from './features/products/productSlice'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  const { fakeData } = useSelector((store) => store.products)
  useEffect(() => {
    setTimeout(() => {
      dispatch(showData(data))
    }, 2000)
  })

  if (!fakeData) {
    return <Loading />
  }
  return (
    <Router>
      <Header head={fakeData.header} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App
