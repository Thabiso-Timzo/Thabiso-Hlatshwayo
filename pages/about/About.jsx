import React from 'react'

const About = () => {
  return (
    <div className={'w-full md:h-screen p-2 flex items-center py-16'}>
      <div className={'max-w-[1240] m-auto md:grid grid-cols-3 gap-8'}>
        <div className={'col-span-2'}>
          <p className={'uppercase text-xl tracking-widest text-[#D4AF37]'}>About Thabiso Hlatshwayo</p>
          <h2 className={'py-4'}>Who I am</h2>
          <p className={'py-2 text-gray-100'}>
            I have spent the last 9 years coding, I have started coding since grade 11 by designing web pages 
            using technologies such as HTML and CSS. I have an eager to learn different types of technologies.
            I always had an interest for technology and working with computers. After high school I started learning 
            my first ever programming (JavaScript) language. I integrate JavaScript into html for the first time
            just after 6 months into tertiary. That is how my love for programming started. 
          </p>
          <p className={'py-2 text-gray-100'}>
            After tertiary I joined a bootcamp (HyperionDev) where i was taught how to build softwares using Java and Python.
            I was fascinated with how programming can be I was quickly drawn to lean more. I did my internships at Addmore digital,
            We used MERN Stack to build different types of projects.
          </p>
        </div>
        <div className={'w-full h-auto shadow-xl shadow-black rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'}>
          <img className={'rounded-xl'} src="https://buildmypc.net/assets/images/builts/high-end-pc.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About