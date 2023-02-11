'use client'

import GameSelectBar from './gameSelectBar'
import '../globals.css'

export default function RootLayout({children,}: {children: React.ReactNode}) {

  return (
    <div>
      <GameSelectBar />
      {children}
    </div>
  )
}
