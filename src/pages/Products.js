import React from 'react'
import '../assets/css/pages/products.css'
import {
  DesignProcess,
  DesignServicces,
  ProductDesign,
  UserExperience,
} from '../components'
import { secondHeader } from '../features/products/productSlice'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  const { fakeData } = useSelector((store) => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(secondHeader())
  }, [])

  return (
    <main>
      <ProductDesign productDesign={fakeData.productDesignData} />
      <DesignProcess productDesign={fakeData.productDesign} />
      <DesignServicces designServices={fakeData.designServices} />
      <UserExperience userExperience={fakeData.userExperience} />
    </main>
  )
}

export default Products
