import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Download, Check, Sparkles, Lock } from 'lucide-react';
import FloatingAvatar from './FloatingAvatar';

const HomePage = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              MINDSHIFT
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-sm font-medium text-gray-900 hover:text-purple-600 transition">Home</Link>
              <Link to="/collections" className="text-sm font-medium hover:text-purple-600 transition">Collections</Link>
            </nav>

            <button 
              onClick={() => setShowCart(!showCart)}
              className="relative hover:text-purple-600 transition"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                The
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Burnout Fix
                </span>
              </h1>
              
              <p className="text-2xl text-gray-700 font-medium">
                Recover Your Energy in 7 Days
              </p>

              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                ✨ NEW RELEASE • Digital Download • Instant Access
              </div>
              
              <p className="text-xl text-gray-600">
                A science-backed system to reclaim your life without quitting everything. Includes FREE 30-day recovery planners!
              </p>

              {/* Social Proof */}
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">5.0/5</span>
                <span className="text-gray-500">(5+ reviews)</span>
              </div>

              {/* What's Included */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Check className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">50-page comprehensive guide with science-backed techniques</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">FREE 30-Day Recovery Planner (Professional & Cute editions)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Instant download - start your recovery today</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Optimized for e-readers, tablets, and printing</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="space-y-6">
                {/* VALUE STACK BOX */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-purple-200">
                    <span className="font-semibold text-gray-700">What You Get:</span>
                    <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full font-bold">COMPLETE BUNDLE</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">The Burnout Fix Ebook</p>
                        <p className="text-sm text-gray-600">50-page comprehensive recovery guide</p>
                      </div>
                      <span className="font-bold text-gray-700">$21.99</span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">30-Day Recovery Planner (Professional Edition)</p>
                        <p className="text-sm text-gray-600">53-page daily tracking system</p>
                      </div>
                      <span className="font-bold text-gray-700">$12.99</span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">30-Day Recovery Planner (Cute Edition)</p>
                        <p className="text-sm text-gray-600">53-page alternative style planner</p>
                      </div>
                      <span className="font-bold text-gray-700">$12.99</span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Multiple Format Downloads</p>
                        <p className="text-sm text-gray-600">Letter, A4, and e-ink optimized versions</p>
                      </div>
                      <span className="font-bold text-gray-700">FREE</span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Lifetime Access & Updates</p>
                        <p className="text-sm text-gray-600">Download anytime, get future improvements</p>
                      </div>
                      <span className="font-bold text-gray-700">FREE</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t-2 border-purple-300">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-700">Total Value:</span>
                      <span className="text-2xl font-bold text-gray-400 line-through">$47.97</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm opacity-90">Your Price Today:</p>
                        <p className="text-4xl font-bold">$21.99</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold">54% OFF</p>
                        <p className="text-sm opacity-90">You Save $25.98</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg rounded-full font-semibold hover:shadow-2xl transition transform hover:-translate-y-1">
                  Get Instant Access - $21.99
                </button>

                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Download size={16} className="mr-2" />
                    Instant Download
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="mr-2 text-green-600" />
                    30-Day Guarantee
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Book Cover Image */}
            <div className="relative lg:sticky lg:top-24">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Replace this URL with your book cover image */}
                <img 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80" 
                  alt="The Burnout Fix Book Cover"
                  className="w-full h-auto"
                />
              </div>

              {/* Optional floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Sparkles className="text-purple-600" size={24} />
                  <div>
                    <p className="font-bold text-2xl">156</p>
                    <p className="text-sm text-gray-600">Pages Total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-6">
            🚀 COMING SOON
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            More Life-Changing Guides
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              In Development
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Our team is rigorously testing additional guides on productivity, focus, anxiety management, and more. Be the first to know when they launch!
          </p>

          {/* Teaser Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">The Anxiety Toolkit</h3>
              <p className="text-gray-600">Grounding exercises and nervous system regulation</p>
              <p className="text-sm text-purple-600 font-semibold mt-4">Testing Phase</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Atomic Focus</h3>
              <p className="text-gray-600">ADHD-friendly productivity that actually works</p>
              <p className="text-sm text-purple-600 font-semibold mt-4">Testing Phase</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Energy Alchemy</h3>
              <p className="text-gray-600">Master your natural energy cycles</p>
              <p className="text-sm text-purple-600 font-semibold mt-4">Testing Phase</p>
            </div>
          </div>

          <Link 
            to="/collections"
            className="inline-block px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition"
          >
            Browse All Collections
          </Link>
        </div>
      </section>

      {/* Elite Methods Section */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              THE TRUTH ABOUT BURNOUT RECOVERY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Same Methods
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Millionaires Pay Thousands For
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elite executives and high-performers don't just "power through" burnout. They use science-backed protocols that actually work. Now you can too—without the $10K price tag.
            </p>
          </div>

          {/* The Reality */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Here's What the Wealthy Know (That You Don't):</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">$500-2K</div>
                <p className="text-sm text-gray-600">Per session with elite burnout coaches</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">$10K+</div>
                <p className="text-sm text-gray-600">Executive wellness retreats</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">$50K+</div>
                <p className="text-sm text-gray-600">Annual corporate wellness programs</p>
              </div>
            </div>

            <p className="text-center text-gray-700 text-lg font-medium">
              They're all teaching the same protocols you'll find in this $21.99 guide.
            </p>
          </div>

          {/* Tested By Our Team */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-2 border-purple-200">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <Check className="text-white" size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Tested & Verified By Our Own Team</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We didn't just compile random advice. Every technique in this guide was rigorously tested by our team over 6 months. The results? <span className="font-bold text-purple-600">Measurable improvements in energy, focus, and emotional regulation within the first week.</span>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Sparkles className="text-purple-600" size={24} />
                  <h4 className="font-bold text-lg">Simple & Efficient</h4>
                </div>
                <p className="text-gray-600">
                  No complicated protocols. No expensive equipment. Just straightforward methods that fit into your actual life—not some idealized version of it.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Star className="text-purple-600 fill-purple-600" size={24} />
                  <h4 className="font-bold text-lg">Science-Backed</h4>
                </div>
                <p className="text-gray-600">
                  Every technique is based on peer-reviewed research in neuroscience, psychology, and behavioral medicine. This isn't wellness fluff—it's proven methodology.
                </p>
              </div>
            </div>
          </div>

          {/* The Bottom Line */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                You Don't Have to Be Rich to Have Access to Elite Mental Health Strategies
              </h3>
              <p className="text-lg opacity-95 mb-6">
                You just need to know what they're being told. And now you do.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm opacity-90">
                <Lock size={16} />
                <span>The same protocols. A fraction of the cost. Instant access.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Why The Burnout Fix Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-4">7</div>
              <h3 className="text-xl font-bold mb-2">Days</h3>
              <p className="text-gray-600">Step-by-step daily system for rapid recovery</p>
            </div>
            
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-4">50+</div>
              <h3 className="text-xl font-bold mb-2">Techniques</h3>
              <p className="text-gray-600">Science-backed methods that actually work</p>
            </div>
            
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-4">30</div>
              <h3 className="text-xl font-bold mb-2">Day Planner</h3>
              <p className="text-gray-600">Free bonus to maintain your progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Reclaim Your Energy?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Download The Burnout Fix now and start your 7-day recovery journey today
          </p>
          <button className="px-12 py-5 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            Get Instant Access - $21.99
          </button>
          <p className="text-white/80 mt-6 text-sm">
            30-day money-back guarantee • Instant digital delivery
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 MINDSHIFT • All Rights Reserved</p>
        </div>
      </footer>

      {/* Floating Avatar */}
      <FloatingAvatar />
    </div>
  );
};

export default HomePage;
