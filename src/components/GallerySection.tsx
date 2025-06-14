"use client";

import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
    caption: 'Luxury forest suite with panoramic views'
  },
  {
    src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop',
    caption: 'Towering pines surrounding our resort'
  },
  {
    src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop',
    caption: 'Golden hour through ancient trees'
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    caption: 'Mountain vistas from our elevated dining'
  },
  {
    src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
    caption: 'Enchanted evening forest paths'
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
    caption: 'Pristine lake for morning meditation'
  },
  {
    src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
    caption: 'Dramatic granite peaks and valleys'
  },
  {
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&crop=top',
    caption: 'Wildlife encounters in natural habitat'
  },
  {
    src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop&crop=bottom',
    caption: 'Spa treatments in forest sanctuary'
  },
  {
    src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop&crop=top',
    caption: 'Fine dining under starlit canopy'
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=bottom',
    caption: 'Adventure trails for all levels'
  },
  {
    src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&crop=center',
    caption: 'Romantic evening by the fireplace'
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-[1444px] mx-auto px-8 max-md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-forest-600 max-w-2xl mx-auto">
            Immerse yourself in the natural beauty that surrounds our forest retreat
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-forest-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].caption}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-medium text-center">
                  {galleryImages[selectedImage].caption}
                </p>
              </div>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 text-4xl font-light transition-colors"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 text-4xl font-light transition-colors"
              >
                ›
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors"
              >
                <X size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;