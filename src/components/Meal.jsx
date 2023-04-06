import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meal = ({meal}) => {

    const {idMeal, strMeal, strMealThumb, strInstructions,strCategory} = meal

    const navigate = useNavigate()

    const handlebtnClick = () => {
        navigate(`/meal/${idMeal}`)
    }
    return (
        <div className='border p-2 rounded-md'>
            <img src={strMealThumb} className='rounded-md' alt="Meal Picture" />
            <h3 className='font-bold'>{strMeal}</h3>
            <p className='pb-1'>Category: {strCategory}</p>
            <button onClick={handlebtnClick} className='btn w-full'>Details</button>
        </div>
    );
};

export default Meal;