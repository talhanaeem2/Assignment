import React, { useEffect } from 'react'
import '../assets/css/pages/home.css'

import { useSelector, useDispatch } from 'react-redux'
import {
  DesignProcess,
  DesignServicces,
  ProductDesign,
  UserExperience,
} from '../components'
import { firstHeader } from '../features/products/productSlice'
import Form from '../components/Form'

const Home = () => {
  const { fakeData } = useSelector((store) => store.products)
  console.log(fakeData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(firstHeader())
  }, [])

  return (
    <main>
      <ProductDesign productDesign={fakeData.productDesignData} />
      <DesignProcess productDesign={fakeData.productDesign} />
      <DesignServicces designServices={fakeData.designServices} />
      <UserExperience userExperience={fakeData.userExperience} />
      <Form />
    </main>
  )
}

export default Home
