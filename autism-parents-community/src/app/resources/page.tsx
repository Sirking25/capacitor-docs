'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'

const categories = [
  { id: 'therapy', name: 'Therapy & Interventions', icon: '🧠' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'legal', name: 'Legal Rights', icon: '⚖️' },
  { id: 'financial', name: 'Financial Support', icon: '💰' },
  { id: 'support', name: 'Support Services', icon: '🤝' },
]

const sampleResources = [
  {
    category: 'therapy',
    title: 'Applied Behavior Analysis (ABA) Therapy Guide',
    description: 'Comprehensive guide to understanding ABA therapy, what to expect, and how to find qualified providers.',
    url: '#',
  },
  {
    category: 'education',
    title: 'Understanding IEPs and 504 Plans',
    description: 'Learn about Individualized Education Programs and 504 plans to ensure your child gets the support they need in school.',
    url: '#',
  },
  {
    category: 'legal',
    title: 'Your Child\'s Rights Under IDEA',
    description: 'The Individuals with Disabilities Education Act ensures free appropriate public education for children with disabilities.',
    url: '#',
  },
  {
    category: 'financial',
    title: 'Financial Assistance Programs',
    description: 'Directory of grants, benefits, and financial assistance programs available for families with autistic children.',
    url: '#',
  },
  {
    category: 'support',
    title: 'Respite Care Services',
    description: 'Find respite care providers to give caregivers the breaks they need to recharge.',
    url: '#',
  },
  {
    category: 'therapy',
    title: 'Speech and Language Therapy',
    description: 'Understanding speech therapy approaches and how they can help with communication skills.',
    url: '#',
  },
  {
    category: 'education',
    title: 'Homeschooling Resources',
    description: 'Curriculum and support for families choosing to homeschool their autistic children.',
    url: '#',
  },
  {
    category: 'support',
    title: 'Sibling Support Programs',
    description: 'Resources and programs to support siblings of children with autism.',
    url: '#',
  },
]

export default function Resources() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
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

  const filteredResources = selectedCategory === 'all'
    ? sampleResources
    : sampleResources.filter(r => r.category === selectedCategory)

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Resources & Information</h1>
          <p className="text-gray-600">
            Curated resources to help you navigate your journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="card mb-8">
          <h2 className="font-semibold mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              All Resources
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredResources.map((resource, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3 mb-3">
                <span className="text-2xl">
                  {categories.find(c => c.id === resource.category)?.icon}
                </span>
                <div className="flex-1">
                  <span className="text-xs text-gray-500 uppercase">
                    {categories.find(c => c.id === resource.category)?.name}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a
                href={resource.url}
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="card text-center py-12">
            <p className="text-gray-600">
              No resources found in this category. Check back soon!
            </p>
          </div>
        )}

        {/* Contribute Section */}
        <div className="mt-8 bg-calm-50 border border-calm-200 rounded-lg p-6">
          <h3 className="font-semibold mb-2">Have a resource to share?</h3>
          <p className="text-sm text-gray-700 mb-3">
            If you know of a helpful resource that should be included here, please let us know.
            We verify all resources before adding them to ensure quality and accuracy.
          </p>
          <button className="btn-primary">
            Suggest a Resource
          </button>
        </div>
      </div>
    </div>
  )
}
