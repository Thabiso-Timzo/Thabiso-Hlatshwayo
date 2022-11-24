import React from 'react'
import Link from 'next/link'
import { 
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub,
    AiFillMail
} from 'react-icons/ai'

const Main = () => {
  return (
    <div className={'w-full h-screen text-center'}>
        <div className={'max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'}>
            <div className={''}>
                <p className={'uppercase text-sm tracking-widest text-[#D4AF37]'}>Dreams and teams work together.</p>
                <h1 className={'py-4 text-gray-300'}>
                    Hi, I am <span className={'text-[#D4AF37]'}>Thabiso Hlatshwayo</span>
                </h1>
                <h2 className={'py-4 text-gray-300'}>
                    A Full-Stack, Front-end, Back-end Developer 
                </h2>
                <p className={'py-4 text-gray-200 max-w-[70%] m-auto'}>
                    I am a developer creating awesome and effective projects for companies. 
                    start scrolling and learn more about me.
                </p>
                <div className={'flex items-center justify-between max-w-[330px] m-auto py-4'}>
                    <div className={'rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-75'}>
                        <Link href={'https://www.instagram.com/thabiso.timzo.dev/'}><AiFillInstagram size={20} /></Link>
                    </div>
                    <div className={'rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-75'}>
                        <Link href={'https://www.linkedin.com/in/thabiso-hlatshwayo-8a4079198/'}><AiFillLinkedin size={20} /></Link>
                    </div>
                    <div className={'rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-75'}>
                        <Link href={'https://github.com/Thabiso-Timzo'}><AiFillGithub size={20}/></Link>
                    </div>
                    <div className={'rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-75'}>
                        <Link href={'mailto:thabiso.hlatshwayo24@gmail.com'}><AiFillMail size={20}/></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main