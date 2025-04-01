import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export const Features = () => {
  return (
    <section className='bg-zinc-50 py-16 md:py-32 dark:bg-transparent'>
      <div className='@container mx-auto max-w-5xl px-6'>
        <div className='text-center'>
          <h2 className='text-balance text-4xl font-semibold lg:text-5xl'>
            Built to cover your needs
          </h2>
          <p className='mt-4'>What You Get with Centria Hub</p>
        </div>
        <div className='@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16'>
          <Card className='group shadow-zinc-950/5'>
            <CardHeader className='pb-3'>
              <CardDecorator>
                <Zap
                  className='size-6'
                  aria-hidden
                />
              </CardDecorator>

              <h3 className='mt-6 font-medium'>Real-time Updates</h3>
            </CardHeader>

            <CardContent>
              <p className='text-sm'>
                We provide the latest official announcements and important news
                from the university, always keeping the content up to date.
              </p>
            </CardContent>
          </Card>

          <Card className='group shadow-zinc-950/5'>
            <CardHeader className='pb-3'>
              <CardDecorator>
                <Settings2
                  className='size-6'
                  aria-hidden
                />
              </CardDecorator>

              <h3 className='mt-6 font-medium'>
                Filtering Information with Tags
              </h3>
            </CardHeader>

            <CardContent>
              <p className='mt-3 text-sm'>
                You can easily filter and display articles related to your
                interests by using the tags available on the site, making it
                faster to find relevant updates, news, or events that matter to
                you.
              </p>
            </CardContent>
          </Card>

          <Card className='group shadow-zinc-950/5'>
            <CardHeader className='pb-3'>
              <CardDecorator>
                <Sparkles
                  className='size-6'
                  aria-hidden
                />
              </CardDecorator>

              <h3 className='mt-6 font-medium'>verified information</h3>
            </CardHeader>

            <CardContent>
              <p className='mt-3 text-sm'>
                By creating an account and receiving approval from an
                administrator, you can submit articles. This feature also allows
                student organizations and club activities to share their
                information.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className='relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]'>
    <div
      aria-hidden
      className='absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]'
    />
    <div
      aria-hidden
      className='bg-radial to-background absolute inset-0 from-transparent to-75%'
    />
    <div className='bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t'>
      {children}
    </div>
  </div>
)
