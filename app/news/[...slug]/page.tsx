'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function SinglePost() {
  const tags = ['Web Development', 'AI', 'Edge Computing']

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
          className='dark:bg-slate-900 bg-slate-100 rounded-lg shadow-xl p-6 md:p-8 lg:p-10'
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
              developer's arsenal. From code completion to automated testing, AI
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
              more reliable experiences. By processing data closer to where it's
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
