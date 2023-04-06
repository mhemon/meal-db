import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    // console.log(error.error.message)
    const history = useNavigate()

    const backBtnHandler = () => {
        history('/')
    }
    return (
        <div className='make-center'>
            <div className='text-center'>
                <h3 className='mb-2'>{error.error.message}</h3>
                <button className='btn' onClick={backBtnHandler}>Back to Our Site.</button>
            </div>
        </div>
    );
};

export default ErrorPage;