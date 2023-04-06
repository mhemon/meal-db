import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import startAnimation from '../assets/start.json'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

const Home = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <div>
            <p className='badge'>On Sale!</p>
          </div>
          {/* <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
          A foodie tastes a <br className='hidden md:block' /> thousand flavors{' '}
            <span className='inline-block text-blue-400'>before he dines</span>
          </h2> */}
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
          Flavors beyond <br className='hidden md:block' /> imagination{' '}
            <span className='inline-block text-blue-400'>explore now</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
          Discover the magic of food with us. We inspire and empower food lovers to explore new flavors, techniques, and cuisines. Join our culinary journey now.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <Link to='/restaurant' className='btn md:w-auto md:mr-4'>
            <div className='inline-flex items-center justify-center w-full h-full'>
              <p className='mr-3'>Visit Restaurant</p>
              <PaperAirplaneIcon className='w-5 text-gray-100' />
            </div>
          </Link>
          <Link
            to='/about'
            className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={startAnimation} loop={true} />
        </div>
      </div>
    </div>
    );
};

export default Home;