import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Reusable scroll-fade wrapper
const ScrollFadeWrapper = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="pt-20 px-6">
      {/* Hero Section */}
      <ScrollFadeWrapper>
        <section className="py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-transparent bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to create something amazing together? Let's discuss your vision and bring it to life
            </p>
          </div>
        </section>
      </ScrollFadeWrapper>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollFadeWrapper delay={0.1}>
            <GlassCard>
              <h2 className="text-3xl font-bold text-white mb-6">
                Send Us a <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Event Type</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                    >
                      <option value="" disabled>Select Event Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="photography">Photography Session</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-none"
                    placeholder="Tell us about your vision and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30 flex items-center justify-center space-x-2 font-semibold"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </GlassCard>
          </ScrollFadeWrapper>

          {/* Contact Info & More */}
          <div className="space-y-8">
            <ScrollFadeWrapper delay={0.2}>
              <GlassCard>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Contact <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Information</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-white/80">+91 98765 43210</p>
                      <p className="text-white/80">+91 87654 32109</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-white/80">hello@vibgyorevents.com</p>
                      <p className="text-white/80">info@vibgyorevents.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-white/80">
                        123 Rainbow Street,<br />
                        Creative District,<br />
                        Mumbai, Maharashtra 400001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Business Hours</p>
                      <p className="text-white/80">Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p className="text-white/80">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollFadeWrapper>

            <ScrollFadeWrapper delay={0.3}>
              <GlassCard>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Follow <span className="text-transparent bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text">Us</span>
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:scale-110 transition-all">
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:scale-110 transition-all">
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a href="#" className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:scale-110 transition-all">
                    <Twitter className="h-6 w-6 text-white" />
                  </a>
                </div>
              </GlassCard>
            </ScrollFadeWrapper>

            <ScrollFadeWrapper delay={0.4}>
              <GlassCard>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Quick <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">Response</span>
                </h3>
                <p className="text-white/80 mb-4">
                  Need immediate assistance? We're here to help!
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:scale-105 text-white rounded-lg font-semibold">
                  WhatsApp Us Now
                </button>
              </GlassCard>
            </ScrollFadeWrapper>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <ScrollFadeWrapper delay={0.5}>
        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <GlassCard>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Find <span className="text-transparent bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text">Us</span>
              </h2>
              <div className="aspect-video bg-gradient-to-br from-violet-500/20 via-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-white/80">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-violet-400" />
                  <p className="text-lg">Interactive Map Coming Soon</p>
                  <p className="text-sm">123 Rainbow Street, Creative District, Mumbai</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </ScrollFadeWrapper>
    </div>
  );
};

export default Contact;
