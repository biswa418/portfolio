import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-center md:w-full z-10'>
            <div className='flex justify-between py-3 items-center w-4/5 max-[768px]:w-full max-[768px]:p-3'>
                <div className='flex items-center cursor-pointer' onClick={(e) => { e.preventDefault(); window.location.href = '#'; }}>
                    <img src='./images/white-logo.png' draggable='false' className='h-9 max-[768px]:mt-3' alt='logo' />
                    <p className='text-xl px-2 block w-full max-[768px]:hidden uppercase tracking-widest font-extrabold mon'> Biswajeet Sutar </p>
                </div>

                <ul className='flex max-[768px]:hidden'>
                    <li className='px-2 cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '#';
                    }}>Home</li>

                    <li className='px-2 cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '#experience';
                    }}>Experience</li>

                    <li className='px-2 cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '#projects';
                    }}>Projects</li>

                    <li className='px-2 cursor-pointer' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '#contact';
                    }}>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar