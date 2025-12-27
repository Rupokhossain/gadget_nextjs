import React from 'react'
import TopHeader from './TopHeader/TopHeader'
import MidHeader from './MidHeader/MidHeader'
import BottomHeader from './BottomHeader/BottomHeader'

const Header = () => {
  return (
    <div className='w-full'>
        <TopHeader></TopHeader>
        <MidHeader></MidHeader>
        <BottomHeader></BottomHeader>
    </div>
  )
}

export default Header