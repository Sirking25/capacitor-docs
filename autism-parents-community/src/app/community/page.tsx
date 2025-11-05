'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const samplePosts = [
  {
    id: '1',
    title: 'Looking for recommendations on speech therapists in Seattle area',
    content: 'Hi everyone! We just moved to Seattle and are looking for a good speech therapist who has experience with nonverbal children. Any recommendations would be greatly appreciated!',
    author: { name: 'Sarah M.' },
    type: 'question',
    createdAt: new Date().toISOString(),
    replies: 7,
    likes: 12,
  },
  {
    id: '2',
    title: 'Celebrating a milestone: First words!',
    content: 'After months of speech therapy, my 4-year-old said his first clear words today - "mama" and "papa"! I\'m crying happy tears. Never give up hope!',
    author: { name: 'Michael R.' },
    type: 'discussion',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    replies: 23,
    likes: 145,
  },
  {
    id: '3',
    title: 'How do you handle sensory meltdowns in public?',
    content: 'My son has sensory processing issues and sometimes has meltdowns in public places. I\'m looking for strategies that have worked for other parents. What techniques do you use?',
    author: { name: 'Jennifer L.' },
    type: 'question',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    replies: 31,
    likes: 28,
  },
]

export default function Community() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/auth/login')
      return
    }

    fetch('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
      .catch(() => router.push('/auth/login'))
  }, [router])

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
            <h1 className="text-3xl font-bold mb-2">Community Discussions</h1>
            <p className="text-gray-600">
              Ask questions, share advice, and connect with other parents
            </p>
          </div>
          <button className="btn-primary">
            Start Discussion
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-1">1,247</div>
            <div className="text-sm text-gray-600">Community Members</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-calm-600 mb-1">3,892</div>
            <div className="text-sm text-gray-600">Discussions</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Always Here for You</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="card mb-6">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
              All Posts
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-lg">
              Questions
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-lg">
              Discussions
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-lg">
              Resources
            </button>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {samplePosts.map((post) => (
            <div key={post.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      post.type === 'question'
                        ? 'bg-primary-100 text-primary-800'
                        : 'bg-calm-100 text-calm-800'
                    }`}>
                      {post.type === 'question' ? '❓ Question' : '💬 Discussion'}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 hover:text-primary-600 cursor-pointer">
                    {post.title}
                  </h3>

                  <p className="text-gray-700 mb-4">{post.content}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>By {post.author.name}</span>
                      <span>
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.replies} replies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Guidelines */}
        <div className="mt-8 bg-calm-50 border border-calm-200 rounded-lg p-6">
          <h3 className="font-semibold mb-2">Community Guidelines</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✓ Be kind, respectful, and supportive</li>
            <li>✓ Share experiences without judgment</li>
            <li>✓ Respect privacy - no personal information</li>
            <li>✓ Report inappropriate content</li>
            <li>✓ Remember: we're all on this journey together</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
