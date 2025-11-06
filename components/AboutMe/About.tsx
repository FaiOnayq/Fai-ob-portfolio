'use client'
import React, { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import HeadingSection from '../HeadingSection'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

const About = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  return (
    <motion.div
      ref={ref} // Ref to the container to observe when it enters the viewport
      className='container'
      variants={containerVariants}
      initial='hidden'
      animate={controls}
    >
      <HeadingSection
        text='About Me'
        className='hidden lg:inline-block'
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              damping: 10,
              stiffness: 100,
              ease: 'easeInOut',
              duration: 0.5,
              delay: 0.1
            }
          }
        }}
      />
      <Heading
        text='Who am I?'
        className='text-center md:text-left '
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              damping: 10,
              stiffness: 100,
              ease: 'easeInOut',
              duration: 0.5,
              delay: 0.2
            }
          }
        }}
      />
      <Paragraph
        className='text-balance w-[85%] mx-auto text-center md:w-full md:text-left'
        text="I'm Fai Bin Onayq— a passionate Computer Science graduate (1st in my class) driven by curiosity and a passion for building intelligent systems that solve real problems. My work bridges academic rigor and hands-on experience across AI, data science, full-stack development, and DevOps. "
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              damping: 10,
              stiffness: 100,
              ease: 'easeInOut',
              duration: 0.5,
              delay: 0.3
            }
          }
        }}
      />
      <Paragraph
        className='text-balance w-[85%] mx-auto text-center md:w-full md:text-left'
        text="I thrive where research meets engineering: from designing clean data pipelines and training deep learning models (in areas like computer vision and NLP) to developing and deploying full-stack web applications in the cloud. My work is guided by a simple belief: thoughtful, maintainable code should create real value for people."
        variants={{
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.4
      }
    }
  }}
      />
      <Paragraph
        className='text-balance w-[85%] mx-auto text-center md:w-full md:text-left'
        text="This mindset earned me first place in my college's software engineering competition and continue to guide me in turning innovative ideas into intuitive, impactful software."
        variants={{
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.5
      }
    }
  }}
      />
      <Paragraph
        className='text-balance w-[85%] mx-auto text-center md:w-full md:text-left'
        text="Beyond the code, I am lifelong learner at heart, I'm always exploring new tools and methodologies useful systems. because technology’s greatest power lies in how meaningfully it serves people."
        variants={{
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.5
      }
    }
  }}
      />
    </motion.div>
  )
}

export default About
