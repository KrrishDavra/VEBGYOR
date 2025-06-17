import React from 'react';
import { Camera, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Sparkles } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn'; // Make sure the path is correct

const Footer = () => {
  return (
    <footer className="relative py-10 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollFadeIn delay={0.1}>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 via-green-500 via-yellow-500 via-orange-500 to-red-500 rounded-full blur-lg opacity-60"></div>
                  <div className="relative bg-black/50 backdrop-blur-sm p-2 rounded-full border border-white/20">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 via-green-400 via-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  VIBGYOR
                </span>
                <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                Creating magical moments and capturing beautiful memories through professional event management and stunning photography. Every color of your celebration matters to us.
              </p>

              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-110 rounded-full transition-all">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-110 rounded-full transition-all">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 rounded-full transition-all">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Services', 'Portfolio', 'Contact', 'Blog', 'Testimonials'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-gradient transition-all duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-violet-400" />
                  <span className="text-white/80">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-white/80">hello@vibgyorevents.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-400 mt-1" />
                  <span className="text-white/80">
                    123 Rainbow Street,<br />
                    Creative District,<br />
                    Mumbai, Maharashtra 400001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Bottom Bar */}
        <ScrollFadeIn delay={0.4}>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60 text-sm">© 2024 VIBGYOR Events. All rights reserved.</p>
          </div>
        </ScrollFadeIn>
      </div>
    </footer>
  );
};

export default Footer;
