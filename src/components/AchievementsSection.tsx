"use client";
import { useEffect, useRef, useState } from 'react';

const achievements = [
  { number: 1000, label: 'Five-Star Ratings', suffix: '' },
  { number: 5000, label: 'Customers Served', suffix: '' },
  { number: 1000, label: 'Corporate Events', suffix: '' },
  { number: 50, label: 'Weddings', suffix: '' }
];

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState(achievements.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateNumbers = () => {
    achievements.forEach((achievement, index) => {
      let start = 0;
      const duration = 2000;
      const increment = achievement.number / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= achievement.number) {
          start = achievement.number;
          clearInterval(timer);
        }
        
        setAnimatedNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[index] = Math.floor(start);
          return newNumbers;
        });
      }, 16);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-forest-900 text-white">
      <div className="max-w-[1444px] mx-auto px-8 max-md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cream-100">
            WE ARE PROUD OF OUR ACHIEVEMENTS
          </h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 ${
                isVisible ? 'animate-counter-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-gold-400 mb-4 font-playfair">
                {animatedNumbers[index].toLocaleString()}{achievement.suffix}
              </div>
              <div className="text-xl text-cream-200 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;