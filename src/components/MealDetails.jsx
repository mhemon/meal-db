import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const MealDetails = () => {
    const singleMeal = useLoaderData()
    const { idMeal, strArea, strCategory, strInstructions, strMeal, strMealThumb, strSource, strYoutube } = singleMeal.meals[0]

    const [fold, setFold] = useState(true)
    return (
        <div>
            <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
                {/* Image Container */}
                <div className=' lg:w-1/2 h-full'>
                    <img
                        src={strMealThumb}
                        alt='food pic'
                        className='object-cover w-full  lg:h-full'
                    />
                </div>
                {/* Details Container */}
                <div className=' p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
                    <div>
                        <p className='badge'>Brand new</p>
                    </div>
                    <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
                        {strMeal}
                    </h5>
                    <p className=' text-gray-900'>Area: {strArea.substring(0, 50)}</p>
                    <p className=' text-gray-900'>Category: {strCategory}</p>
                    <p className=' text-gray-900'>Meal ID: {idMeal}</p>
                    <p className='mb-5 text-gray-900'>Source: <a href={strSource} target="_blank" className='text-blue-600'>Links</a> </p>
                    {fold ? (
                        <>
                            <p className=' text-gray-500'>{strInstructions.substring(0, 100)}.....</p>
                            <span
                                className='cursor-pointer text-blue-600 '
                                onClick={() => setFold(!fold)}
                            >
                                Read More
                            </span>
                        </>
                    ) : (
                        <>
                            <p className=' text-gray-900'>{strInstructions}.....</p>
                            <span
                                className='cursor-pointer text-blue-600 '
                                onClick={() => setFold(!fold)}
                            >
                                Read Less
                            </span>
                        </>
                    )}

                    <div className='flex gap-5 mt-8 items-center'>
                        <a href={strYoutube} target='_blank' className='btn'>
                            Watch Now
                        </a>
                        <p className='items-center font-extrabold text-gray-600 '>
                            {/* Price: {price} */}
                            <Link to={'/restaurant'}>Back</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetails; <h3>This is meal details.</h3>