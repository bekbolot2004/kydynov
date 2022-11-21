import React, { useState } from 'react'
import Heading from '../Heading'

const QuestionsAndAnswers = () => {

  const questionsObj = [
    {
      id:1,
      question: "Почему так дорого",
      answer: ""
    },
    {
      id:2,
      question: "Что такое Wildberries",
      answer: "Ответ"
    },
    {
      id:3,
      question: "Сколько продолжительность обучение",
      answer: "Ответ"
    },
    {
      id:4,
      question: "Что нужно для обучение ",
      answer: "Ответ"
    },
    {
      id:5,
      question: "Есть ли возрастные ограничение",
      answer: "Ответ"
    },
    {
      id:6,
      question: "Есть ли возрастные ограничение",
      answer: "Ответ"
    },
    {
      id:7,
      question: "Есть ли возрастные ограничение",
      answer: "Ответ"
    },
    {
      id:8,
      question: "Есть ли возрастные ограничение",
      answer: "Ответ"
    },
    {
      id:9,
      question: "Есть ли возрастные ограничение",
      answer: "Ответ"
    },
    {
      id:10,
      question: "Есть ли возрастные ограничение",
      answer: "Ответ"
    },
    {
      id:11,
      question: "Есть ли возрастные ограничение",
      answer: "Ответ"
    },
  ]

  const [selected, setSelected ] = useState(null)

  const toggle = (i) => {
    if( selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className='container mx-auto p-4'>
        <Heading>Вопросы и ответы</Heading>
        <div className='mt-10'>
            {questionsObj && questionsObj.map((item, i) =>
            <div className='bg-[#F8F4FF] my-4 mx-1  p-5 rounded-lg'>
                <div className='flex items-center justify-between cursor-pointer' onClick={() => toggle(i)}>
                    <h1 className='text-xl  font-semibold p-0'>{item.question}</h1>
                    <div className='flex justify-center items-center text-white  bg-[#750463] h-8 w-8 rounded-full text-4xl'>{selected == i ? "+" : "-"}</div>
                </div>
                {selected == i ? <p className={` overflow-hidden`}>{item.answer}</p> : ''}
            </div>
            )}
        </div>
    </div>
  )
}

export default QuestionsAndAnswers