
import style from './style.module.css'
import EnglishButton from "@/components/learn-english/EnglishButton";
import RevalidateButton from "@/components/RevalidateButton";
import CurrentWeatherItem from "@/components/weather/CurrentWeatherItem";
import HomeButton from "@/components/HomeButton";

export default async function WeatherPage() {
    const cities = [
        { name: '서울', code: 'seoul' },
        { name: '뉴욕', code: 'NYC' },
        { name: '런던', code: 'london' },
    ]

    return (
        <>
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
            <HomeButton />
        </>
    )
}
