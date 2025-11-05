'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar({ user }: { user?: { name: string } }) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/')
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/dashboard" className="text-xl font-bold text-primary-700">
              Autism Parents Community
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link href="/stories" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md">
                Stories
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md">
                Resources
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md">
                Community
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user && (
              <>
                <span className="text-sm text-gray-600">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600 px-3 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
