import React, {useState} from 'react'

const Link = (props) => {
  const [buttonCopy, setButtonCopy] = useState("Copy")

  const handleCopy = () => {
    navigator.clipboard.writeText(props.shortLink)
    setButtonCopy('Copied!')
  }
    
  return (
    <div 
      className='flex flex-col md:flex-row justify-center md:justify-between items-center text-center bg-white md:px-3 mx-auto mt-5 md:w-9/12 rounded-lg shadow-lg'
    >
      <article>
        <h6 className='mb-3 md:mb-0'>Оригинальная ссылка: {props.originLink}</h6>
        <hr className='md:hidden w-full'/>
      </article>
        
      <article>
        <ul className='md:flex md:items-center py-2'>
          <li className='md:mr-5 pb-2 md:pb-0'>
          <button className='text-cyan-500'>Полная короткая ссылка: {props.shortLink}</button>
          </li>
          <li>
          <button 
              className='btn py-1 px-5 rounded-sm text-sm text-white w-full focus:bg-slate-800' 
              onClick={handleCopy}>
              {buttonCopy}
          </button>
          </li>
        </ul>
      </article>
    </div>
  )
}

export default Link