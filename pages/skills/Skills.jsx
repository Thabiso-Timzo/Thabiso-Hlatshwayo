import React from 'react'

import HTML from '../../components/html/HTML'
import CSS from '../../components/css/CSS'
import JavaScript from '../../components/javascript/JavaScript'
import Git from '../../components/git/Git'
import GitHub from '../../components/github/GitHub'
import ReactJS from '../../components/react/React'
import NextJS from '../../components/next/NextJS'
import Python from '../../components/python/Python'
import Redux from '../../components/redux/Redux'
import Flask from '../../components/flask/Flask'
import NodeJSX from '../../components/node/Node'
import ExpressJS from '../../components/express/ExpressJS'
import Mongo from '../../components/mongo/Mongo'
import MySQL from '../../components/mysql/MySQL'
import PostgreSQL from '../../components/postgresql/PostgreSQL'
import Tailwind from '../../components/tailwind/Tailwind'
import Amazon from '../../components/amazon/Amazon'
import Docker from '../../components/docker/Docker'

const Skills = () => {
  return (
    <div className={'w-full lg:h-screen p-2'}>
      <div className={'max-w-[1240px] flex flex-col justify-center h-full'}>
        <p className={'text-xl tracking-widest uppercase text-[#D4AF37]'}>Skills</p>
        <h2 className={'py-4'}>What I can do</h2>
        <div className={'grid md:grid-cols-2 lg:grid-cols-4 gap-8'}>
          <HTML />
          <CSS />
          <JavaScript />
          <Git />
          <GitHub />
          <ReactJS />
          <NextJS />
          <Python />
          <Redux />
          <Flask />
          <NodeJSX />
          <ExpressJS />
          <Mongo />
          <MySQL />
          <PostgreSQL />
          <Tailwind />
          <Amazon />
          <Docker />
        </div>
      </div>
    </div>
  )
}

export default Skills