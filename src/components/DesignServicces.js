import React from 'react'
import { pills } from '../data'
import '../assets/css/pages/home.css'

const DesignServicces = ({ designServices }) => {
  const { title } = designServices
  return (
    <div className='design-services'>
      <h1>{title}</h1>
      <div className='d-flex'>
        {pills.map((pill, key) => {
          return (
            <div className='design-pill' key={key}>
              <p>{pill.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DesignServicces
