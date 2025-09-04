import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h6>About page</h6>
      <div className='flex gap-5'>
      <Link href="/about/mission">Mission</Link>
      <Link href="/about/team">Team</Link>
      </div>
    </div>
  )
}

export default page