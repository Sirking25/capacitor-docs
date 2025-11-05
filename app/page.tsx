'use client'

import Link from 'next/link'
import { Heart, Users, BookOpen, Calendar, MessageCircle, Award, ShoppingBag, Shield } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: 'Community Feed & Groups',
      description: 'Connect with other parents, share experiences, and join supportive groups',
      color: 'text-blue-500',
    },
    {
      icon: MessageCircle,
      title: 'AI Support Assistant',
      description: 'Get instant guidance and resources from our AI-powered support chatbot',
      color: 'text-purple-500',
    },
    {
      icon: Calendar,
      title: 'Events & Meetups',
      description: 'Discover local and virtual events, support groups, and family activities',
      color: 'text-green-500',
    },
    {
      icon: BookOpen,
      title: 'Resource Library',
      description: 'Access curated articles, videos, and educational materials',
      color: 'text-orange-500',
    },
    {
      icon: Heart,
      title: 'Personalized Dashboard',
      description: 'Track progress, set goals, and manage your family\'s journey',
      color: 'text-pink-500',
    },
    {
      icon: Award,
      title: 'Gamification & Recognition',
      description: 'Earn badges and points for community contributions',
      color: 'text-yellow-500',
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      description: 'Find autism-friendly products, tools, and educational materials',
      color: 'text-indigo-500',
    },
    {
      icon: Shield,
      title: 'Safe & Moderated',
      description: 'A secure environment with verified professionals and content moderation',
      color: 'text-teal-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to <span className="text-primary-500">AutiConnect</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            A vibrant, safe, and feature-rich community hub for parents of children with autism
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-smooth shadow-lg hover:shadow-xl"
            >
              Get Started Free
            </Link>
            <Link
              href="/auth/login"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-smooth shadow-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Everything You Need in One Place
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-smooth border border-gray-100 dark:border-gray-700"
              >
                <div className={`${feature.color} mb-4`}>
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-primary-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            To create a compassionate, empowering, and resourceful space where parents of autistic 
            children can connect, learn, share experiences, access trusted resources, and find 
            emotional and practical support.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full">Inclusive</span>
            <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full">Supportive</span>
            <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full">Educational</span>
            <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full">Empowering</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Join Our Growing Community
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Connect with thousands of parents who understand your journey. Get support, share experiences, 
          and access resources that make a difference.
        </p>
        <Link
          href="/auth/signup"
          className="inline-block px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-smooth shadow-lg hover:shadow-xl"
        >
          Create Your Free Account
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AutiConnect</h3>
              <p className="text-gray-400">
                Empowering parents of children with autism through community and support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Community Feed</li>
                <li>Events & Meetups</li>
                <li>Resource Library</li>
                <li>AI Assistant</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AutiConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
