import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import NavBar from '../components/nav-bar/NavBar'
import Footer from '../components/footer/Footer'

const Custom404 = () => {
  return (
    <>
        <Head>
            <title>404</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/logo.png" />
        </Head>
        <NavBar />
        <div className={'h-20'}></div>
        <div className={'flex items-center justify-center w-screen h-screen'}>
            <div className={'px-40 py-20 bg-white rounded-md shadow-xl'}>
                <div className={'flex flex-col items-center'}>
                    <h1 className={'font-bold text-[#3f51b5] text-9xl'}>404</h1>
                    <h6 className={'mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'}>
                        <span className={'text-red-500'}>Oops!</span> Page not found
                    </h6>
                    <p className={'mb-8 text-center text-gray-500 md:text-lg'}>The page you’re looking for doesn’t exist.</p>
                    <Link
                        href={'/'}
                        className={'px-6 py-2 text-sm font-semibold text-[#3f51b5] bg-blue-100'}
                    >
                        Go home
                    </Link>
                </div>
             </div>
        </div>
        <Footer />
    </>
  )
}

export default Custom404