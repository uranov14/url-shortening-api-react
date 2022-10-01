import bgMobile from '../images/bg-boost-mobile.svg'
import bgDesktop from '../images/bg-boost-desktop.svg'

const Boost = () => {
  return (
    <>
        <section className='boost relative'>
            <picture>
                <source media='(min-width: 768px)' srcSet={bgDesktop} />
                <img src={bgMobile} alt='' />
            </picture>
            <div className='boost-inner flex items-center justify-center flex-col'>
                <h2 className='mb-5 text-2xl md:text-4xl text-white font-bold text-center'>
                  Boost your links today
                </h2>
                <button className='btn px-9 md:px-5 py-3 md:py-2 text-white rounded-full'>
                  Get Started
                </button>
            </div>
        </section>
    </>
  )
}

export default Boost