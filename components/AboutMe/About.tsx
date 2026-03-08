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
        text="I'm Fai AlOnayq, a Computer Science graduate from Imam Mohammad Ibn Saud Islamic University, where I graduated First in Batch. I don't just study technology — I build with it. "
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
        text="My work spans the full stack: designing RESTful APIs, developing web and mobile applications, deploying 
        services on the cloud, and integrating AI-driven features that solve real problems. Alongside that, I have a 
        strong foundation in AI, covering machine learning, computer vision, NLP, and the full model lifecycle from data preparation to deployment. I operate across Python, FastAPI, Node.js, React, and Google Cloud Platform — equally comfortable in data pipelines, ML workflows, and frontend interfaces."
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
        text="My work is guided by a simple belief: thoughtful, maintainable code should create real value for people. This mindset earned me won in my college's software engineering competition and continue to guide me in turning innovative ideas into intuitive, impactful software."
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
        text="Beyond the code, I am lifelong learner, I'm always exploring new tools and methodologies useful systems. because technology’s greatest power lies in how meaningfully it serves people."
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
