import React from 'react';
import '../../style/home.css';

import TextStyleComponent from './TextStyleComponent';
import InstructorImage from '../../assets/Images/Instructor.png';
import Btn from './Btn';
import { FiArrowRight } from 'react-icons/fi';

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-col md:flex-row gap-20 items-center'>

        <div className='w-full md:w-1/2'>
          <img src={InstructorImage} alt=""
            className='shadow-white instructor-img' />
        </div>

        <div className='w-full md:w-1/2 flex flex-col gap-10'>
          <div className='text-4xl font-semibold'>
            Our <TextStyleComponent content={'Instructor'} />
          </div>

          <p className='font-medium text-base md:text-lg'>
            Our dedicated team of passionate IoT enthusiasts is spearheading this project. Led by Dr. Basudeb Behera, our mission is to create a cutting-edge IoT web application that will revolutionize the way we interact with technology
          </p>

          <div className='w-fit'>
            <Btn link={'/signup'} active={true}>
              <div>
                More about Instructor
                <FiArrowRight />
              </div>
            </Btn>
          </div>
        </div>

      </div>
    </div>
  );
}

export default InstructorSection;
