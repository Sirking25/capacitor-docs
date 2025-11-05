'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

interface User {
  id: string
  name: string
  email: string
}

interface Story {
  id: string
  title: string
  content: string
  author: {
    name: string
  }
  createdAt: string
  likes: any[]
  _count?: {
    comments: number
  }
}

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [recentStories, setRecentStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/auth/login')
      return
    }

    // Fetch user data and recent stories
    fetchData(token)
  }, [router])

  const fetchData = async (token: string) => {
    try {
      // Fetch user info
      const userRes = await fetch('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (userRes.ok) {
        const userData = await userRes.json()
        setUser(userData)
      }

      // Fetch recent stories
      const storiesRes = await fetch('/api/stories?limit=5')
      if (storiesRes.ok) {
        const storiesData = await storiesRes.json()
        setRecentStories(storiesData)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user || undefined} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-500 to-calm-500 rounded-xl p-8 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-primary-50">You're part of a supportive community of parents who understand.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Link href="/stories/new" className="card hover:shadow-lg transition-shadow text-center">
            <div className="text-3xl mb-2">✍️</div>
            <h3 className="font-semibold">Share Your Story</h3>
          </Link>
          <Link href="/community" className="card hover:shadow-lg transition-shadow text-center">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-semibold">Join Discussion</h3>
          </Link>
          <Link href="/resources" className="card hover:shadow-lg transition-shadow text-center">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold">Find Resources</h3>
          </Link>
          <Link href="/profile" className="card hover:shadow-lg transition-shadow text-center">
            <div className="text-3xl mb-2">👤</div>
            <h3 className="font-semibold">My Profile</h3>
          </Link>
        </div>

        {/* Recent Stories */}
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent Stories</h2>
            <Link href="/stories" className="text-primary-600 hover:text-primary-700">
              View all →
            </Link>
          </div>

          {recentStories.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No stories yet. Be the first to share!</p>
              <Link href="/stories/new" className="btn-primary mt-4 inline-block">
                Share Your Story
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {recentStories.map((story) => (
                <Link
                  key={story.id}
                  href={`/stories/${story.id}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{story.content}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>By {story.author.name}</span>
                    <div className="flex items-center space-x-4">
                      <span>❤️ {story.likes?.length || 0}</span>
                      <span>💬 {story._count?.comments || 0}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Community Guidelines Reminder */}
        <div className="mt-8 bg-calm-50 border border-calm-200 rounded-lg p-6">
          <h3 className="font-semibold mb-2">Community Guidelines</h3>
          <p className="text-sm text-gray-700 mb-3">
            This is a safe, supportive space. Please be kind, respectful, and understanding.
          </p>
          <Link href="/guidelines" className="text-sm text-primary-600 hover:text-primary-700">
            Read full guidelines →
          </Link>
        </div>
      </div>
    </div>
  )
}
