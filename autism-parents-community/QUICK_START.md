# Quick Start Guide

## Get Your Community Platform Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Database
```bash
npm run prisma:push
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open Your Browser
Visit: **http://localhost:3000**

## What You'll See

### Landing Page (/)
- Beautiful hero section welcoming parents
- Feature highlights for sharing stories, community support, and resources
- Login and registration links

### Create an Account (/auth/register)
1. Click "Join Community"
2. Fill in your name, email, and password
3. You'll be automatically logged in and redirected to the dashboard

### Dashboard (/dashboard)
- Welcome message
- Quick action cards:
  - Share Your Story
  - Join Discussion
  - Find Resources
  - My Profile
- Recent stories from the community
- Community guidelines reminder

### Share a Story (/stories/new)
1. Click "Share Your Story" from dashboard
2. Write a meaningful title
3. Share your experience
4. Add optional tags
5. Publish to the community

### Browse Stories (/stories)
- View all published stories
- See likes and comments count
- Filter by tags
- Read others' experiences

### Resources (/resources)
- Browse by category:
  - Therapy & Interventions
  - Education
  - Legal Rights
  - Financial Support
  - Support Services
- Curated, helpful resources for parents

### Community (/community)
- Community discussions
- Questions and answers
- See engagement metrics
- Start new discussions

## Test Accounts

Since this is a fresh install, create your first account by registering!

## Key Features to Try

1. **Register a new account** - Test the authentication flow
2. **Share your first story** - Create meaningful content
3. **Browse resources** - Explore the categories
4. **Navigate the community** - See sample discussions

## Customization Tips

### Change Colors
Edit `tailwind.config.js` to customize the color scheme

### Add More Resources
Edit `src/app/resources/page.tsx` to add real resource links

### Modify Categories
Update category arrays in resource and community pages

## Production Deployment

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables to Set
- `DATABASE_URL` - Your production database
- `NEXTAUTH_SECRET` - Random secure string
- `JWT_SECRET` - Another random secure string
- `NEXTAUTH_URL` - Your production URL

## Need Help?

Check the main README.md for:
- Detailed architecture
- API documentation
- Database schema
- Security features
- Future enhancements

## Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Reset database
npm run prisma:push

# Generate Prisma client
npm run prisma:generate
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill
```

### Database Issues
```bash
# Reset database
rm prisma/dev.db
npm run prisma:push
```

### Node Modules Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. Customize the landing page content
2. Add real resource links
3. Set up production database (PostgreSQL recommended)
4. Configure email notifications (future enhancement)
5. Add content moderation tools
6. Implement admin dashboard

---

Welcome to your Autism Parents Community Platform! 🎉
