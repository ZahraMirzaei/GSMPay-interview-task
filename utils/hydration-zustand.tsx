import { useEffect, useState } from "react"

interface IHydrationZustandProps{
  children: React.ReactNode;
}

const HydrationZustand: React.FC<IHydrationZustandProps> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? <div>{children}</div> : null}</>
}

export default HydrationZustand