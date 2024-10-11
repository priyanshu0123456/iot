import React from 'react';
import Btn from './Btn';
import { TypeAnimation } from 'react-type-animation';

const CodeBlock = ({ position, heading, subheading, btn1, btn2, code, codeColor }) => {
  return (
    <div className={`flex flex-col lg:flex-row my-20 justify-between gap-10`}>

      {/* section1 */}
      <div className='w-full lg:w-1/2 flex flex-col gap-8'>
        {heading}

        <div className='text-richblack-300 font-bold'>
          {subheading}
        </div>

        <div className='flex flex-col lg:flex-row gap-4 mt-7'>
          <Btn active={btn1.active} link={btn1.link}>{btn1.content}</Btn>
          <Btn active={btn2.active} link={btn2.link}>{btn2.content}</Btn>
        </div>

      </div>

      {/* section2 */}
      <div className='h-auto lg:h-fit flex flex-row text-base lg:text-lg w-full lg:w-[500px] py-4' >
        {/* for the indexing */}
        <div className='text-center flex flex-col w-1/12 lg:w-1/6 text-richblack-400 font-inter font-bold'>
          {Array.from({ length: 19 }, (_, index) => (
            <p key={index}>{index + 1}</p>
          ))}
        </div>

        {/* for typing the code */}
        <div className={`w-11/12 lg:w-5/6 flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`} >
          <TypeAnimation
            sequence={[code, 3000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: 'block'
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
}

export default CodeBlock;
