import React from 'react';
import { Heart, Award, Users, Target } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import ScrollFadeIn from '../components/ScrollFadeIn';

const About = () => {
  return (
    <div className="pt-20 px-6">
      
      {/* Hero Section */}
      <ScrollFadeIn delay={0.1}>
        <section className="py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text">VIBGYOR</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We are passionate storytellers who believe every event deserves to be remembered in all its colorful glory
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Story Section */}
      <ScrollFadeIn delay={0.2}>
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">Story</span>
                </h2>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  Founded with a vision to capture life's most precious moments, VIBGYOR represents the full spectrum of emotions and colors that make each event unique. Like a rainbow after the storm, we believe every celebration should be vibrant, memorable, and full of joy.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Our team combines artistic vision with technical expertise to deliver exceptional event management and photography services that exceed expectations.
                </p>
              </div>
              <GlassCard>
                <div className="aspect-square bg-gradient-to-br from-violet-500/20 via-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="h-16 w-16 text-pink-400 mx-auto mb-4" />
                    <p className="text-white text-lg">Crafting memories with love</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Values Section */}
      <ScrollFadeIn delay={0.3}>
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Values</span>
              </h2>
              <p className="text-white/80 text-lg">Principles that guide every project we undertake</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <GlassCard className="text-center">
                <div className="bg-gradient-to-r from-violet-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-white/80">Delivering the highest quality in every aspect of our work</p>
              </GlassCard>

              <GlassCard className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                <p className="text-white/80">Working closely with clients to bring their vision to life</p>
              </GlassCard>

              <GlassCard className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Passion</h3>
                <p className="text-white/80">Genuine love for creating beautiful, memorable experiences</p>
              </GlassCard>

              <GlassCard className="text-center">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Precision</h3>
                <p className="text-white/80">Attention to detail in every moment we capture</p>
              </GlassCard>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Team Section */}
      <ScrollFadeIn delay={0.4}>
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Meet Our <span className="text-transparent bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text">Team</span>
              </h2>
              <p className="text-white/80 text-lg">Creative professionals dedicated to your success</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <GlassCard className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">AS</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Arjun Shah</h3>
                <p className="text-violet-400 mb-3">Creative Director</p>
                <p className="text-white/80 text-sm">Leading our creative vision with 8+ years of experience in event design</p>
              </GlassCard>

              <GlassCard className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">PK</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Priya Kapoor</h3>
                <p className="text-green-400 mb-3">Lead Photographer</p>
                <p className="text-white/80 text-sm">Capturing emotions and moments with artistic flair and technical excellence</p>
              </GlassCard>

              <GlassCard className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">RG</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rahul Gupta</h3>
                <p className="text-orange-400 mb-3">Event Coordinator</p>
                <p className="text-white/80 text-sm">Ensuring flawless execution of every detail, from planning to completion</p>
              </GlassCard>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      
    </div>
  );
};

export default About;
