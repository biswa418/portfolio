import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
    const [hid, show] = useState(true);

    let state = hid ? 'invisible' : 'flex';

    return (
        <nav className='flex justify-center md:w-full z-10'>
            <div className='flex justify-between py-3 items-center w-4/5 max-[768px]:w-full max-[768px]:p-3'>
                <div className='flex items-center cursor-pointer' onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}>
                    <img src='./images/white-logo.png' draggable='false' className='h-9 max-[768px]:mt-3' alt='logo' />
                    <p className='text-xl px-2 block w-full max-[768px]:hidden uppercase tracking-widest font-extrabold mon'> Biswajeet Sutar </p>
                </div>

                <button className='md:hidden absolute z-20 right-5 top-5 py-2 text-2xl transition hover:-translate-x-1 ease-in-out duration-700' onClick={() => show(!hid)}>
                    {hid && <HiOutlineMenu />}
                    {!hid && <GrClose className='text-white bg-white' />}
                </button>

                <ul className={`${state} transition-opacity ease-in-out duration-700 z-10 md:visible md:flex md:flex-row flex-col justify-evenly items-center py-16 md:py-0 md:relative absolute md:right-0 right-0 h-full w-1/2 top-0 bg-slate-800 bg-opacity-50 backdrop-filter backdrop-brightness-40 backdrop-blur-xl backdrop-contrast-300 md:backdrop-filter-none md:bg-transparent md:h-min md:w-min`}>
                    <li className='px-2 cursor-pointer text-xl md:text-base' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '#';
                    }}>Home</li>

                    <li className='px-2 cursor-pointer text-xl md:text-base' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '#experience';
                    }}>Experience</li>

                    <li className='px-2 cursor-pointer text-xl md:text-base' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '#projects';
                    }}>Projects</li>

                    <li className='px-2 cursor-pointer text-xl md:text-base' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '#contact';
                    }}>Contact</li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar