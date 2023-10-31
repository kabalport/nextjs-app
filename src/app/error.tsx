'use client'

import { useEffect } from 'react'

type Props = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error.message)
  }, [])
    useEffect(() => {
        console.error(error.message)
        // ... your useEffect logic here
    }, [error.message]);  // make sure error.message is included


    return (
    <>
      <h1>에러 페이지</h1>
      <button
        onClick={() => {
          reset()
        }}
      >
        새로고침
      </button>
    </>
  )
}
