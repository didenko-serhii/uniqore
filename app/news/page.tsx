'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronDown,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

type post = {
  id: number
  slug: string
  title: string
  image: string
  date: string
  tags: string[]
}

// Sample blog post data with slugs instead of IDs
const blogPosts: post[] = [
  {
    id: 1,
    slug: 'future-web-development-trends-2025',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    image: '/hero.png',
    date: '2025-04-09',
    tags: ['Web Development', 'AI', 'Edge Computing'],
  },
  {
    id: 2,
    slug: 'building-accessible-uis-best-practices',
    title: 'Building Accessible UIs: Best Practices for Inclusive Design',
    image: '/hero.png',
    date: '2025-03-22',
    tags: ['Accessibility', 'UI Design', 'Web Development'],
  },
  {
    id: 3,
    slug: 'rise-of-ai-powered-development-tools',
    title: 'The Rise of AI-Powered Development Tools',
    image: '/hero.png',
    date: '2025-03-15',
    tags: ['AI', 'Developer Tools', 'Productivity'],
  },
  {
    id: 4,
    slug: 'optimizing-performance-nextjs-applications',
    title: 'Optimizing Performance in Next.js Applications',
    image: '/hero.png',
    date: '2025-02-28',
    tags: ['Next.js', 'Performance', 'Web Development'],
  },
  {
    id: 5,
    slug: 'designing-for-dark-mode-tips-techniques',
    title: 'Designing for Dark Mode: Tips and Techniques',
    image: '/hero.png',
    date: '2025-02-14',
    tags: ['UI Design', 'Dark Mode', 'CSS'],
  },
  {
    id: 6,
    slug: 'state-of-typescript-2025',
    title: 'The State of TypeScript in 2025',
    image: '/hero.png',
    date: '2025-01-30',
    tags: ['TypeScript', 'JavaScript', 'Web Development'],
  },
  {
    id: 7,
    slug: 'mastering-css-grid-layout',
    title: 'Mastering CSS Grid Layout',
    image: '/hero.png',
    date: '2025-01-15',
    tags: ['CSS', 'Web Development', 'Layout'],
  },
  {
    id: 8,
    slug: 'introduction-web-animation-framer-motion',
    title: 'Introduction to Web Animation with Framer Motion',
    image: '/hero.png',
    date: '2024-12-20',
    tags: ['Animation', 'Framer Motion', 'React'],
  },
  {
    id: 9,
    slug: 'building-headless-cms-nextjs',
    title: 'Building a Headless CMS with Next.js',
    image: '/hero.png',
    date: '2024-12-05',
    tags: ['Next.js', 'CMS', 'Web Development'],
  },
  {
    id: 10,
    slug: 'complete-guide-web-accessibility',
    title: 'The Complete Guide to Web Accessibility',
    image: '/hero.png',
    date: '2024-11-22',
    tags: ['Accessibility', 'Web Development', 'UI Design'],
  },
  {
    id: 11,
    slug: 'understanding-web3-blockchain-technology',
    title: 'Understanding Web3 and Blockchain Technology',
    image: '/hero.png',
    date: '2024-11-10',
    tags: ['Web3', 'Blockchain', 'Technology'],
  },
  {
    id: 12,
    slug: 'responsive-design-2025-beyond-media-queries',
    title: 'Responsive Design in 2025: Beyond Media Queries',
    image: '/hero.png',
    date: '2024-10-28',
    tags: ['Responsive Design', 'CSS', 'Web Development'],
  },
  {
    id: 13,
    slug: 'server-components-future-of-react',
    title: 'Server Components: The Future of React',
    image: '/hero.png',
    date: '2024-10-15',
    tags: ['React', 'Server Components', 'Web Development'],
  },
  {
    id: 14,
    slug: 'micro-frontends-architecture-scalable-web-apps',
    title: 'Micro-Frontends: Architecture for Scalable Web Apps',
    image: '/hero.png',
    date: '2024-09-30',
    tags: ['Architecture', 'Micro-Frontends', 'Web Development'],
  },
  {
    id: 15,
    slug: 'evolution-javascript-frameworks',
    title: 'The Evolution of JavaScript Frameworks',
    image: '/hero.png',
    date: '2024-09-15',
    tags: ['JavaScript', 'Frameworks', 'Web Development'],
  },
  {
    id: 16,
    slug: 'building-realtime-applications-websockets',
    title: 'Building Real-time Applications with WebSockets',
    image: '/hero.png',
    date: '2024-08-28',
    tags: ['WebSockets', 'Real-time', 'Web Development'],
  },
  {
    id: 17,
    slug: 'progressive-web-apps-2025',
    title: 'Progressive Web Apps in 2025',
    image: '/hero.png',
    date: '2024-08-15',
    tags: ['PWA', 'Web Development', 'Mobile'],
  },
  {
    id: 18,
    slug: 'impact-ai-ux-design',
    title: 'The Impact of AI on UX Design',
    image: '/hero.png',
    date: '2024-07-30',
    tags: ['AI', 'UX Design', 'UI Design'],
  },
]

// Get all unique tags from blog posts
const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
).sort()

// Number of posts per page
const POSTS_PER_PAGE = 12

export default function News() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')
  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false)
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [displayedPosts, setDisplayedPosts] = useState<post[]>([])

  // Apply filters and sorting
  useEffect(() => {
    let result = [...blogPosts]

    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter((post) =>
        selectedTags.some((tag) => post.tags.includes(tag))
      )
    }

    // Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
    })

    setFilteredPosts(result)
    setTotalPages(Math.ceil(result.length / POSTS_PER_PAGE))
    setCurrentPage(1) // Reset to first page when filters change
  }, [selectedTags, sortOrder])

  // Update displayed posts when page or filtered posts change
  useEffect(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    setDisplayedPosts(filteredPosts.slice(startIndex, endIndex))
  }, [currentPage, filteredPosts])

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  // Clear all selected tags
  const clearTags = () => {
    setSelectedTags([])
  }

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')
  }

  // Pagination controls
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className='min-h-screen pt-24'>
      <div className='max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8'>
        {/* Filters */}
        <div className='dark:bg-slate-900 rounded-lg shadow-md p-4 mb-8'>
          <div className='flex flex-col sm:flex-row justify-between gap-4'>
            {/* Tag filter */}
            <div className='relative'>
              <button
                onClick={() => setIsTagDropdownOpen(!isTagDropdownOpen)}
                className='flex items-center justify-between w-full sm:w-64 px-4 py-2 text-sm font-medium  border border-gray-300 rounded-md shadow-sm dark:hover:bg-slate-700 hover:bg-slate-300 focus:outline-none'>
                <span>
                  {selectedTags.length === 0
                    ? 'Filter by tags'
                    : `${selectedTags.length} tag${
                        selectedTags.length > 1 ? 's' : ''
                      } selected`}
                </span>
                <ChevronDown className='ml-2 h-4 w-4' />
              </button>

              {isTagDropdownOpen && (
                <div className='absolute z-10 mt-1 w-full dark:bg-slate-900 bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  <div className='max-h-60 overflow-auto p-2'>
                    <div className='flex justify-between items-center mb-2 pb-2 border-b'>
                      <span className='text-sm font-medium '>Select tags</span>
                      {selectedTags.length > 0 && (
                        <button
                          onClick={clearTags}
                          className='text-xs text-rose-600 hover:text-rose-800'>
                          Clear all
                        </button>
                      )}
                    </div>
                    {allTags.map((tag) => (
                      <div
                        key={tag}
                        className='flex items-center px-2 py-1.5 dark:hover:bg-slate-700 hover:bg-slate-300 rounded-md'>
                        <input
                          id={`tag-${tag}`}
                          type='checkbox'
                          className='h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded'
                          checked={selectedTags.includes(tag)}
                          onChange={() => toggleTag(tag)}
                        />
                        <label
                          htmlFor={`tag-${tag}`}
                          className='ml-2 text-sm cursor-pointer w-full'>
                          {tag}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Date sort */}
            <button
              onClick={toggleSortOrder}
              className='flex items-center px-4 py-2 text-sm font-medium  border border-gray-300 rounded-md shadow-sm dark:hover:bg-slate-700 hover:bg-slate-300 focus:outline-none'>
              <Calendar className='mr-2 h-4 w-4' />
              {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
            </button>
          </div>

          {/* Selected tags display */}
          {selectedTags.length > 0 && (
            <div className='flex flex-wrap gap-2 mt-4'>
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800'>
                  {tag}
                  <button
                    type='button'
                    onClick={() => toggleTag(tag)}
                    className='ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-rose-400 hover:text-rose-600 focus:outline-none'>
                    <X className='h-3 w-3' />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Blog post cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {displayedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}>
              <Link
                href={`/post/${post.slug}`}
                className='block h-full'>
                <div className='relative rounded-lg overflow-hidden shadow-md h-64 hover:shadow-lg transition-shadow duration-300'>
                  {/* Full-size image background */}
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    fill
                    className='object-cover'
                  />

                  {/* Content overlay */}
                  <div className='absolute inset-0 flex flex-col justify-between p-4'>
                    {/* Top section with date and tags */}
                    <div className='flex flex-col gap-2'>
                      {/* Date */}
                      <div className='backdrop-blur-md bg-black/30 rounded-lg px-3 py-1 self-start'>
                        <span className='text-white text-sm'>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>

                      {/* Tags with blurred background */}
                      <div className='flex flex-wrap gap-2'>
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className='backdrop-blur-md bg-black/30 px-2 py-1 text-white text-xs rounded-full'>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title at the bottom with blurred background */}
                    <div className='backdrop-blur-md bg-black/30 rounded-lg p-3 mt-auto'>
                      <h2 className='text-white text-lg font-bold line-clamp-2'>
                        {post.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className='text-center py-12'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              No posts found
            </h3>
            <p className='text-gray-500'>
              Try adjusting your filters to find what you&apos;re looking for.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <div className='mt-12 flex justify-center'>
            <nav className='flex items-center gap-1'>
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className='p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'>
                <ChevronLeft className='h-5 w-5' />
              </button>

              <div className='flex items-center'>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 flex items-center justify-center rounded-md mx-1 ${
                        currentPage === page
                          ? 'bg-rose-600 text-white'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}>
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className='p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'>
                <ChevronRight className='h-5 w-5' />
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
