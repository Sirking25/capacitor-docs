// User Types
export interface User {
  id: string
  email: string
  displayName: string
  photoURL?: string
  role: 'parent' | 'professional' | 'admin'
  bio?: string
  location?: string
  childrenAges?: number[]
  interests?: string[]
  badges?: Badge[]
  points: number
  createdAt: Date
  updatedAt: Date
}

// Post Types
export interface Post {
  id: string
  authorId: string
  author: User
  content: string
  images?: string[]
  groupId?: string
  isAnonymous: boolean
  likes: number
  comments: Comment[]
  createdAt: Date
  updatedAt: Date
}

export interface Comment {
  id: string
  postId: string
  authorId: string
  author: User
  content: string
  likes: number
  createdAt: Date
}

// Group Types
export interface Group {
  id: string
  name: string
  description: string
  coverImage?: string
  type: 'public' | 'private'
  category: string
  memberCount: number
  members: string[]
  moderators: string[]
  createdBy: string
  createdAt: Date
}

// Event Types
export interface Event {
  id: string
  title: string
  description: string
  type: 'virtual' | 'in-person'
  date: Date
  endDate?: Date
  location?: {
    address: string
    city: string
    state: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
  organizer: User
  attendees: string[]
  maxAttendees?: number
  imageUrl?: string
  tags: string[]
  createdAt: Date
}

// Resource Types
export interface Resource {
  id: string
  title: string
  description: string
  type: 'article' | 'video' | 'ebook' | 'podcast'
  url?: string
  content?: string
  category: string
  tags: string[]
  author?: string
  isPremium: boolean
  thumbnailUrl?: string
  duration?: number
  views: number
  likes: number
  createdAt: Date
}

// Message Types
export interface Message {
  id: string
  senderId: string
  sender: User
  recipientId?: string
  circleId?: string
  content: string
  attachments?: string[]
  read: boolean
  createdAt: Date
}

export interface SupportCircle {
  id: string
  name: string
  members: string[]
  createdBy: string
  createdAt: Date
}

// Marketplace Types
export interface Product {
  id: string
  title: string
  description: string
  price: number
  images: string[]
  category: string
  vendorId: string
  vendor: Vendor
  rating: number
  reviews: Review[]
  inStock: boolean
  tags: string[]
  createdAt: Date
}

export interface Vendor {
  id: string
  name: string
  description: string
  verified: boolean
  rating: number
  totalSales: number
}

export interface Review {
  id: string
  productId: string
  userId: string
  user: User
  rating: number
  comment: string
  createdAt: Date
}

// Gamification Types
export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  category: string
  earnedAt?: Date
}

export interface Achievement {
  id: string
  userId: string
  type: string
  points: number
  description: string
  createdAt: Date
}

// Dashboard Types
export interface Milestone {
  id: string
  userId: string
  childName?: string
  title: string
  description: string
  date: Date
  category: string
}

export interface JournalEntry {
  id: string
  userId: string
  content: string
  mood?: 'great' | 'good' | 'okay' | 'difficult' | 'challenging'
  childMood?: 'great' | 'good' | 'okay' | 'difficult' | 'challenging'
  tags?: string[]
  private: boolean
  createdAt: Date
}

// Admin Types
export interface Report {
  id: string
  reporterId: string
  reporter: User
  targetType: 'post' | 'comment' | 'user' | 'product'
  targetId: string
  reason: string
  description: string
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed'
  reviewedBy?: string
  createdAt: Date
  resolvedAt?: Date
}

export interface Analytics {
  totalUsers: number
  activeUsers: number
  totalPosts: number
  totalEvents: number
  totalResources: number
  userGrowth: {
    date: string
    count: number
  }[]
  engagementRate: number
}
