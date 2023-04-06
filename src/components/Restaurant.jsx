import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Meal from './Meal';

const Restaurant = () => {
    const mealDB = useLoaderData()
    const meals = mealDB.meals

    return (
        <div className='my-container'>
            <h3 className='font-bold text-2xl text-center my-2'>Total Meals with Letter B: {meals.length}</h3>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                   meals.map((meal,index) => <Meal 
                    key={index}
                   meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;