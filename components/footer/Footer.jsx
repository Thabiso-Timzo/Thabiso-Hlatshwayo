import { Link } from 'next/link'
import React from 'react'
import { IoIosArrowDropupCircle  } from 'react-icons/io'

const Footer = () => {
  return (
    <div>
        <div className={'flex justify-center py-12'}>
            <Link href='/' >
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                    <IoIosArrowDropupCircle size={30}/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Footer