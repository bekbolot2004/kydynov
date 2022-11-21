import React from 'react'
import logo from './assets/logo.svg'


const Header = () => {
  return (
    <div className='fixed top-4 left-0 w-full   flex justify-center items-center z-50'>
        <div className='container mx-auto p-4 rounded-2xl backdrop-blur-sm flex justify-between items-center bg-white/80'>
          <img src={logo} alt="logo" className='h-12' />
          <div className='links'>
            {["О курсе", "Программа", "Автор", "Отзывы", "Контакты"].map((item) => 
            <a className='mx-3 border-b p-1 hover:border-black cursor-pointer'>{item}</a>
            )}
            
            <a href='#price' className='text-[#e64219] border border-[#e64219] p-3 text-lg font-normal rounded-md'>Тарифы и цены</a>
          </div>
        </div>
    </div>
  )
}

export default Header