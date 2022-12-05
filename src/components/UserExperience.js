import React from 'react'
import '../assets/css/pages/home.css'

const UserExperience = ({ userExperience }) => {
  const {
    title,
    desc,
    tactics,
    tacticBehave,
    tacticWire,
    tacticPerson,
    tacticUser,
    userImg,
    title1,
    desc1,
    tactics1,
    tacticBehave1,
    tacticWire1,
    tacticPerson1,
    tacticUser1,
    userImg1,
  } = userExperience
  return (
    <div>
      <div className='user-experience'>
        <div className='user-text'>
          <h1>{title}</h1>
          <p>{desc}</p>
          <div>
            <h3>{tactics}</h3>
            <p className='behave'>
              <span>{tacticBehave}</span>
              <span>{tacticWire}</span>
            </p>
            <p className='person'>
              <span>{tacticPerson}</span>
              <span>{tacticUser}</span>
            </p>
          </div>
        </div>
        <img src={userImg} alt='user experience' />
      </div>
      <div className='user-experience'>
        <img src={userImg1} alt='user experience' />
        <div className='user-text'>
          <h1>{title1}</h1>
          <p>{desc1}</p>
          <div>
            <h3>{tactics1}</h3>
            <p className='behave'>
              <span>{tacticBehave1}</span>
              <span>{tacticWire1}</span>
            </p>
            <p className='person'>
              <span>{tacticPerson1}</span>
              <span>{tacticUser1}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserExperience
