'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Users, Clock, Video, Plus, Filter } from 'lucide-react'

export default function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'virtual' | 'in-person'>('all')

  const events = [
    {
      id: '1',
      title: 'Parent Support Group Meeting',
      description: 'Monthly gathering for parents to share experiences and support each other',
      type: 'virtual',
      date: 'Nov 6, 2025',
      time: '7:00 PM - 8:30 PM',
      location: 'Zoom',
      attendees: 24,
      maxAttendees: 50,
      organizer: 'Sarah Mitchell',
      image: 'bg-blue-500',
    },
    {
      id: '2',
      title: 'Sensory-Friendly Movie Night',
      description: 'Family-friendly movie screening with adjusted lighting and sound',
      type: 'in-person',
      date: 'Nov 8, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'Community Center, 123 Main St',
      attendees: 45,
      maxAttendees: 100,
      organizer: 'Community Team',
      image: 'bg-purple-500',
    },
    {
      id: '3',
      title: 'Speech Therapy Workshop',
      description: 'Learn practical techniques from certified speech therapists',
      type: 'virtual',
      date: 'Nov 10, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Zoom',
      attendees: 67,
      maxAttendees: 100,
      organizer: 'Dr. Emily Chen',
      image: 'bg-green-500',
    },
    {
      id: '4',
      title: 'Autism Awareness Walk',
      description: 'Join us for a community walk to raise awareness and funds',
      type: 'in-person',
      date: 'Nov 15, 2025',
      time: '9:00 AM - 12:00 PM',
      location: 'City Park, North Entrance',
      attendees: 156,
      maxAttendees: 500,
      organizer: 'AutiConnect Team',
      image: 'bg-orange-500',
    },
    {
      id: '5',
      title: 'IEP Planning Seminar',
      description: 'Expert guidance on creating effective IEPs for your child',
      type: 'virtual',
      date: 'Nov 12, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Zoom',
      attendees: 89,
      maxAttendees: 150,
      organizer: 'Education Advocates',
      image: 'bg-pink-500',
    },
    {
      id: '6',
      title: 'Family Picnic & Playdate',
      description: 'Casual outdoor gathering for families to connect',
      type: 'in-person',
      date: 'Nov 16, 2025',
      time: '11:00 AM - 2:00 PM',
      location: 'Riverside Park, Pavilion 3',
      attendees: 34,
      maxAttendees: 75,
      organizer: 'Local Parents Group',
      image: 'bg-teal-500',
    },
  ]

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter)

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
              <Link href="/events" className="text-primary-500 font-semibold">
                Events
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Events & Meetups
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Discover and join community events, workshops, and support groups
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 flex items-center gap-2">
            <Plus size={20} />
            Create Event
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg mb-8">
          <div className="flex items-center gap-4">
            <Filter size={20} className="text-gray-600 dark:text-gray-300" />
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  filter === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setFilter('virtual')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  filter === 'virtual'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Virtual
              </button>
              <button
                onClick={() => setFilter('in-person')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  filter === 'in-person'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                In-Person
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Event Image/Color */}
              <div className={`${event.image} h-40 flex items-center justify-center`}>
                <Calendar size={48} className="text-white opacity-50" />
              </div>

              {/* Event Content */}
              <div className="p-6">
                {/* Event Type Badge */}
                <div className="flex items-center gap-2 mb-3">
                  {event.type === 'virtual' ? (
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Video size={14} />
                      Virtual
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold flex items-center gap-1">
                      <MapPin size={14} />
                      In-Person
                    </span>
                  )}
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>

                {/* Event Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    {event.type === 'virtual' ? <Video size={16} /> : <MapPin size={16} />}
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Users size={16} />
                    <span>{event.attendees} / {event.maxAttendees} attending</span>
                  </div>
                </div>

                {/* Event Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                    RSVP
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Details
                  </button>
                </div>

                {/* Organizer */}
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  Organized by {event.organizer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No events found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your filters or create a new event
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
