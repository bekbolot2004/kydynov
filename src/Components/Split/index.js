/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// import { CameraIcon } from '@heroicons/react/solid'
import wildberriesPhoto from './assets/wildberries.jpeg'

export default function Split() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Case Study</h2> */}
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Что такое Wildberries?
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={wildberriesPhoto}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  {/* <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" /> */}
                  {/* <span className="ml-2">Photograph by Marcus O’Leary</span> */}
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
              Wildberries входит в топ-100 крупнейших российских магазинов и работает в 14 странах Европы. Площадка активно растёт: за прошлый год компания выполнила 808,6 млн заказов — это на 146% больше, чем в 2020 году.

Зарабатывать на маркетплейсе можно удалённо — вам понадобится только компьютер с доступом в интернет и несколько часов свободного времени.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
              </p>
              {/* <p>
                Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.
              </p> */}
              <ul role="list" className='list-disc'>
                <li>Wildberries занимает 1-е место по объёму онлайн-продаж за 2021 год, по данным Data Insight</li>
                <li>113 млн постоянных покупателей — активная аудитория маркетплейса, по данным Wildberries</li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              {/* <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
              </p> */}
              {/* <h3>How we helped</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,
                lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
              </p>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                pellentesque. Blandit amet, sed aenean erat arcu morbi.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
