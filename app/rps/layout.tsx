'use client'

import GameSelectBar from '../gameSelectBar'
import GameInfoBar from '../gameInfoBar'
import '../globals.css'
import ResultPop from '../resultPop'

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <div>
      <GameSelectBar />
      <GameInfoBar />
      <ResultPop />
      {children}
    </div>
  )
}
