import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'
import logo from '../images/footer-logo.svg'

const Footer = () => {
  return (
    <footer className='py-10 lg:py-20'>
        <div className='max-width grid grid-cols-1 gap-5 md:flex justify-between'>
            <article className='flex md:block justify-center'>
                <img src={logo} alt='' />
            </article>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <article>
                    <h3 className='text-white text-lg font-bold tracking-wide mb-2'>Features</h3>
                    <ul>
                        <li className='leading-8'>
                            <button className='text-sm mt-1'>
                                Link Shortening
                            </button>
                        </li>
                        <li className='leading-8'>
                            <button className='text-sm mt-1'>
                                Branded Links
                            </button>
                        </li>
                        <li className='leading-8'>
                            <button className='text-sm mt-1'>
                                Analytics
                            </button>
                        </li>
                    </ul>
                </article>

                <article>
                    <h3 className='text-white text-lg font-bold tracking-wide mb-2'>Resources</h3>
                    <ul>
                        <li className='leading-8'><button className='text-sm mt-1'>Blog</button></li>
                        <li className='leading-8'><button className='text-sm mt-1'>Developers</button></li>
                        <li className='leading-8'><button className='text-sm mt-1'>Support</button></li>
                    </ul>
                </article>

                <article>
                    <h3 className='text-white text-lg font-bold tracking-wide mb-2'>Company</h3>
                    <ul>
                        <li className='leading-8'><button className='text-sm mt-1'>About</button></li>
                        <li className='leading-8'><button className='text-sm mt-1'>Our Team</button></li>
                        <li className='leading-8'><button className='text-sm mt-1'>Careers</button></li>
                        <li className='leading-8'><button className='text-sm mt-1'>Contact</button></li>
                    </ul>
                </article>

                <article>
                    <ul className='flex md:grid grid-cols-4 gap-5 items-center justify-between mx-auto w-1/2 md:w-full'>
                        <li><img src={facebook} alt='' /></li>
                        <li><img src={twitter} alt='' /></li>
                        <li><img src={pinterest} alt='' /></li>
                        <li><img src={instagram} alt='' /></li>
                    </ul>
                </article>
            </div>
        </div>
    </footer>
  )
}

export default Footer