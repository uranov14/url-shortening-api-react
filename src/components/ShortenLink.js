import React, { useEffect, useState } from 'react'
import Link from './Link'

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

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links))
  })

  return (
    <section className='shortener -mb-56 md:mb-10 mx-auto w-10/12 md:w-full'>
      <form className='md:w-full' onSubmit={handleSubmit}>
        <div className='short-link flex flex-col md:flex-row justify-center p-5 md:p-9 rounded-lg w-full md:w-9/12 mx-auto'>
          <input
            id='shorten-link' 
            type='url' 
            name="textInput"
            placeholder='Shorten a link here...'
            value={text}
            className='py-3 pl-3 mb-2 md:mb-0 rounded-lg w-full md:w-9/12 md:mr-3'
            onChange={(e) => setText(e.target.value)}
          />
          <button 
            type='submit'
            className='btn p-3 mt-3 md:mt-0 rounded-lg text-white md:w-3/12'
            onClick={handleSubmit}
          >
            Shorten It!
          </button>
        </div>
      </form>

      {links.map(link => 
        <Link key={link.code} originLink={link.original_link} shortLink={link.full_short_link}/>
      )}

    </section>
  )
}

export default ShortenLink