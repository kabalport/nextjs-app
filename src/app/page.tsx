import CurrentWeatherItem from '@/components/weather/CurrentWeatherItem'
import RevalidateButton from '@/components/RevalidateButton'

import style from './style.module.css'

import Link from "next/link";
import MoveLinkItem from "@/components/MoveLinkItem";

export default async function Home() {
  const moveLinks = [
    { name: '영어교정', code: 'chatgpt-test' },
    { name: '날씨', code: 'weather' },
  ]

  return (
    <>
        <div>
        <h1>Portfolio</h1>
        </div>
        <ul className={style.list}>
            {moveLinks.map((moveLink) => {
                return (
              <MoveLinkItem
                  key={moveLink.code}
                  name={moveLink.name}
                  code={moveLink.code}
              />
                )
            })
            }
        </ul>
    </>
  )
}
