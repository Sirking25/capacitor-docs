import mongoose, { Schema, Model } from 'mongoose'
import { Post } from '@/types'

const CommentSchema = new Schema({
  id: { type: String, required: true },
  postId: { type: String, required: true },
  authorId: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
})

const PostSchema = new Schema<Post>({
  id: { type: String, required: true, unique: true },
  authorId: { type: String, required: true },
  content: { type: String, required: true },
  images: [{ type: String }],
  groupId: { type: String },
  isAnonymous: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
  comments: [CommentSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

PostSchema.index({ authorId: 1, createdAt: -1 })
PostSchema.index({ groupId: 1, createdAt: -1 })

export const PostModel: Model<Post> =
  mongoose.models.Post || mongoose.model<Post>('Post', PostSchema)
