'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '../../src/app/user/components/Sidebar'
import Header from '../../src/app/user/components/Sidebar'

export default function UserLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

//   useEffect(() => {
//     const loggedIn = localStorage.getItem('isLoggedIn')
//     if (!loggedIn) {
//       router.push('/login')
//     } else {
//       setIsLoggedIn(true)
//     }
//   }, [router])

//   if (!isLoggedIn) {
//     return <div className="flex items-center justify-center min-h-screen">Loading...</div>
//   }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}