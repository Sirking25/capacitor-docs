'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

interface Story {
  id: string
  title: string
  content: string
  tags: string | null
  author: {
    id: string
    name: string
  }
  createdAt: string
  likes: any[]
  _count: {
    comments: number
  }
}

export default function Stories() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/auth/login')
      return
    }

    fetchData(token)
  }, [router])

  const fetchData = async (token: string) => {
    try {
      const [userRes, storiesRes] = await Promise.all([
        fetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('/api/stories?limit=50'),
      ])

      if (userRes.ok) {
        const userData = await userRes.json()
        setUser(userData)
      }

      if (storiesRes.ok) {
        const storiesData = await storiesRes.json()
        setStories(storiesData)
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
      <Navbar user={user} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Community Stories</h1>
            <p className="text-gray-600">
              Real experiences from parents in our community
            </p>
          </div>
          <Link href="/stories/new" className="btn-primary">
            Share Your Story
          </Link>
        </div>

        {stories.length === 0 ? (
          <div className="card text-center py-12">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-2">No stories yet</h3>
            <p className="text-gray-600 mb-4">
              Be the first to share your experience with the community
            </p>
            <Link href="/stories/new" className="btn-primary inline-block">
              Share Your Story
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {stories.map((story) => (
              <div key={story.id} className="card hover:shadow-lg transition-shadow">
                <Link href={`/stories/${story.id}`}>
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary-600">
                    {story.title}
                  </h2>
                </Link>

                <p className="text-gray-700 mb-4 line-clamp-3">
                  {story.content}
                </p>

                {story.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.split(',').map((tag, index) => (
                      <span
                        key={index}
                        className="bg-calm-100 text-calm-800 text-xs px-3 py-1 rounded-full"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <span>By {story.author.name}</span>
                    <span>
                      {new Date(story.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>❤️ {story.likes.length}</span>
                    <span>💬 {story._count.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
