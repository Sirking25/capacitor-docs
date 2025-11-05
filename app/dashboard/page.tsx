'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { 
  Home, 
  Users, 
  Calendar, 
  BookOpen, 
  MessageCircle, 
  ShoppingBag, 
  Settings,
  Bell,
  Search,
  Plus,
  TrendingUp,
  Heart,
  Award
} from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/auth/login')
      } else {
        setUser(user)
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  const stats = [
    { label: 'Posts', value: '24', icon: TrendingUp, color: 'text-blue-500' },
    { label: 'Connections', value: '156', icon: Users, color: 'text-green-500' },
    { label: 'Events Attended', value: '8', icon: Calendar, color: 'text-purple-500' },
    { label: 'Points', value: '1,240', icon: Award, color: 'text-yellow-500' },
  ]

  const quickActions = [
    { label: 'Create Post', icon: Plus, href: '/community', color: 'bg-blue-500' },
    { label: 'Find Events', icon: Calendar, href: '/events', color: 'bg-green-500' },
    { label: 'Browse Resources', icon: BookOpen, href: '/resources', color: 'bg-purple-500' },
    { label: 'Join Groups', icon: Users, href: '/community/groups', color: 'bg-orange-500' },
  ]

  const recentActivity = [
    { type: 'post', user: 'Sarah M.', action: 'shared a new post', time: '2 hours ago' },
    { type: 'event', user: 'Community', action: 'New event: Parent Support Group', time: '5 hours ago' },
    { type: 'resource', user: 'Admin', action: 'Added new resource: Speech Therapy Guide', time: '1 day ago' },
    { type: 'badge', user: 'You', action: 'earned the "Helpful Parent" badge', time: '2 days ago' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/dashboard" className="text-2xl font-bold text-primary-500">
                AutiConnect
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/dashboard" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">
                  <Home size={20} />
                  <span>Home</span>
                </Link>
                <Link href="/community" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">
                  <Users size={20} />
                  <span>Community</span>
                </Link>
                <Link href="/events" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">
                  <Calendar size={20} />
                  <span>Events</span>
                </Link>
                <Link href="/resources" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">
                  <BookOpen size={20} />
                  <span>Resources</span>
                </Link>
                <Link href="/messages" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">
                  <MessageCircle size={20} />
                  <span>Messages</span>
                </Link>
                <Link href="/marketplace" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500">
                  <ShoppingBag size={20} />
                  <span>Marketplace</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Search size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Link href="/settings" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Settings size={20} />
              </Link>
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                {user?.displayName?.charAt(0) || 'U'}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl p-8 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.displayName || 'Friend'}! 👋
          </h1>
          <p className="text-blue-100">
            You have 3 new messages and 2 upcoming events this week
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color}`}>
                    <Icon size={32} />
                  </div>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon
                  return (
                    <Link
                      key={index}
                      href={action.href}
                      className={`${action.color} text-white rounded-xl p-4 hover:opacity-90 transition-smooth flex flex-col items-center justify-center gap-2 text-center`}
                    >
                      <Icon size={24} />
                      <span className="text-sm font-semibold">{action.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                      <Heart size={20} className="text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white">
                        <span className="font-semibold">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Upcoming Events
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Parent Support Group
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Tomorrow at 7:00 PM
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Sensory-Friendly Movie Night
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Saturday at 3:00 PM
                  </p>
                </div>
              </div>
              <Link
                href="/events"
                className="mt-4 block text-center text-primary-500 hover:text-primary-600 font-semibold"
              >
                View All Events →
              </Link>
            </div>

            {/* Suggested Groups */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Suggested Groups
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Speech Therapy Tips
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      1.2k members
                    </p>
                  </div>
                  <button className="px-3 py-1 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600">
                    Join
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Local Meetups
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      856 members
                    </p>
                  </div>
                  <button className="px-3 py-1 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
