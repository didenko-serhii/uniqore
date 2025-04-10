'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Calendar, MapPin, DollarSign, Clock } from 'lucide-react'

export default function SinglePost() {
  const tags = ['Web Development', 'AI', 'Edge Computing']

  const eventDetails = {
    title: 'Future of Web Development Conference',
    location: 'Tech Hub, San Francisco, CA',
    price: '$199',
    date: 'May 15, 2025',
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    description:
      'Join us for a day of insights and discussions about the future of web development, featuring talks on AI-driven development, edge computing, and more.',
  }

  const generateGoogleCalendarUrl = () => {
    const startDate = new Date('May 15, 2025 09:00:00')
    const endDate = new Date('May 15, 2025 17:00:00')

    // Format dates for Google Calendar
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '')
    }

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: eventDetails.title,
      details: eventDetails.description,
      location: eventDetails.location,
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
    })

    return `https://calendar.google.com/calendar/render?${params.toString()}`
  }

  return (
    <main className='relative min-h-screen w-full'>
      <div className='relative w-full h-[70vh]'>
        <Image
          src='/hero.png'
          alt='Post featured image'
          fill
          priority
          className='object-cover blur-[8px]'
        />
        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6'>
          <div className='max-w-4xl w-full flex flex-col items-center gap-6'>
            {/* Breadcrumbs centered above the title */}
            <nav className='flex items-center text-sm text-white/90'>
              <Link
                href='/'
                className='hover:text-white transition-colors'>
                Home
              </Link>
              <ChevronRight className='h-4 w-4 mx-2' />
              <Link
                href='/blog'
                className='hover:text-white transition-colors'>
                Blog
              </Link>
              <ChevronRight className='h-4 w-4 mx-2' />
              <span className='text-white/70'>Current Post</span>
            </nav>

            {/* Title */}
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center'>
              The Future of Web Development: Trends to Watch in 2025
            </h1>

            {/* Posted date */}
            <div className='text-white/90 text-sm'>Posted on April 9, 2025</div>

            {/* Tags */}
            <div className='flex flex-wrap gap-2 justify-center'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className='px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white hover:bg-white/30 transition-colors cursor-pointer'>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content card that overlaps the image */}
      <div className='relative mx-auto max-w-4xl px-4 sm:px-6 -mt-24'>
        <motion.div
          className='dark:bg-slate-900 bg-slate-100 rounded-lg shadow-xl p-4 mb-4'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center text-sm '>
                <Calendar className='h-4 w-4 mr-2' />
                <span>{eventDetails.date}</span>
                <Clock className='h-4 w-4 ml-4 mr-2' />
                <span>
                  {eventDetails.startTime} - {eventDetails.endTime}
                </span>
              </div>
              <div className='flex items-center text-sm'>
                <MapPin className='h-4 w-4 mr-2' />
                <span>{eventDetails.location}</span>
              </div>
              <div className='flex items-center text-sm'>
                <DollarSign className='h-4 w-4 mr-2' />
                <span>{eventDetails.price}</span>
              </div>
            </div>
            <a
              href={generateGoogleCalendarUrl()}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center'>
              <Calendar className='h-4 w-4 mr-2' />
              Add to Calendar
            </a>
          </div>
        </motion.div>

        <motion.div
          className='dark:bg-slate-900 bg-slate-100 rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.15)] p-6 md:p-8 lg:p-10'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}>
          <div className='prose max-w-none'>
            <p className='lead text-lg  mb-6'>
              As we move further into 2025, the landscape of web development
              continues to evolve at a rapid pace. New technologies, frameworks,
              and methodologies are emerging, reshaping how we build and
              interact with the web.
            </p>

            <p>
              The past year has seen significant advancements in AI-assisted
              development, serverless architectures, and immersive web
              experiences. These innovations are not just changing how
              developers work but also transforming user expectations.
            </p>

            <h2 className='text-2xl font-bold mt-8 mb-4'>
              AI-Driven Development
            </h2>

            <p>
              Artificial intelligence has become an indispensable tool in a
              developer&apos;s arsenal. From code completion to automated testing, AI
              is streamlining workflows and boosting productivity. Tools like
              GitHub Copilot and v0 have evolved to understand context better,
              offering more accurate and relevant suggestions.
            </p>

            <p>
              But the real game-changer has been the rise of AI-powered design
              systems that can translate rough sketches or natural language
              descriptions into production-ready code. This has democratized web
              development, allowing non-technical stakeholders to participate
              more actively in the creation process.
            </p>

            <h2 className='text-2xl font-bold mt-8 mb-4'>
              The Rise of Edge Computing
            </h2>

            <p>
              Edge computing continues to gain momentum, with more applications
              leveraging the power of distributed computing to deliver faster,
              more reliable experiences. By processing data closer to where it&apos;s
              needed, edge functions reduce latency and improve performance,
              especially for global audiences.
            </p>

            <p>
              Frameworks like Next.js have embraced this paradigm, making it
              easier than ever to deploy code to the edge. This shift has
              particularly benefited e-commerce and media sites, where
              milliseconds can make the difference between conversion and
              abandonment.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
