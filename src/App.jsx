import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './components/Header'
import LoadingSpinner from './components/LoadingSpinner'
import Footer from './components/Footer'

function App() {

  const navigation = useNavigation()
    
  return (
    <div className="App">
      <Header/>
      <div>{navigation.state === 'loading' ? <LoadingSpinner /> : ''}</div>
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default App
