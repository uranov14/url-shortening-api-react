import React, { useEffect, useState } from 'react'

const getLocalStorage = () => {
  let links = localStorage.getItem('links')

  if (links) {
    return JSON.parse(links)
  } else {
    return []
  }
}

// https://api.shrtco.de/v2/shorten?url=${textUrl}
const ShortenLink = () => {
  const [text, setText] = useState("")
  const [links, setLinks] = useState(getLocalStorage())
  const [buttonCopy, setButtonCopy] = useState("Copy")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!text) {
      alert('Input is empty')
    } else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const data = await res.json()
        setLinks([...links, data.result])
        setText("")
        console.log(links)
      }

      shortenLink()
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link)
    setButtonCopy('Copied!')
  }

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links))
  })

  return (
    <>
      <section className='shortener flex justify-center flex-col mb-10 mx-auto w-10/12 md:w-full'>
        <form className='md:w-full' onSubmit={handleSubmit}>
          <div className='short-link flex flex-col md:flex-row justify-center p-5 rounded-lg w-full md:w-9/12 mx-auto'>
            <input
              id='shorten-link' 
              type='url' 
              name="textInput"
              placeholder='Shorten a link here...'
              value={text}
              className='py-3 pl-3 mb-2 md:mb-0 rounded-lg w-full md:w-10/12 md:mr-3'
              onChange={(e) => setText(e.target.value)}
            />
            <button 
              type='submit'
              className='btn px-5 py-3 mt-3 md:mt-0 rounded-lg text-white'
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
        </form>

        {links.map(link => 
          <div 
            key={link.code}
            className='flex flex-col md:flex-row justify-center md:justify-between items-center text-center bg-white md:px-3 mx-auto mt-5 md:w-9/12 rounded-lg shadow-lg'
          >
            <article>
              <h6 className='mb-3 md:mb-0'>Полная короткая ссылка: {link.original_link}</h6>
              <hr className='md:hidden w-full'/>
            </article>
            
            <article>
              <ul className='md:flex md:items-center py-2'>
                <li className='md:mr-5 pb-2 md:pb-0'>
                  <button className='text-cyan-500'>{link.full_short_link}</button>
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
        )}
  
      </section>
    </> 
  )
}

export default ShortenLink