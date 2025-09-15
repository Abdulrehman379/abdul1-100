import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-center gap-6 p-4 bg-gray-200 font-bold text-lg">
      <Link href="/">Home Page</Link>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact Page</Link>
    </div>
  )
}

export default Navbar
