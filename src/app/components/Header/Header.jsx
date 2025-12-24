import React from 'react'
import TopHeader from './TopHeader/TopHeader'
import MidHeader from './MidHeader/MidHeader'

const Header = () => {
  return (
    <div className='w-full'>
        <TopHeader></TopHeader>
        <MidHeader></MidHeader>
    </div>
  )
}

export default Header