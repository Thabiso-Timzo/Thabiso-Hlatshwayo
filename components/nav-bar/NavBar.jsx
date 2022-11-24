import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AiOutlineClose, 
  AiOutlineMenu, 
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillMail
} from 'react-icons/ai'

import logo from '../../public/assets/logo/logo.png'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div 
      className={'fixed w-full h-[60px] shadow-xl z-[100]'}> 
      <div 
        className={'flex justify-between items-center w-full h-full px-2 2xl:px-16'}>
        <Image 
          src={logo} 
          alt='' 
          width={'125'} 
          height={'50'}
        />
        <div>
          <ul className={'hidden md:flex'}>
            <Link href={'/'}>
              <li className={'ml-10 text-sm uppercase hover:border-b'}>Home</li>
            </Link>
            <Link href={'/'}>
              <li className={'ml-10 text-sm uppercase hover:border-b'}>About</li>
            </Link>
            <Link href={'/'}>
              <li className={'ml-10 text-sm uppercase hover:border-b'}>Skills</li>
            </Link>
            <Link href={'/'}>
              <li className={'ml-10 text-sm uppercase hover:border-b'}>Projects</li>
            </Link>
            <Link href={'/'}>
              <li className={'ml-10 text-sm uppercase hover:border-b'}>Contact</li>
            </Link>
          </ul>
          <div className={'md:hidden'} onClick={handleNav}>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav 
          ? 'fixed left-0 w-[75%] sm:[60%] md:w-[45%] h-screen bg-red-500 p-10 ease-in duration-500' 
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className="">
            <div className={'flex w-full items-center justify-between'}>
              <Image 
                src={'/../public/assets/logo/logo.png'} 
                alt='' 
                width={'100'} 
                height={'50'}
              />
              <div onClick={handleNav} className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer'}>
                <AiOutlineClose size={25} />
              </div>
              </div>
              <div className={'border-b border-grey-300 my-4'}>
                <p className={'w-[85%] md:w-[90%] py-4'}>Dreams and teams work together.</p>
              </div>
            </div>
            <div className={'py-4 flex flex-col'}>
              <ul className='uppercase'>
                <Link href={'/'}>
                  <li className={'py-4 text-sm'}>Home</li>
                </Link>
                <Link href={'/'}>
                  <li className={'py-4 text-sm'}>About</li>
                </Link>
                <Link href={'/'}>
                  <li className={'py-4 text-sm'}>Skills</li>
                </Link>
                <Link href={'/'}>
                  <li className={'py-4 text-sm'}>Projects</li>
                </Link>
                <Link href={'/'}>
                  <li className={'py-4 text-sm'}>Contact</li>
                </Link>
              </ul> 
            </div>
            <div className={'pt-4'}>
              <p className={'uppercase tracking-widest text-[#D4AF37]'}>Let's connect</p>
              <div className={'flex items-center justify-between my-4 w-full sm:w-[80%]'}>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link href={'https://www.instagram.com/thabiso.timzo.dev/'}><AiFillInstagram size={20} /></Link>
                </div>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link href={'https://www.linkedin.com/in/thabiso-hlatshwayo-8a4079198/'}><AiFillLinkedin size={20} /></Link>
                </div>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link href={'https://github.com/Thabiso-Timzo'}><AiFillGithub size={20}/></Link>
                </div>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link href={'mailto:thabiso.hlatshwayo24@gmail.com'}><AiFillMail size={20}/></Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar