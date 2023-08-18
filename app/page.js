'use client'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
    AiFillTwitterCircle, 
    AiFillLinkedin, 
    AiFillGithub
  } from 'react-icons/ai'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'

import { useState } from 'react';

export default function Home() {
   const [darkMode, setDarkMode] = useState(false)

  return (
    <div  className={darkMode? "dark": ""}>
      <main className='bg-white px-3 md:px-20 lg:px-40 dark:bg-gray-900'> {/*bg is white, padding left&right is 10px*/}
      <section className=' min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>   {/* padding top and bottom, margin-bottom of 12 px, flex display, justify contents to space between*/}
          <h1 className='text-xl font-burtons dark:text-white'>developedByUzezi</h1>       {/*font size should be extra large*/}
          <ul className='flex items-center'>    {/* aligning items to the center*/}
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)} 
                className='text-2xl cursor-pointer'/>
            </li>    {/*cursor should be pointer*/}
            <li>
              <a 
                href="#"
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4'
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Godfrey Offeh</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Front End Developer</h3>
          <p 
            className='text-md py-5 leading-8
             text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
             Freelancer providing services for web development and design content needs. Join me down below and let us get you started!
          </p>
        </div>

        <div 
          className='text-5xl flex justify-center gap-16 
          py-3 text-gray-600'
        >
          <a href="https://twitter.com/pypper_" target='_blank'>
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.linkedin.com/m/in/godfrey-offeh-422992138" target='_blank'>
          <AiFillLinkedin />
          </a>
          <a href="https://github.com/Pyppersama" target='_blank'>
          <AiFillGithub />
          </a>
        </div>

        <div 
          className='relative mx-auto mt-20 mb-10 bg-gradient-to-b 
          from-teal-500 rounded-full w-80 h-80 overflow-hidden
          md:w-96 md:h-96'
        >
          <Image 
          alt=''
            src={deved}
            layout='fill'
            objectFit='cover'
          />
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl text-center py-1 dark:text-white'>Services I offer</h3>
          <p className='text-md text-center py-2 leading-8 text-gray-800 dark:text-white
                        md:text-xl  mx-auto'>
            As a front-end <span className="text-teal-500"> developer </span>
             and <span className="text-teal-500"> designer</span>,
            I offer from a wide range of services, including
             web development, programming and designing
          </p>
        </div>

        <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image 
            alt=''
              src={design}
              width={200}
              height={200}
              className='m-auto'
            />
            <h3 className='text-lg font-semibold pt-8 pb-2'>User Interface (UI) Design</h3>
            <p className='py-2'>Creating elegant UI designs suited for your needs 
              following core design theory.
            </p>
            <h4 className='py-4 text-teal-600'>UI Design tools I use</h4>
            <p className='text-gray-800 py-1'>Adobe Photoshop</p>
            <p className='text-gray-800 py-1'>Figma</p>
            <p className='text-gray-800 py-1'>Adobe XD</p>
          </div>
          
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image 
              alt=''
              src={code}
              width={100}
              height={100}
              className='m-auto'
            />
            <h3 className='text-lg font-semibold pt-8 pb-2 '>Web Development</h3>
            <p className='py-2'>Do you have an idea for your next great website? Let us make it a reality.
            </p>
            <h4 className='py-4 text-teal-600'>Web development tools I use</h4>
            <p className='text-gray-800 py-1'>Visual Studio Code</p>
            <p className='text-gray-800 py-1'>Git</p>
            <p className='text-gray-800 py-1'>GitHub</p>
            <p className='text-gray-800 py-1'>npm (Node Package Manager)</p>
            <p className='text-gray-800 py-1'>Chrome DevTools</p>
            <p className='text-gray-800 py-1'>Netlify</p>
          </div>
          
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image 
              alt=''
              src={consulting}
              width={300}
              height={300}
              className='m-auto'
            />
            <h3 className='text-lg font-semibold pt-8 pb-2'>Responsive Designs</h3>
            <p className='py-2'>Creating elegant designs and functionalities that look appealing and fluid on all devices.
            </p>
            <h4 className='py-4 text-teal-600'>Responsive Design tools I use</h4>
            <p className='text-gray-800 py-1'>BootStrap</p>
            <p className='text-gray-800 py-1'>Tailwind CSS</p>
            <p className='text-gray-800 py-1'>CSS Grid System</p>
            <p className='text-gray-800 py-1'>Media Queries</p>
          </div>
        </div>
      </section>

      <section>
        <div className='mt-10'>
          <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-white md:text-xl'>
          Welcome to my portfolio showcasing a collection of projects that reflect my passion 
          for web <span className='text-teal-500'>development</span> and 
          <span className='text-teal-500'> design</span>. Through these projects, I have harnessed my skills to create dynamic and user-centered digital experiences. 
          </p>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-white md:text-xl'>
          My goal is to bring ideas to life and elevate user interactions. Explore the various 
          projects below to witness the synergy of coding expertise, design sensibilities, and innovation.
          </p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 border border-cyan-300 rounded-lg'>
              <a href="https://617738f2.real-estate-react-cg6.pages.dev/" target="_blank">
              <Image src={web1} 
                alt=''
                className='rounded-lg object-cover' 
                width={'100%'} 
                height={'100%'} 
                layout='responsive'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 border border-cyan-300 rounded-lg'>
              <a href="https://pypper-tech-shop.pages.dev/" target="_blank">
              <Image src={web2} 
                alt=''
                className='rounded-lg object-cover' 
                width={'100%'} 
                height={'100%'} 
                layout='responsive'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 border border-cyan-300 rounded-lg'>
              <a href="https://pyppersama.github.io/Team_5-_Terra_Developers/" target="_blank">
              <Image src={web3} 
                alt=''
                className='rounded-lg object-cover' 
                width={'100%'} 
                height={'100%'} 
                layout='responsive'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 border border-cyan-500 rounded-lg'>
              <a href="https://react-pypper-pizza.pages.dev/" target="_blank">
                <Image src={web4} 
                  alt=''
                  className='rounded-lg object-cover' 
                  width={'100%'} 
                  height={'100%'} 
                  layout='responsive'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 border border-cyan-500 rounded-lg'>
              <a href="https://pyppersama.github.io/online-code-editor/" target="_blank">
              <Image src={web5} 
                alt=''
                className='rounded-lg object-cover' 
                width={'100%'} 
                height={'100%'} 
                layout='responsive'/>
              </a>
            </div>
            <div className='basis-1/3 flex-1 border border-cyan-500 rounded-lg'>
              <a href="https://pyppersama.github.io/simple-react-calculator/" target="_blank">
              <Image src={web6} 
                alt=''
              className='rounded-lg object-cover' 
              width={'100%'} 
              height={'100%'} 
              layout='responsive'/>
              </a>
            </div>
        </div>
      </section>
    </main>
   </div>
    
  )
}
