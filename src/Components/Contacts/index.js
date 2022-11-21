import React from 'react'

const Contacts = () => {
  return (
    <div>
        <div className='relative w-full h-screen'>
            <iframe className='w-full h-full z-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1374.1773276095546!2d74.58267068576492!3d42.87061755645043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec944fa918ead%3A0x49ff0c1c322b56c6!2sGo%20Planet!5e0!3m2!1sru!2skg!4v1665921418365!5m2!1sru!2skg"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            <div className='absolute top-[10px] rounded-lg left-[10px] z-20 bg-[#750463] py-[40px] px-[50px] shadow-sm text-white'>
                <h2 className='text-4xl font-medium'>Как нас найти</h2>
                <p className='font-light mt-5'>Бишкек, Московская 193/Турусбекова</p>
                <p className='mt-1 text-lg'>+996 (706) 91-54-94</p>
                <p>С 10:00 - 18:00</p>
            </div>
        </div>
    </div>
  )
}

export default Contacts