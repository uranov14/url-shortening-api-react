import React from 'react'
import illustrationWorking from "../images/illustration-working.svg"

const Showcase = () => {

  return (
    <>
        <section className='flex flex-col-reverse md:flex-row pl-5 -mb-5 md:-mb-36'>
            <article className='md:pl-24 md:ml-7 md:mt-12 mb-24 md:mb-0'>
                <h1 
                className='text-4xl md:text-5xl font-bold text-center md:text-left pt-2 my-3 md:mt-12 md:mb-1 -ml-5 md:ml-0'>
                    More than just shorter links
                </h1>
                <p className='text-center md:text-left pr-5 md:mb-7'>
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <div className='flex justify-center md:justify-start'>
                    <button className='btn px-12 md:px-6 py-3 lg:py-2 mt-5 mb-36 md:my-0 -ml-4 md:ml-0 text-white rounded-full'>
                        Get Started
                    </button>
                </div>
            </article>
            <article className='article-illustration pb-7 w-full'>
                <img src={illustrationWorking} alt='' className='illustration'/>
            </article>
        </section>
    </>
  )
}

export default Showcase