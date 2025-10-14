export default function StatsSection() {
  return (
    <section className='py-4 md:py-8 mb-5 md:mb-10'>
      <div className='mx-auto max-w-5xl space-y-4 px-6 md:space-y-6'>
        <div className='relative z-10 mx-auto max-w-6xl space-y-2 text-center'>
          <h2 className='text-display-sm font-bold lg:text-display-xl'>
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className='text-base-400'>
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>

        <div className='grid gap-12 mt-15 divide-y-2 text-center md*:text-center md:grid-cols-4 md:gap-2 md:divide-x-2 md:divide-y-0'>
          <div className='space-y-4'>
            <div className='text-5xl font-bold text-primary'>50+</div>
            <p>Projects Delivered</p>
          </div>
          <div className='space-y-4'>
            <div className='text-5xl font-bold text-primary'>5+</div>
            <p>Years of Experience</p>
          </div>
          <div className='space-y-4'>
            <div className='text-5xl font-bold text-primary'>10+</div>
            <p>Industry Awards Won</p>
          </div>
          <div className='space-y-4'>
            <div className='text-5xl font-bold text-primary'>100%</div>
            <p>Client Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
