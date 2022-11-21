import React from 'react'
import img from './assets/author.png'

const Author = () => {

  const obj = [
    "Более 6 лет управлял интернет-магазином.", 
    "Увеличил ежемесячный оборот розничной торговли с 0 до 18 млн руб.",
    "С 2017 г. участвовал во всех закрытых программах по созданию Беру.",
    "Более 25 успешных проектов в качестве менеджера",
    "По маркетплейсам с оборотом до 40 млн руб. в месяц.",
    "1-й поставщик молочной продукции «Б.Ю. Александров» на WB."
  ]

  return (
    <div className='' style={{background: `linear-gradient(90deg, #FFFFFF 28.48%, #E8D1FF 49.51%, #CE9FFC 62.82%, #7367F0 100%)`}}>
      <div className='container mx-auto px-4 grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-8'>
        <div className='mt-10'>
            <h1 className='text-5xl font-bold'>Автор академии Kydynov</h1>
            <p className='text-4xl  font-semibold mt-5'>Профессиональный специалист  по работе с маркетплейсами</p>
            <ul className='my-5'>
              {obj.map((item) =>
                <li className='mt-4 text-2xl font-light border-l-[4px] pl-4 border-[#ff3300]'>{item}</li>
              )}
            </ul>
        </div>
        <div className='flex justify-center items-end'>
            <img src={img} alt='author' className='h-[600px]' />
        </div>
      </div>
    </div>
  )
}

export default Author