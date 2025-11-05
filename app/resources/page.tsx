'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Video, FileText, Headphones, Search, Filter, Star, Eye, Download } from 'lucide-react'

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources', count: 156 },
    { id: 'speech', name: 'Speech Therapy', count: 34 },
    { id: 'sensory', name: 'Sensory Activities', count: 28 },
    { id: 'education', name: 'Education & IEP', count: 42 },
    { id: 'behavior', name: 'Behavior Support', count: 25 },
    { id: 'mental-health', name: 'Mental Health', count: 27 },
  ]

  const resources = [
    {
      id: '1',
      title: 'Complete Guide to Speech Therapy at Home',
      description: 'Practical techniques and exercises you can do with your child to support speech development',
      type: 'article',
      category: 'speech',
      author: 'Dr. Emily Chen',
      duration: '15 min read',
      views: 2456,
      rating: 4.8,
      isPremium: false,
      thumbnail: 'bg-blue-500',
    },
    {
      id: '2',
      title: 'Sensory Activities for Every Day',
      description: 'Video series showing fun and engaging sensory activities for children with autism',
      type: 'video',
      category: 'sensory',
      author: 'Sarah Mitchell',
      duration: '45 min',
      views: 3892,
      rating: 4.9,
      isPremium: false,
      thumbnail: 'bg-purple-500',
    },
    {
      id: '3',
      title: 'IEP Planning Workbook',
      description: 'Comprehensive workbook to help you prepare for and navigate the IEP process',
      type: 'ebook',
      category: 'education',
      author: 'Education Advocates Team',
      duration: '120 pages',
      views: 1567,
      rating: 4.7,
      isPremium: true,
      thumbnail: 'bg-green-500',
    },
    {
      id: '4',
      title: 'Understanding Meltdowns vs Tantrums',
      description: 'Expert podcast discussing the differences and how to respond appropriately',
      type: 'podcast',
      category: 'behavior',
      author: 'Dr. Michael Torres',
      duration: '32 min',
      views: 4231,
      rating: 4.9,
      isPremium: false,
      thumbnail: 'bg-orange-500',
    },
    {
      id: '5',
      title: 'Self-Care for Autism Parents',
      description: 'Essential strategies for maintaining your mental health while caring for your child',
      type: 'article',
      category: 'mental-health',
      author: 'Lisa Anderson',
      duration: '10 min read',
      views: 5678,
      rating: 4.8,
      isPremium: false,
      thumbnail: 'bg-pink-500',
    },
    {
      id: '6',
      title: 'Visual Schedule Templates',
      description: 'Downloadable templates to create visual schedules for daily routines',
      type: 'ebook',
      category: 'behavior',
      author: 'AutiConnect Team',
      duration: '24 templates',
      views: 3456,
      rating: 4.6,
      isPremium: false,
      thumbnail: 'bg-teal-500',
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <FileText size={20} />
      case 'video':
        return <Video size={20} />
      case 'ebook':
        return <BookOpen size={20} />
      case 'podcast':
        return <Headphones size={20} />
      default:
        return <FileText size={20} />
    }
  }

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              <Link href="/community" className="text-gray-700 dark:text-gray-300 hover:text-primary-500">
                Community
              </Link>
              <Link href="/resources" className="text-primary-500 font-semibold">
                Resources
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Resource Library
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Curated articles, videos, and educational materials to support your journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 flex items-center gap-2">
              <Filter size={20} />
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{category.name}</span>
                      <span className="text-sm">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Featured Resource */}
              <div className="mt-8 p-4 bg-primary-50 dark:bg-gray-700 rounded-lg border border-primary-200 dark:border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Featured
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  New Parent Guide
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                  Essential resource for newly diagnosed families
                </p>
                <button className="w-full px-3 py-2 bg-primary-500 text-white rounded-lg text-sm font-semibold hover:bg-primary-600">
                  Download Free
                </button>
              </div>
            </div>
          </div>

          {/* Main Content - Resources Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Resource Thumbnail */}
                  <div className={`${resource.thumbnail} h-40 flex items-center justify-center relative`}>
                    <div className="text-white">
                      {getTypeIcon(resource.type)}
                    </div>
                    {resource.isPremium && (
                      <span className="absolute top-3 right-3 px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-semibold">
                        Premium
                      </span>
                    )}
                  </div>

                  {/* Resource Content */}
                  <div className="p-6">
                    {/* Resource Type Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold capitalize">
                        {resource.type}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {resource.duration}
                      </span>
                    </div>

                    {/* Resource Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {resource.title}
                    </h3>

                    {/* Resource Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {resource.description}
                    </p>

                    {/* Resource Meta */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-500" fill="currentColor" />
                          <span>{resource.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={14} />
                          <span>{resource.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Author */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      By {resource.author}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                        View
                      </button>
                      <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Download size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredResources.length === 0 && (
              <div className="text-center py-16">
                <BookOpen size={64} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No resources found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
