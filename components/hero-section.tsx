'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface UniqueHeroProps {
  subtitle?: string
  backgroundImage?: string
}

export const HeroSection = ({
  subtitle = 'Creating the future through thoughtful experiences',
  backgroundImage = '/hero.png',
}: UniqueHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null)
  const letters = 'UNICORE'.split('')

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      const heroElement = heroRef.current
      const letterElements = heroElement.querySelectorAll('.letter')
      const decorElements = heroElement.querySelectorAll('.decor-element')

      letterElements.forEach((el, index) => {
        const speed = 0.15 + (index % 3) * 0.05
        const yPos = scrollY * speed
        ;(el as HTMLElement).style.transform = `translateY(${yPos}px)`
      })

      decorElements.forEach((el, index) => {
        const speed = 0.15 + index * 0.05
        const yPos = scrollY * speed
        const xPos = scrollY * (index % 2 === 0 ? 0.05 : -0.05)
        ;(el as HTMLElement).style.transform = `translate(${xPos}px, ${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={heroRef}
      className='relative w-full h-screen overflow-hidden flex items-center justify-center'
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.75)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      {/* Decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className='decor-element absolute rounded-full bg-white/10 backdrop-blur-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0.5] }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
            }}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${10 + i * 15}%`,
              left: `${(i % 2 === 0 ? 15 : 70) - i * 5}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* UNICORE title with special treatment */}
        <div className='relative mb-12 py-10'>
          <div className='flex justify-center items-center'>
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                className='letter relative inline-block'
                initial={{
                  opacity: 0,
                  y: 50 + (index % 3) * 20,
                  rotateZ: index % 2 === 0 ? -5 : 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateZ: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <span
                  className={`text-7xl md:text-9xl font-black tracking-tight ${
                    index === 3 ? 'text-[#e73f2f]' : 'text-white'
                  }`}
                  style={{
                    textShadow:
                      index === 3
                        ? '0 0 30px rgba(244,63,94,0.8)'
                        : '0 0 20px rgba(255,255,255,0.3)',
                    display: 'inline-block',
                    transform: `translateY(${
                      index % 2 === 0 ? '-5px' : '5px'
                    })`,
                  }}>
                  {letter}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Glowing line under the title */}
          <motion.div
            className='h-1 bg-gradient-to-r from-[#e73f2f] via-purple-500 to-blue-500 rounded-full mx-auto mt-6'
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '80%', opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              maxWidth: '500px',
              boxShadow: '0 0 20px rgba(244,63,94,0.6)',
            }}
          />
        </div>

        {/* Subtitle with reveal animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className='relative'>
          <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed'>
            {subtitle}
          </p>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className='mt-10'>
          <div className='relative inline-block group'>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-[#e73f2f] to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
            <button
              onClick={() => {
                const target = document.getElementById('features')
                target?.scrollIntoView({ behavior: 'smooth' })
              }}
              className='hover:cursor-pointer relative px-8 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600'>
              <span className='flex items-center space-x-3 pr-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-[#e73f2f] -rotate-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 002 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                  />
                </svg>
                <span className='text-gray-100 font-medium'>
                  Discover UNICORE
                </span>
              </span>
              <span className='pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200'>
                Learn more &rarr;
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent'></div>
    </div>
  )
}
