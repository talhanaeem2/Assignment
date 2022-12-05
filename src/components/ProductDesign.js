import React from 'react'
import '../assets/css/pages/home.css'

const ProductDesign = ({ productDesign }) => {
  const { designImg, designtext, designDesc, designDesc1, designDesc2 } =
    productDesign
  return (
    <div className='home-grid'>
      <div>
        <img src={designImg} alt='design' />
      </div>
      <div className='home-text'>
        <h3>{designtext}</h3>
        <p>{designDesc}</p>
        <span>{designDesc1}</span>
        <p>{designDesc2}</p>
      </div>
    </div>
  )
}

export default ProductDesign
