"use client";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useState } from 'react';

const roomCategories = ['All', 'Luxurious Rooms', 'Suites', 'Homely Villa', 'Dormitory'];
const sortOptions = ['Price ↑', 'Price ↓', 'Guest Rating', 'Size'];

const roomsData = [
  {
    id: 1,
    name: 'Forest View Deluxe',
    category: 'Luxurious Rooms',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop',
    description: 'Elegant room with panoramic forest views',
    price: 245,
    rating: 4.9,
    size: 35,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Treetop Executive Suite',
    category: 'Suites',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop',
    description: 'Luxury suite with private balcony overlooking canopy',
    price: 485,
    rating: 4.8,
    size: 65,
    badge: null
  },
  {
    id: 3,
    name: 'Woodland Family Villa',
    category: 'Homely Villa',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600&h=400&fit=crop',
    description: 'Spacious villa perfect for families and groups',
    price: 675,
    rating: 4.7,
    size: 120,
    badge: null
  },
  {
    id: 4,
    name: 'Eco-Friendly Dormitory',
    category: 'Dormitory',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
    description: 'Sustainable shared accommodation for conscious travelers',
    price: 85,
    rating: 4.5,
    size: 15,
    badge: 'New'
  },
  {
    id: 5,
    name: 'Lakeside Premium Suite',
    category: 'Suites',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
    description: 'Luxury suite with direct lake access',
    price: 545,
    rating: 4.9,
    size: 85,
    badge: null
  },
  {
    id: 6,
    name: 'Mountain View Standard',
    category: 'Luxurious Rooms',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
    description: 'Comfortable room with stunning mountain vistas',
    price: 195,
    rating: 4.6,
    size: 28,
    badge: null
  }
];

const RoomsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Guest Rating');
  const [filteredRooms, setFilteredRooms] = useState(roomsData);

  React.useEffect(() => {
    let filtered = selectedCategory === 'All' 
      ? roomsData 
      : roomsData.filter(room => room.category === selectedCategory);

    // Sort the filtered rooms
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'Price ↑':
          return a.price - b.price;
        case 'Price ↓':
          return b.price - a.price;
        case 'Guest Rating':
          return b.rating - a.rating;
        case 'Size':
          return b.size - a.size;
        default:
          return 0;
      }
    });

    setFilteredRooms(filtered);
  }, [selectedCategory, sortBy]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1444px] mx-auto px-8 max-md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Rooms & Suites
          </h2>
          <p className="text-xl text-forest-600 max-w-2xl mx-auto">
            Each accommodation is thoughtfully designed to provide the perfect blend of comfort and luxury
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {roomCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-forest-600 text-white shadow-lg'
                    : 'bg-cream-100 text-forest-700 hover:bg-cream-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <div
              key={room.id}
              className="group bg-white rounded-xl shadow-luxury hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {room.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                    room.badge === 'Best Seller' 
                      ? 'bg-gold-400 text-forest-900' 
                      : 'bg-forest-600 text-white'
                  }`}>
                    {room.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-forest-900 mb-2">
                  {room.name}
                </h3>
                <p className="text-forest-600 mb-4 text-sm">
                  {room.description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4 text-sm text-forest-500">
                    <span>★ {room.rating}</span>
                    <span>{room.size}m²</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-forest-900">
                      ${room.price}
                    </span>
                    <span className="text-forest-500 text-sm block">per night</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white transition-all duration-300 hover:scale-105"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;