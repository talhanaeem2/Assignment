import React from 'react'
import '../assets/css/pages/home.css'

const DesignProcess = ({ productDesign }) => {
  const {
    title,
    desc,
    circleText,
    firstImg,
    firstText,
    secondImg,
    secondText,
    thirdImg,
    thirdText,
    fourthImg,
    fourthText,
  } = productDesign
  //console.log(productDesign)
  return (
    <div className='text-center'>
      <h1>{title}</h1>
      <p>{desc}</p>
      <div className='circle'>
        <div className='text'>
          <p>{circleText}</p>
        </div>
        <div className='first-img'>
          <img src={firstImg} alt='research' />
          <h3>{firstText}</h3>
        </div>
        <div className='scnd-img'>
          <img src={secondImg} alt='wireFrame' />
          <h3>{thirdText}</h3>
        </div>
        <div className='thrd-img'>
          <img src={thirdImg} alt='ui' />
          <h3>{secondText}</h3>
        </div>
        <div className='frth-img'>
          <img src={fourthImg} alt='discovery' />
          <h3>{fourthText}</h3>
        </div>
      </div>
    </div>
  )
}

export default DesignProcess
