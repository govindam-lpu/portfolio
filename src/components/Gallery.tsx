import { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1556909114-4f63e8d3eb3a?w=400&h=300&fit=crop", // Cooking
    "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=500&fit=crop", // Card Magic
    "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=600&fit=crop", // Guitar
    "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=400&fit=crop", // Photography
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop", // Reading
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop", // Travel
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop", // Food
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=400&fit=crop", // Music
    "https://images.unsplash.com/photo-1471919743851-c4df8b6ee606?w=400&h=600&fit=crop", // Nature
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop", // Art
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop", // Mountain
    "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400&h=400&fit=crop", // Gaming
    "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&h=300&fit=crop", // Fitness
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=500&fit=crop", // Coffee
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=400&fit=crop"  // Music Production
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center justify-center mb-8">
            <span className="section-number">05</span>
            <div className="w-16 h-0.5 bg-accent ml-4"></div>
          </div>
          <h2 className="section-title">My Hobbies & Interests</h2>
          <p className="text-lg text-text-subtle max-w-2xl mx-auto">
            Beyond coding and consulting, I explore creativity through various passions that 
            keep me inspired and balanced.
          </p>
        </div>

        {/* Photo Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 auto-rows-auto">
          {images.map((image, index) => {
            // Create varied sizes for collage effect
            const getGridClasses = (index: number) => {
              const patterns = [
                'col-span-1 row-span-1',
                'col-span-2 row-span-1', 
                'col-span-1 row-span-2',
                'col-span-1 row-span-1',
                'col-span-2 row-span-2',
                'col-span-1 row-span-1',
                'col-span-1 row-span-2',
                'col-span-2 row-span-1',
                'col-span-1 row-span-1',
                'col-span-1 row-span-1',
                'col-span-2 row-span-1',
                'col-span-1 row-span-2',
                'col-span-1 row-span-1',
                'col-span-2 row-span-1',
                'col-span-1 row-span-1'
              ];
              return patterns[index % patterns.length];
            };

            return (
              <div
                key={index}
                className={`${getGridClasses(index)} group relative overflow-hidden rounded-xl transform transition-all duration-700 hover:scale-105 hover:z-10 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 80}ms` : '0ms' 
                }}
              >
                <div className="aspect-square w-full h-full min-h-[150px]">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;