import { getCurrentWeather } from '@/utils/getCurrentWeather'
import Link from 'next/link'

type Props = {
    name: string
    code: string
}

export default async function MoveLinkItem({
                                                     name,
                                                     code,
                                                 }: Props) {
    const path = `${code}`
    return (
        <li key={name}>
            {name} -{' '}
            (<Link href={path}>이동하기</Link>)
        </li>
    )
}
