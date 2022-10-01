import brand from "../images/icon-brand-recognition.svg"
import records from '../images/icon-detailed-records.svg'
import fully from '../images/icon-fully-customizable.svg'

const Advanced = () => {
  return (
    <>
        <section className='advanced flex justify-center pt-32 pb-10 lg:py-20'>
          <div className="max-width">
            <div className="mt-24 md:mt-10 mb-16">
                <h2 className='text-center text-2xl md:text-4xl text-slate-800 mb-3 font-bold'>
                  Advanced Statistics
                </h2>
                <p className='text-center mb-10 lg:mb-20 md:mx-60'>
                  Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>
            <div className="cards relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="line"></div>
              <article className="relative bg-white p-5 mb-10 lg:mb-20 rounded">
                <img src={brand} alt="" className="mx-auto md:ml-0 p-5 -mt-14 bg-slate-800 rounded-full"/>
                <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Brand Recognition</h3>
                <p className="text-sm"> 
                  Boost your brand recognition with each click. Generic links don’t 
                  mean a thing. Branded links help instil confidence in your content.
                </p>
              </article>

              <article className="relative bg-white p-5 mb-10 lg:mb-20 rounded">
                <img src={records} alt="" className="mx-auto md:ml-0 p-5 -mt-14 bg-slate-800 rounded-full"/>
                <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Detailed Records</h3>
                <p className="text-sm">
                  Gain insights into who is clicking your links. Knowing when and where 
                  people engage with your content helps inform better decisions.
                </p>
              </article>

              <article className="relative bg-white p-5 mb-10 lg:mb-20 rounded">
                <img src={fully} alt="" className="mx-auto md:ml-0 p-5 -mt-14 bg-slate-800 rounded-full"/>
                <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Fully Customizable</h3>
                <p className="text-sm">
                  Improve brand awareness and content discoverability through customizable 
                  links, supercharging audience engagement.
                </p>
              </article>
            </div>
          </div>
        </section>
    </>
  )
}

export default Advanced