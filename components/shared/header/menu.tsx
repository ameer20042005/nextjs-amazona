import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end text-black p-4 shadow-md'>
      <nav className='flex gap-4 w-full items-center'>
        <Link href='/signin' className='header-button flex items-center gap-2 text-white hover:text-gray-300 transition'>
          <UserIcon className='h-6 w-6 text-white' />
          <span className='font-semibold text-sm text-white'>Sign in</span>
        </Link>

        <Link href='/cart' className='header-button flex items-center gap-2 text-white hover:text-gray-300 transition'>
          <ShoppingCartIcon className='h-6 w-6 text-white' />
          <span className='font-semibold text-sm text-white'>Cart</span>
        </Link>
      </nav>
    </div>
  )
}