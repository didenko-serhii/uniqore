export const ContentSection = () => {
  return (
    <section className='py-16 md:py-32'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
          <h2 className='text-4xl font-medium'>What is Uniqore</h2>
          <div className='space-y-6'>
            <p>
              Uniqore is a centralized digital platform designed to integrate
              and simplify access to university resources including news,
              events, articles, and internal announcements. It enhances
              communication, collaboration, and engagement across students,
              staff, and faculty in universities across Finland and beyond.
            </p>
          </div>
          <h2 className='text-4xl font-medium'>Mission</h2>
          <div className='space-y-6'>
            <p>
              To unify the university experience by providing a consistent and
              centralized platform for accessing academic resources. With
              increasing student mobility and academic exchange, many students
              struggle to find essential information across different systems.
              Uniqore aims to bridge that gap by offering a unified hub for
              news, events, and campus updates — making it easier for everyone
              to stay informed and engaged, no matter which university they
              belong to.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
