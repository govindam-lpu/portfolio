import { useState, useEffect, useRef } from 'react';
import { Camera, Music, Utensils, Sparkles } from 'lucide-react';

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

  const hobbies = [
    {
      id: 1,
      title: "Photography",
      description: "Capturing moments and stories through my lens",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=300&fit=crop",
      icon: Camera,
      category: "Creative"
    },
    {
      id: 2,
      title: "Cooking",
      description: "Experimenting with flavors and creating culinary experiences",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      icon: Utensils,
      category: "Culinary"
    },
    {
      id: 3,
      title: "Guitar",
      description: "Creating melodies and expressing emotions through music",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
      icon: Music,
      category: "Music"
    },
    {
      id: 4,
      title: "Card Magic",
      description: "Mastering the art of illusion and sleight of hand",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop",
      icon: Sparkles,
      category: "Magic"
    }
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

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.id}
              className={`group transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl bg-surface-elevated border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/20">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 p-2 bg-surface/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <hobby.icon className="h-5 w-5 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {hobby.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {hobby.title}
                  </h3>
                  
                  <p className="text-text-subtle text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className={`mt-12 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="text-text-subtle text-sm max-w-xl mx-auto">
            These hobbies fuel my creativity and bring fresh perspectives to my technical work, 
            helping me approach problems with innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;