import React from 'react'

import { Link, Navigate } from 'react-router-dom'
import { FiArrowRight } from "react-icons/fi";
import TextStyleComponent from '../component/Home/TextStyleComponent';
import Btn from '../component/Home/Btn';

import "../style/home.css" ;

import Banner from '../assets/Images/banner.mp4'
//import Banner from 'https://www.veed.io/embed/e9e494bd-a2c2-4132-a726-7918117f37b2'


import CodeBlock from '../component/Home/CodeBlock';

import InstructorSection from '../component/Home/InstructorSection';
import FooterForm from '../component/Home/Form';


export default function Home() {
    return (
        <div>
            {/* section1 */}

            <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
          text-white justify-between" >

                <Link to='/project'>
                    <div className=" group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit">
                        <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900">
                            <p>Explore Project</p>
                            <FiArrowRight />
                        </div>
                    </div>
                </Link>

                <div className="text-center text-4xl font-semibold mt-7">
                    Empower Your Future With<TextStyleComponent content={"different new iot project"} />
                </div>

                <div className=" mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
                Welcome to the electrifying world of the Internet of Things (IoT), where everyday objects transform into digital marvels! Imagine your home anticipating your needs, your car navigating seamlessly through traffic, and your city becoming smarter by the minute. IoT is the invisible thread that weaves our physical world into a digital tapestry, connecting everything from your morning coffee maker to the sprawling metropolis outside your window. In this exciting realm, data flows like electricity, empowering us to live more efficiently, sustainably, and securely. Buckle up as we embark on a journey through the pulsating heart of IoT innovation, where the future meets the present, and the possibilities are limitless
                </div>

                <div className='flex flex-row gap-7 mt-8'>
                    <Btn active={true} link={'/signup'} >Learn More</Btn>
                    <Btn active={false} link={'/project-demo'}>Project Demo</Btn>
                </div>


                <div className='mx-3 my-12 shadow-blue-200  video-shadow'>
                    <video muted loop autoPlay src={Banner}></video>
                </div>

                <div>
                    <CodeBlock position={"lg:flex-row"} heading={
                        <div className='text-4xl font-semibold' >
                             Make it Possible 
                            <TextStyleComponent content={'Using Iot'} />
                           
                        </div>
                    }

                        subheading={`Welcome to our IoT web application adventure! In this exciting endeavor, we're striving to build a powerful IoT web application that can seamlessly connect a wide range of IoT devices, including popular ones like ESP32, ESP8266, and Raspberry Pi modules, among others. What's more, we're here to demonstrate the incredible world of home automation using our very own website as the hub. Join us on this journey as we explore the potential of IoT and showcase how our web application can transform your home into a smart and efficient living space.`}

                        btn1={
                            {
                                content: 'Join with Us',
                                active: true,
                                link: '/signup',
                            }
                        }

                        btn2={
                            {
                                content: 'Explore our Project',
                                active: false,
                                link: '/login',
                            }
                        }

                        code={`
                              <!DOCTYPE html>
                              <html>
                              <head><title>Example</ title><linkrel="stylesheet"href="styles.css">
                              /head>
                              body>
                              h1><ahref="/">Header</a>
                              /h1>
                              nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a> 
                              /nav>
                           `}

                         codeColor={"text-yellow-25"}
                    />
                </div>


            </div>

            {/* section2 */}
            <div className='bg-pure-greys-5 text-richblack-700'>

                {/* code for explore full catalog and learn more button */}

                <div className='homepage_bg h-[310px]'>
                    <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                        <div className='h-[150px]'></div>
                        <div className='flex flex-row gap-7 text-white '>
                            <Btn active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3' >
                                    Explore Our Project
                                    <FiArrowRight />
                                </div>
                            </Btn>

                        </div>

                    </div>
                </div>


            </div>


            {/* section3 */}

           <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
              <InstructorSection />
            </div>


             <FooterForm />   
        </div>


    )
}
