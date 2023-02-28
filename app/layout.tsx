import './globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <head />
      <body className='bg-bggradient'>
          {children}
      </body>
    </html>
  )
}
