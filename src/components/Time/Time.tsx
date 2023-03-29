import { useState, useEffect } from 'react'

export const Time = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <span>{date.toLocaleTimeString()}</span>
}
