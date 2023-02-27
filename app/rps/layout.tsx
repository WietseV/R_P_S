'use client'

import GameSelectBar from '../gameSelectBar'
import GameInfoBar from './gameInfoBar'
import '../globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <div>
      <GameSelectBar />
      <GameInfoBar />
      {children}
    </div>
  )
}
