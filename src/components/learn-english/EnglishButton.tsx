'use client'

import { useRouter } from 'next/navigation'

export default function EnglishButton() {
    const router = useRouter()
    const handleClick = () => {
        router.push('/english')
    }

    return <button onClick={handleClick}>영어 교정 앱으로</button>
}
