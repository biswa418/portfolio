import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='flex justify-center md:w-full'>
            <div className='flex justify-between py-3 items-center w-3/4 max-[768px]:w-full max-[768px]:p-3'>
                <div className='flex items-center'>
                    <img src='./images/white-logo.png' className='h-9' alt='logo' />
                    <p className='text-xl px-2 block w-full max-[768px]:hidden'> Biswajeet Sutar </p>
                </div>

                <ul className='flex max-[768px]:hidden'>
                    <li className='px-2 cursor-pointer'>Home</li>
                    <li className='px-2 cursor-pointer'>Experience</li>
                    <li className='px-2 cursor-pointer'>Projects</li>
                    <li className='px-2 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar