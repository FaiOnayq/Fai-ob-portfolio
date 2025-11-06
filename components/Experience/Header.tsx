'use client'
import React, { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import HeadingSection from '../HeadingSection'
import Heading from '../Heading'

const Header = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <div className='text-center'>
      <HeadingSection text='Experience' className='inline-block' />
      <Heading
        text=''
        className='mb-6 mt-0'
      />
    </div>
  )
}

export default Header
