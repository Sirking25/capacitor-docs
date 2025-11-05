'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Send, Search, MoreVertical, Phone, Video, Paperclip, Smile } from 'lucide-react'

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState('1')
  const [newMessage, setNewMessage] = useState('')

  const conversations = [
    {
      id: '1',
      name: 'Sarah Mitchell',
      avatar: 'SM',
      lastMessage: 'Thank you so much for the advice!',
      time: '2m ago',
      unread: 2,
      online: true,
    },
    {
      id: '2',
      name: 'Parent Support Circle',
      avatar: 'PS',
      lastMessage: 'Meeting tomorrow at 7 PM',
      time: '1h ago',
      unread: 0,
      online: false,
      isGroup: true,
    },
    {
      id: '3',
      name: 'Dr. Emily Chen',
      avatar: 'EC',
      lastMessage: 'I can help with that',
      time: '3h ago',
      unread: 1,
      online: true,
      verified: true,
    },
    {
      id: '4',
      name: 'Michael Torres',
      avatar: 'MT',
      lastMessage: 'Those headphones worked great!',
      time: '1d ago',
      unread: 0,
      online: false,
    },
  ]

  const messages = [
    {
      id: '1',
      senderId: '1',
      content: 'Hi! I saw your post about speech therapy techniques. Do you have any recommendations for a 4-year-old?',
      time: '10:30 AM',
      isOwn: false,
    },
    {
      id: '2',
      senderId: 'me',
      content: 'Hi Sarah! Yes, I\'d be happy to help. We\'ve had great success with visual cues and repetition. What specific areas are you working on?',
      time: '10:32 AM',
      isOwn: true,
    },
    {
      id: '3',
      senderId: '1',
      content: 'Mainly pronunciation and expanding vocabulary. He knows about 50 words but struggles with new ones.',
      time: '10:35 AM',
      isOwn: false,
    },
    {
      id: '4',
      senderId: 'me',
      content: 'That\'s a great foundation! I\'d recommend starting with picture cards and making it fun. Also, there\'s a great resource in our library called "Speech Therapy at Home" that has practical exercises.',
      time: '10:38 AM',
      isOwn: true,
    },
    {
      id: '5',
      senderId: '1',
      content: 'Thank you so much for the advice! I\'ll check out that resource right away. 😊',
      time: '10:40 AM',
      isOwn: false,
    },
  ]

  const handleSendMessage = () => {
    if (!newMessage.trim()) return
    // Handle sending message
    setNewMessage('')
  }

  const selectedConversation = conversations.find(c => c.id === selectedChat)

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
              <Link href="/messages" className="text-primary-500 font-semibold">
                Messages
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
          <div className="grid grid-cols-12 h-full">
            {/* Conversations List */}
            <div className="col-span-12 md:col-span-4 border-r border-gray-200 dark:border-gray-700 flex flex-col">
              {/* Search */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      selectedChat === conversation.id ? 'bg-primary-50 dark:bg-gray-700' : ''
                    }`}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {conversation.avatar}
                      </div>
                      {conversation.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {conversation.name}
                          </h3>
                          {conversation.verified && (
                            <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                              ✓
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {conversation.time}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                          {conversation.lastMessage}
                        </p>
                        {conversation.unread > 0 && (
                          <span className="ml-2 px-2 py-1 bg-primary-500 text-white rounded-full text-xs font-semibold">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-12 md:col-span-8 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {selectedConversation?.avatar}
                    </div>
                    {selectedConversation?.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {selectedConversation?.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {selectedConversation?.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <Phone size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <Video size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <MoreVertical size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] ${
                        message.isOwn
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      } rounded-2xl px-4 py-2`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.isOwn ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <Paperclip size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <Smile size={20} className="text-gray-600 dark:text-gray-300" />
                  </button>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
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
