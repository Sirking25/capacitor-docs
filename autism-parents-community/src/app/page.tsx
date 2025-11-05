import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-calm-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary-700">
              Autism Parents Community
            </h1>
            <div className="space-x-4">
              <Link href="/auth/login" className="text-gray-600 hover:text-primary-600">
                Login
              </Link>
              <Link href="/auth/register" className="btn-primary">
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            You Are Not Alone
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A safe, supportive space for parents of children with autism to connect,
            share experiences, and access valuable resources together.
          </p>
          <Link href="/auth/register" className="btn-primary text-lg px-8 py-3">
            Join Our Community
          </Link>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-2">Share Stories</h3>
            <p className="text-gray-600">
              Share your journey, celebrate milestones, and connect with parents
              who understand your experiences.
            </p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">
              Ask questions, offer advice, and build meaningful connections with
              other parents in the community.
            </p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Resources & Info</h3>
            <p className="text-gray-600">
              Access curated resources about therapy, education, legal rights,
              and support services.
            </p>
          </div>
        </div>

        {/* Why Join Section */}
        <div className="mt-20 bg-white rounded-xl shadow-lg p-10">
          <h3 className="text-3xl font-bold text-center mb-8">Why Join Our Community?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">✓</div>
              <div>
                <h4 className="font-semibold mb-2">Safe & Supportive Environment</h4>
                <p className="text-gray-600">A moderated space where understanding and respect come first</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">✓</div>
              <div>
                <h4 className="font-semibold mb-2">Real Experiences</h4>
                <p className="text-gray-600">Learn from parents who have walked similar paths</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">✓</div>
              <div>
                <h4 className="font-semibold mb-2">Verified Resources</h4>
                <p className="text-gray-600">Access reliable information and trusted recommendations</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">✓</div>
              <div>
                <h4 className="font-semibold mb-2">Always Available</h4>
                <p className="text-gray-600">Connect with the community whenever you need support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Autism Parents Community. Built with love and understanding.</p>
            <div className="mt-4 space-x-4">
              <Link href="/about" className="hover:text-primary-600">About</Link>
              <Link href="/guidelines" className="hover:text-primary-600">Community Guidelines</Link>
              <Link href="/privacy" className="hover:text-primary-600">Privacy</Link>
              <Link href="/contact" className="hover:text-primary-600">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
