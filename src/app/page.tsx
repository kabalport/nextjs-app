import CurrentWeatherItem from '@/components/CurrentWeatherItem'
import RevalidateButton from '@/components/RevalidateButton'

import style from './style.module.css'
import EnglishButton from "@/components/learn-english/EnglishButton";

export default async function Home() {
  const cities = [
    { name: '서울', code: 'seoul' },
    { name: '뉴욕', code: 'NYC' },
    { name: '런던', code: 'london' },
  ]

  return (
    <>
      <h1>ChatGpt를 활용한 영어문장 교정앱</h1>
      <div>
        <EnglishButton />
      </div>

      <h1>날씨 앱</h1>
      <RevalidateButton tag="time" />
      <ul className={style.list}>
        {cities.map((city) => {
          return (
            <CurrentWeatherItem
              key={city.code}
              cityCode={city.code}
              cityName={city.name}
            />
          )
        })}
      </ul>
    </>
  )
}
