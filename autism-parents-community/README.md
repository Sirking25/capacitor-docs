# Autism Parents Community Platform

A safe, supportive online community platform for parents of children with autism to share stories, connect with others, and access valuable resources.

## Features

### Core Functionality
- **User Authentication**: Secure registration and login system
- **Story Sharing**: Parents can write and share their personal experiences
- **Community Discussions**: Forum-style discussions for questions and advice
- **Resource Library**: Curated resources on therapy, education, legal rights, and support services
- **User Profiles**: Personalized profiles for community members
- **Interactive Features**: Like, comment, and engage with stories and posts

### Key Highlights
- Clean, accessible design with calming color palette
- Mobile-responsive interface
- Safe and moderated environment
- Privacy-focused approach
- Built with modern web technologies

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Database**: SQLite with Prisma ORM
- **Authentication**: JWT-based auth with bcrypt
- **Styling**: Tailwind CSS
- **Deployment Ready**: Vercel-optimized

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd autism-parents-community
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-change-in-production"
NEXTAUTH_URL="http://localhost:3000"
JWT_SECRET="your-jwt-secret-change-in-production"
```

4. Initialize the database:
```bash
npm run prisma:push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
autism-parents-community/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── auth/         # Authentication endpoints
│   │   │   └── stories/      # Stories CRUD endpoints
│   │   ├── auth/             # Auth pages (login, register)
│   │   ├── dashboard/        # User dashboard
│   │   ├── stories/          # Story pages
│   │   ├── resources/        # Resources page
│   │   ├── community/        # Community discussions
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Landing page
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   └── Navbar.tsx        # Navigation component
│   └── lib/
│       ├── auth.ts           # Auth utilities
│       └── prisma.ts         # Prisma client
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Database Schema

The platform uses the following data models:

- **User**: User accounts with profile information
- **Story**: Personal stories shared by parents
- **Post**: Community discussion posts
- **Comment**: Comments on stories and posts
- **Like**: Like interactions on content
- **Resource**: Curated resources and information

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:push` - Push schema changes to database

## Features in Detail

### Authentication System
- Secure password hashing with bcrypt
- JWT token-based authentication
- Protected routes requiring authentication
- Session management via localStorage

### Story Sharing
- Rich text story creation
- Tag-based categorization
- Like and comment functionality
- Author attribution
- Featured stories capability

### Resources Section
- Categorized resources:
  - Therapy & Interventions
  - Education
  - Legal Rights
  - Financial Support
  - Support Services
- Filtered browsing by category
- External links to helpful resources

### Community Features
- Discussion forums
- Question and answer format
- Real-time interaction indicators
- Community guidelines enforcement

## Security Features

- Password requirements (minimum 8 characters)
- JWT token expiration
- SQL injection protection via Prisma
- XSS protection through React
- CSRF protection in API routes
- Input validation and sanitization

## Customization

### Colors
The platform uses a calming color scheme. You can modify colors in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Blue tones */ },
  calm: { /* Green tones */ },
}
```

### Database
To switch from SQLite to PostgreSQL or MySQL, update the `datasource` in `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="strong-random-secret"
NEXTAUTH_URL="https://yourdomain.com"
JWT_SECRET="another-strong-random-secret"
```

## Future Enhancements

Potential features to add:
- Real-time chat functionality
- Private messaging between users
- Event calendar for support groups
- Professional directory (therapists, doctors)
- Mobile app (React Native)
- Admin dashboard for moderation
- Email notifications
- Advanced search and filtering
- Multi-language support
- Accessibility improvements (screen reader optimization)

## Community Guidelines

This platform is built with the following principles:
- **Safety First**: Moderated content and respectful interactions
- **Privacy**: User data protection and anonymity options
- **Support**: Empathy and understanding in all interactions
- **Inclusivity**: Welcoming to all families regardless of background
- **Evidence-Based**: Resources verified for accuracy

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: [your-contact-info]

## License

MIT License - feel free to use this project for your community needs.

## Acknowledgments

Built with love and understanding for parents navigating the autism journey. This platform aims to reduce isolation and provide meaningful support to families who need it most.

---

**Note**: This is a community support platform. Always consult with healthcare professionals for medical advice and treatment decisions.
