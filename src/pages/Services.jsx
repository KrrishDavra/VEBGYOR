import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Calendar, Camera, Users, Star, Crown, Heart } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import ScrollFadeIn from '../components/ScrollFadeIn'; // ✅ Import scroll animation

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Wedding Planning",
      description: "Complete wedding planning and coordination services",
      features: ["Venue Selection", "Vendor Coordination", "Timeline Management", "Day-of Coordination"],
      highlight: "Most Popular",
      gradient: "from-pink-500 to-rose-500",
      price: "Starting from ₹50,000"
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional photography and videography services",
      features: ["Pre-wedding Shoots", "Event Coverage", "Drone Photography", "Photo Editing"],
      highlight: "Best for Memories",
      gradient: "from-blue-500 to-cyan-500",
      price: "Starting from ₹25,000"
    },
    {
      icon: Users,
      title: "Corporate Events",
      description: "Professional corporate event management",
      features: ["Conference Planning", "Team Building", "Product Launches", "Networking Events"],
      highlight: "Corporate Trusted",
      gradient: "from-green-500 to-emerald-500",
      price: "Starting from ₹30,000"
    },
    {
      icon: Star,
      title: "Birthday Parties",
      description: "Memorable birthday celebrations for all ages",
      features: ["Theme Decoration", "Entertainment", "Catering Coordination", "Photography"],
      highlight: "Kids’ Favorite",
      gradient: "from-yellow-500 to-orange-500",
      price: "Starting from ₹15,000"
    },
    {
      icon: Crown,
      title: "Luxury Events",
      description: "Premium event experiences with luxury touches",
      features: ["High-end Venues", "Premium Catering", "Luxury Transportation", "VIP Services"],
      highlight: "Exclusive",
      gradient: "from-purple-500 to-violet-500",
      price: "Starting from ₹1,00,000"
    },
    {
      icon: Heart,
      title: "Special Occasions",
      description: "Anniversaries, engagements, and milestone celebrations",
      features: ["Custom Themes", "Intimate Settings", "Personalized Touches", "Memory Books"],
      highlight: "Intimate",
      gradient: "from-red-500 to-pink-500",
      price: "Starting from ₹20,000"
    }
  ];

  const sliderImages = [
    'https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww',
    'https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Top-10-Event-Management-Companies-In-India.jpg',
    'https://5.imimg.com/data5/SELLER/Default/2022/3/QA/MO/AY/13316212/wedding-event-planner-service.jpg',
    'https://www.troopsolutions.in/wp-content/uploads/2020/07/MICE-Event-Company-in-India.jpg'
  ];

  return (
    <div className="pt-20 px-6">
      
      {/* Hero Section */}
      <ScrollFadeIn delay={0.1}>
        <section className="py-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From intimate gatherings to grand celebrations, we offer comprehensive event management and photography services.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Image Slider Section */}
      <ScrollFadeIn delay={0.2}>
        <section className="mb-20 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop
          >
            {sliderImages.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`slide-${i}`} className="w-full h-[300px] md:h-[500px] object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </ScrollFadeIn>

      {/* Services Grid */}
      <ScrollFadeIn delay={0.3}>
        <section className="py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <GlassCard key={index} className="relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative z-10">
                    {/* Highlight Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-semibold rounded-full shadow-md">
                      {service.highlight}
                    </div>

                    <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/80 mb-6">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full"></div>
                          <span className="text-white/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-white/20 pt-4">
                      <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </GlassCard>
              );
            })}
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
};

export default Services;
