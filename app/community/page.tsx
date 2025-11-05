'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, MessageCircle, Share2, MoreHorizontal, Image as ImageIcon, Send } from 'lucide-react'

export default function CommunityPage() {
  const [newPost, setNewPost] = useState('')
  const [posts, setPosts] = useState([
    {
      id: '1',
      author: {
        name: 'Sarah Mitchell',
        avatar: 'SM',
        role: 'Parent',
      },
      content: 'Just wanted to share a win today! My son made eye contact and said "thank you" unprompted for the first time. These small victories mean everything. 💙',
      likes: 24,
      comments: 8,
      timeAgo: '2 hours ago',
      isLiked: false,
    },
    {
      id: '2',
      author: {
        name: 'Dr. Emily Chen',
        avatar: 'EC',
        role: 'Professional',
        verified: true,
      },
      content: 'Reminder: Every child develops at their own pace. Celebrate the small wins and be patient with the process. You\'re doing an amazing job! 🌟',
      likes: 56,
      comments: 12,
      timeAgo: '5 hours ago',
      isLiked: true,
    },
    {
      id: '3',
      author: {
        name: 'Michael Torres',
        avatar: 'MT',
        role: 'Parent',
      },
      content: 'Looking for recommendations for sensory-friendly headphones. My daughter is very sensitive to loud noises. What has worked for your family?',
      likes: 15,
      comments: 23,
      timeAgo: '1 day ago',
      isLiked: false,
    },
  ])

  const handleCreatePost = () => {
    if (!newPost.trim()) return

    const post = {
      id: Date.now().toString(),
      author: {
        name: 'You',
        avatar: 'Y',
        role: 'Parent',
      },
      content: newPost,
      likes: 0,
      comments: 0,
      timeAgo: 'Just now',
      isLiked: false,
    }

    setPosts([post, ...posts])
    setNewPost('')
  }

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/dashboard" className="text-2xl font-bold text-primary-500">
              AutiConnect
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-primary-500">
                Dashboard
              </Link>
              <Link href="/community" className="text-primary-500 font-semibold">
                Community
              </Link>
              <Link href="/events" className="text-gray-700 dark:text-gray-300 hover:text-primary-500">
                Events
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Share with the community
              </h2>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  Y
                </div>
                <div className="flex-1">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="What's on your mind? Share your experiences, ask questions, or offer support..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    rows={4}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                        <ImageIcon size={20} className="text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                    <button
                      onClick={handleCreatePost}
                      disabled={!newPost.trim()}
                      className="px-6 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Send size={18} />
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            {posts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                {/* Post Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {post.author.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {post.author.name}
                        </h3>
                        {post.author.verified && (
                          <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                            ✓
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {post.author.role} • {post.timeAgo}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <MoreHorizontal size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                {/* Post Content */}
                <p className="text-gray-900 dark:text-white mb-4 leading-relaxed">
                  {post.content}
                </p>

                {/* Post Actions */}
                <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-2 ${
                      post.isLiked ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'
                    } hover:text-red-500 transition-colors`}
                  >
                    <Heart size={20} fill={post.isLiked ? 'currentColor' : 'none'} />
                    <span className="font-semibold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                    <MessageCircle size={20} />
                    <span className="font-semibold">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                    <Share2 size={20} />
                    <span className="font-semibold">Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Groups */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Popular Groups
              </h2>
              <div className="space-y-4">
                {[
                  { name: 'Speech Therapy Tips', members: '1.2k', color: 'bg-purple-100 dark:bg-purple-900' },
                  { name: 'Sensory Activities', members: '980', color: 'bg-blue-100 dark:bg-blue-900' },
                  { name: 'IEP Support', members: '856', color: 'bg-green-100 dark:bg-green-900' },
                  { name: 'Local Meetups', members: '654', color: 'bg-orange-100 dark:bg-orange-900' },
                ].map((group, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${group.color} rounded-lg`}></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {group.name}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {group.members} members
                      </p>
                    </div>
                    <button className="px-3 py-1 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-primary-50 dark:bg-gray-800 rounded-xl p-6 border border-primary-200 dark:border-gray-700">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Community Guidelines
              </h2>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Be respectful and supportive</li>
                <li>• Share experiences, not medical advice</li>
                <li>• Protect privacy - no personal info</li>
                <li>• Report inappropriate content</li>
                <li>• Celebrate all victories, big and small</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
