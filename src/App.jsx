import { Header } from './Header'
import { Footer } from './Footer'
import { useState } from 'react'

function App() {
  const mainClass = 'w-screen h-[calc(100vh-7rem)] bg-[#DDDDDD]'

  return (
    <>
      <Header />
      <main className={mainClass}>

      </main>
      <Footer />
    </>
  )
}

export { App }