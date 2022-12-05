import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/components/header.css'
import { useSelector } from 'react-redux'

const Header = ({ head }) => {
  const { heading, heading1, text, headerImg, headerImg1 } = head
  const { changeHeader } = useSelector((store) => store.products)

  return (
    <div className='head-grid'>
      <div>
        {changeHeader ? (
          <Link to='/'>Go Back</Link>
        ) : (
          <Link to='/products'>Products</Link>
        )}
        <div className='head-text'>
          {!changeHeader ? <h1>{heading}</h1> : <h1>{heading1}</h1>}
          <p>{text}</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${changeHeader ? headerImg1 : headerImg})`,
        }}
        className='head-img'
      ></div>
    </div>
  )
}

export default Header
