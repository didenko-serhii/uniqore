import React from 'react'
import Link from 'next/link'
import { SparkleIcon, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export const HeroSection = () => {
  return (
    <>
      <main className='overflow-hidden'>
        <div
          aria-hidden
          className='absolute inset-0 isolate hidden opacity-65 contain-strict lg:block'>
          <div className='w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]' />
          <div className='h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]' />
          <div className='h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]' />
        </div>
        <section>
          <div className='relative pt-24 md:pt-36'>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className='absolute inset-0 -z-20'>
              <Image
                src='https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605538/night-background_ni3vqb.jpg'
                alt='background'
                className='absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block'
                width='3276'
                height='4095'
              />
            </AnimatedGroup>
            <div className='absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]'></div>
            <div className='mx-auto max-w-7xl px-6'>
              <div className='text-center sm:mx-auto lg:mr-auto lg:mt-0'>
                <AnimatedGroup variants={transitionVariants}>
                  <span className='hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950'>
                    <span className='text-foreground text-sm'>
                      University in your phone
                    </span>
                    <span className='dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700'></span>

                    <div className='bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500'>
                      <div className='flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0'>
                        <span className='flex size-6'>
                          <Sparkles className='m-auto size-3' />
                        </span>
                        <span className='flex size-6'>
                          <SparkleIcon className='m-auto size-3' />
                        </span>
                      </div>
                    </div>
                  </span>
                </AnimatedGroup>

                <TextEffect
                  preset='fade-in-blur'
                  speedSegment={0.3}
                  as='h1'
                  className='mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]'>
                  Centria Hub
                </TextEffect>
                <TextEffect
                  per='line'
                  preset='fade-in-blur'
                  speedSegment={0.3}
                  delay={0.5}
                  as='p'
                  className='mx-auto mt-8 max-w-2xl text-balance text-lg'>
                  Centralized platform for accessing news, events, and articles
                  - connecting the entire Centria community in one place.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className='mt-12 flex flex-col items-center justify-center gap-2 md:flex-row'>
                  <div
                    key={1}
                    className='bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5'>
                    <Button
                      asChild
                      size='lg'
                      className='rounded-xl px-5 text-base'>
                      <Link href='/news'>
                        <span className='text-nowrap'>latest news</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size='lg'
                    variant='ghost'
                    className='h-10.5 rounded-xl px-5'>
                    <Link href='#link'>
                      <span className='text-nowrap'>recent events</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}>
              <div className='relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20'>
                <div
                  aria-hidden
                  className='bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%'
                />
                <div className='inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1'>
                  <Image
                    className='bg-background aspect-15/8 relative hidden rounded-2xl dark:block'
                    src='/hero.png'
                    alt='app screen'
                    width='2700'
                    height='1440'
                  />
                  <Image
                    className='z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden'
                    src='/hero.png'
                    alt='app screen'
                    width='2700'
                    height='1440'
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  )
}
