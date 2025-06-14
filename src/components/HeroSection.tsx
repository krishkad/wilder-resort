"use client";
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop',
    title: 'Discover Nature\'s Luxury',
    subtitle: 'A tranquil forest retreat where sophistication meets serenity'
  },
  {
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop',
    title: 'Embrace Forest Serenity',
    subtitle: 'Where luxury accommodations meet pristine wilderness'
  },
  {
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&h=1080&fit=crop',
    title: 'Experience Premium Comfort',
    subtitle: 'Curated moments of tranquility in nature\'s embrace'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-svh overflow-hidden">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes parallax {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .parallax-bg {
            animation: parallax 6s ease-in-out infinite alternate;
          }
        `}
      </style>

      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center parallax-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>
        ))}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-gold-400/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-32 right-20 w-6 h-6 bg-cream-200/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-gold-400/50 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-cream-100 mb-8 font-light leading-relaxed">
            {heroSlides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gold-400 hover:bg-gold-500 text-forest-900 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Book Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-cream-100 text-black hover:bg-cream-100 hover:text-forest-800 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Explore Rooms
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gold-400 scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white text-4xl font-light transition-colors duration-300"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % heroSlides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white text-4xl font-light transition-colors duration-300"
      >
        ›
      </button>
    </section>
  );
};

export default HeroSection;