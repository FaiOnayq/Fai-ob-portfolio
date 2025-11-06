'use client'
import React from 'react'
import HeadingSection from '../HeadingSection'
import Heading from '../Heading'

const Header = () => {
  return (
    <div
      className='text-center'>
      <HeadingSection text='Projects'className="inline-block" />
      <Heading text="Things I've built so far" />
    </div>
  )
}

export default Header
