import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Star, Calendar, ArrowRight, Play, Sparkles } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import LoadingSpinner from '../components/LoadingSpinner';
import ScrollFadeIn from '../components/ScrollFadeIn';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner />
          <div className="mt-4 text-white/80 text-lg">Loading VIBGYOR Experience...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <ScrollFadeIn>
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8 animate-pulse">
              <Sparkles className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 via-green-400 via-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                VIBGYOR
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Creating <span className="text-transparent bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-semibold">magical moments</span> through professional event management and stunning photography
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services">
                <button className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30 flex items-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link to="/portfolio">
                <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>View Portfolio</span>
                </button>
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-3">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <GlassCard className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <AnimatedCounter end={500} label="Events Managed" />
                <AnimatedCounter end={1000} label="Photos Captured" />
                <AnimatedCounter end={250} label="Happy Clients" />
                <AnimatedCounter end={5} label="Years Experience" />
              </div>
            </GlassCard>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">Services</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                From intimate gatherings to grand celebrations, we bring your vision to life
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollFadeIn delay={0.1}>
              <GlassCard className="text-center">
                <div className="bg-gradient-to-r from-violet-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Event Planning</h3>
                <p className="text-white/80">Complete event management from concept to execution</p>
              </GlassCard>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <GlassCard className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Photography</h3>
                <p className="text-white/80">Professional photography capturing every precious moment</p>
              </GlassCard>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.3}>
              <GlassCard className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Premium Experience</h3>
                <p className="text-white/80">Luxury services tailored to create unforgettable memories</p>
              </GlassCard>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-6">
        <ScrollFadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <GlassCard>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Magic</span>?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Let's discuss your vision and bring it to life with our expertise
              </p>
              <Link to="/contact">
                <button className="px-10 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 text-lg font-semibold">
                  Get Started Today
                </button>
              </Link>
            </GlassCard>
          </div>
        </ScrollFadeIn>
      </section>
    </div>
  );
};

export default Home;
