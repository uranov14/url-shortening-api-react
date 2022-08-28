import React from 'react'

const ShortenLink = () => {
  return (
    <>
        <section className='relative top-20 md:top-11 flex justify-center'>
            <div className='short-link flex flex-col md:flex-row justify-center p-5 mx-7 rounded-lg w-full md:w-9/12'>
                <input
                    id='shorten-link' 
                    type='text' 
                    name="textInput"
                    placeholder='   Shorten a link here...'
                    className='py-3 mb-2 md:mb-0 rounded-lg w-full md:w-9/12 md:mr-3'
                />
                <button className='btn px-5 py-3 mt-3 md:mt-0 rounded-lg text-white'>Shorten It!</button>
            </div>
        </section>
    </>
  )
}

export default ShortenLink