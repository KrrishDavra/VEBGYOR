import React, { useState } from 'react';
import { Play, Eye, Heart, Star } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollFadeIn from '../components/ScrollFadeIn'; // ✅ Import added

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'birthdays', name: 'Birthdays' },
    { id: 'photography', name: 'Photography' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Royal Wedding at Palace Gardens',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      type: 'Wedding',
      likes: 245
    },
    {
      id: 2,
      category: 'corporate',
      title: 'Tech Conference 2024',
      image: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg',
      type: 'Corporate',
      likes: 189
    },
    {
      id: 3,
      category: 'photography',
      title: 'Pre-wedding Shoot',
      image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg',
      type: 'Photography',
      likes: 324
    },
    {
      id: 4,
      category: 'birthdays',
      title: 'Princess Birthday Party',
      image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg',
      type: 'Birthday',
      likes: 156
    },
    {
      id: 5,
      category: 'weddings',
      title: 'Beach Wedding Ceremony',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
      type: 'Wedding',
      likes: 278
    },
    {
      id: 6,
      category: 'photography',
      title: 'Family Portrait Session',
      image: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg',
      type: 'Photography',
      likes: 203
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20 px-6">
      
      {/* Hero Section */}
      <ScrollFadeIn delay={0.1}>
        <section className="py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text">Portfolio</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of beautiful moments and successful events we've crafted for our clients
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Category Filter */}
      <ScrollFadeIn delay={0.2}>
        <section className="py-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === category.id
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/30'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/20 hover:text-white'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Portfolio Grid */}
      <ScrollFadeIn delay={0.3}>
        <section className="py-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-xl">
                  <div className="aspect-square relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex space-x-4">
                          <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                            <Eye className="h-6 w-6 text-white" />
                          </button>
                          <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                            <Play className="h-6 w-6 text-white" />
                          </button>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                            <p className="text-white/80 text-sm">{item.type}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Heart className="h-4 w-4 text-red-400" />
                            <span className="text-white text-sm">{item.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Stats Section */}
      <ScrollFadeIn delay={0.4}>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <GlassCard className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <AnimatedCounter end={500} label="Events Managed" />
                <AnimatedCounter end={1000} label="Photos Captured" />
                <AnimatedCounter end={250} label="Happy Clients" />
                <AnimatedCounter end={5} label="Years Experience" />
              </div>
            </GlassCard>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Testimonials */}
      <ScrollFadeIn delay={0.5}>
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Client <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">Testimonials</span>
              </h2>
              <p className="text-white/80 text-lg">What our clients say about our work</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya & Arjun",
                  event: "Wedding",
                  text: "VIBGYOR made our dream wedding come true! Every detail was perfect, and the photos are absolutely stunning.",
                  rating: 5
                },
                {
                  name: "Tech Corp India",
                  event: "Corporate Event",
                  text: "Professional, reliable, and creative. They handled our product launch flawlessly and exceeded expectations.",
                  rating: 5
                },
                {
                  name: "The Sharma Family",
                  event: "Birthday Party",
                  text: "Our daughter's birthday party was magical! The decorations and photography were beyond our imagination.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <GlassCard key={index}>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.event}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
};

export default Portfolio;
