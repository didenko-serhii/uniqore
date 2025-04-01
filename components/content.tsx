export const ContentSection = () => {
  return (
    <section className='py-16 md:py-32'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
          <h2 className='text-4xl font-medium'>What is Centria Hub?</h2>
          <div className='space-y-6'>
            <p>
              Centria Hub is a centralized digital platform that integrates all
              university resources—news, events, articles, and emails—into one
              intuitive space. It enhances accessibility, collaboration, and
              engagement for students, staff, and faculty.
            </p>
          </div>
          <h2 className='text-4xl font-medium'>Mission</h2>
          <div className='space-y-6'>
            <p>
              To simplify access to university resources, improve communication,
              and create a more connected campus experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
