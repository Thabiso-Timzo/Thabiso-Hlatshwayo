import Link from 'next/link'
import React, { useEffect, useState} from 'react'
import { IoIosArrowDropupCircle, IoIosArrowForward  } from 'react-icons/io'

const Footer = () => {
  const [toTop, setToTop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setToTop(true)
      } else {
        setToTop(false)
      }
    }) 
  },[])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    })
  }

  return (
    <div className={'mt-10'}>
        <div className={'flex justify-center py-12'}>
          {toTop && (
            <div onClick={scrollUp} className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
              <IoIosArrowDropupCircle size={30}/>
            </div>
          )}
        </div>
        <footer className={'bg-gray-900'}>
         <div className={'p-10 bg-gray-800 text-gray-200 '}>
          <div className={'max-w-7xl mx-auto'}>
            <div className={'gid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 flex justify-center'}>
              <div className={'mb-5'}>
                <h5 className='text-2xl pb-4'>Links</h5>
                <ul>
                  <li>
                    <Link href={'/'}>
                      <div className={'flex'}>
                        <IoIosArrowForward className={'mr-2'}/>
                        <p>Home</p>
                      </div>
                      </Link>
                  </li>
                  <li>
                    <Link href={'/about'}>
                      <div className={'flex'}>
                        <IoIosArrowForward className={'mr-2'} />
                        <p>About</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/skills'}>
                      <div className={'flex'}>
                        <IoIosArrowForward className={'mr-2'}/>
                        <p>Skills</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/projects'}>
                      <div className={'flex'}>    
                        <IoIosArrowForward className={'mr-2'}/>
                        <p>Projects</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/contact'}>
                    <div className={'flex'}>    
                        <IoIosArrowForward className={'mr-2'}/>
                        <p>Contact</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={'mb-5'}>
                <h5 className='text-2xl pb-4'>Project link</h5>
                <ul>
                  <li>
                    <Link href={'/projects/contacts'}>
                    <div className={'flex'}>    
                        <IoIosArrowForward className={'mr-2'}/>
                        <p>Contact</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/projects/fyur'}>
                      <div className={'flex'}>    
                        <IoIosArrowForward className={'mr-2'}/>
                        <p>Fyur</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/projects/gude'}>
                      <div className={'flex'}>    
                        <IoIosArrowForward className={'mr-2'}/>
                        <p>Gude</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/projects/movie'}>
                      <div className={'flex'}>    
                        <IoIosArrowForward className={'mr-2'}/>
                        <p>Movie</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/projects/smt'}>
                      <div className={'flex'}>    
                        <IoIosArrowForward className={'mr-2'}/>
                        <p>SMT</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/projects/thabiso'}>
                      <div className={'flex'}>    
                        <IoIosArrowForward className={'mr-2'}/>
                        <p>Thabiso</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/projects/trivia'}>
                      <div className={'flex'}>    
                        <IoIosArrowForward className={'mr-2'}/>
                        <p>Trivia</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={'mb-5'}>
                <h5 className='text-2xl pb-4'>My services</h5>
                <ul>
                  <li>Software engineering</li>
                  <li>Full stack development</li>
                  <li>Front-end development</li>
                  <li>Back-end development</li>
                  <li>UX/UI design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={'w-full bg-black text-white px-10 p-5'}>
          <div className={'text-center'}>
            <p>Copyright © {new Date().getFullYear()} Thabiso Hlatshwayo</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer