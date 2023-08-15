import Link from 'next/link'
import React from 'react'
import { Button } from '../index';

export const Header = () => {
  return (
    <div className='bg-white'>
      <div className='container flex h-20 justify-between items-center'>
        <Link href="/">
          <img src="/logo.svg" alt="flowbusiness" />
        </Link>
        <ul>
          <li>
            <Link href="/about">About us</Link>
          </li>
        </ul>
        <Button label='Get a quote' size='big' />
      </div>
    </div>
  )
}