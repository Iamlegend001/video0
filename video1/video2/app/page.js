import Image from 'next/image'
import React from 'react'
import speaker from './speaker.avif'

const page = () => {
  return (
    <div>
      <Image
        src={speaker}
        width={600}
        height={400}
        alt="Picture of the author"
      />
     
    </div>
  )
}

export default page