import brand from "../images/icon-brand-recognition.svg"
import records from '../images/icon-detailed-records.svg'
import fully from '../images/icon-fully-customizable.svg'

const Advanced = () => {
  return (
    <>
        <section className='advanced flex justify-center py-10 lg:py-20'>
          <div className="max-width">
            <div>
                <h2 className='text-center text-4xl text-slate-800 font-bold'>Advanced Statistics</h2>
                <p className='text-center mx-auto'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <article className="bg-white p-5 mb-10 lg:mb-20 rounded">
                <img src={brand} alt=""/>
                <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Brand Recognition</h3>
                <p className="text-sm">
                  Boost your brand recognition with each click. Generic links don’t 
                  mean a thing. Branded links help instil confidence in your content.
                </p>
              </article>

              <article className="bg-white p-5 mb-10 lg:mb-20 rounded">
                <img src={records} alt=""/>
                <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Detailed Records</h3>
                <p className="text-sm">
                  Gain insights into who is clicking your links. Knowing when and where 
                  people engage with your content helps inform better decisions.
                </p>
              </article>

              <article className="bg-white p-5 mb-10 lg:mb-20 rounded">
                <img src={fully} alt=""/>
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