import React from 'react'
import Heading from '../Heading'

const Price = () => {

  const priceObj = [
    {
      id:1,
      title: 'Онлайн',
      lists: ["Практические задания", "Поддержка кураторов", "Общий чат потока в Телеграме", "Именной сертификат", "Доступ к личным кабинетам маркетплейсов"],
      price: "10.000",
      bg: "#f6f6f6"
    },
    {
      id:2,
      title: 'Офлайн',
      lists: ["Практические задания", "Поддержка кураторов", "Общий чат потока в Телеграме", "Именной сертификат", "Доступ к личным кабинетам маркетплейсов"],
      price: "20.000",
      bg: "#5323ff",
      textColor: 'white'
    },
    {
      id:3,
      title: 'Индивидуальный',
      lists: ["Практические задания", "Поддержка кураторов", "Общий чат потока в Телеграме", "Именной сертификат", "Доступ к личным кабинетам маркетплейсов"],
      price: "50.000",
      bg: "#0d0d1d",
      textColor: 'white'
    },
  ]

  return (
    <div className='container mx-auto p-4'>
      <Heading>Тарифы курса</Heading>
      <div className='grid grid-cols-3 gap-4 my-8 '>
        {priceObj && priceObj.map((item) =>
          <div className={`border-2 rounded-xl p-8`} style={{backgroundColor: `${item.bg}`, color: `${item.textColor && item.textColor}`}}>
            <h2 className='text-4xl  font-semibold'>{item.title}</h2>
            <ul className='list-disc pl-5 mt-6'>
              {item.lists.map((item) =>
              <li className='my-2 font-light'>{item}</li>
              )}
            </ul>
            <h3 className='text-5xl font-semibold my-4'>{item.price} <span className='text-2xl font-bold'>СОМ</span></h3>
            <button className='w-full p-3 bg-[#af1e97] text-white text-xl rounded-lg'>Оформить заказ</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Price