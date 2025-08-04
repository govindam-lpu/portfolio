import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "Working with this developer was exceptional. The AI chatbot integration exceeded our expectations and significantly improved our customer service efficiency."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO at StartupXYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "The trade prediction model delivered remarkable accuracy. The technical expertise and attention to detail in the implementation was truly impressive."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director at HealthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Our WordPress website was transformed into a powerful platform. The SEO optimization and user experience improvements drove significant business growth."
    },
    {
      id: 4,
      name: "David Park",
      position: "Founder at InnovateLab",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "The React dashboard for our climate data was both beautiful and functional. Complex data visualization made simple and intuitive for our team."
    }
  ];

  useEffect(() => {
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 px-6 bg-surface-elevated">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center justify-center mb-8">
            <span className="section-number">06</span>
            <div className="w-16 h-0.5 bg-accent ml-4"></div>
          </div>
          <h2 className="section-title">Client Testimonials</h2>
          <p className="text-lg text-text-subtle max-w-2xl mx-auto">
            What clients and collaborators say about working with me
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <Card className="relative p-8 md:p-12 border-border bg-surface overflow-hidden">
            {/* Background Quote */}
            <Quote className="absolute top-6 right-6 h-12 w-12 text-accent/10" />
            
            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-accent/20 hover-lift">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full border-2 border-surface"></div>
                </div>
                
                {/* Client Info */}
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-semibold mb-1">{testimonials[currentIndex].name}</h4>
                  <p className="text-accent font-medium">{testimonials[currentIndex].position}</p>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl leading-relaxed text-text-subtle italic text-center">
                "{testimonials[currentIndex].text}"
              </blockquote>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface border border-border hover:border-accent hover:bg-surface-elevated transition-all group"
          >
            <ChevronLeft className="h-5 w-5 mx-auto text-text-subtle group-hover:text-accent transition-colors" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface border border-border hover:border-accent hover:bg-surface-elevated transition-all group"
          >
            <ChevronRight className="h-5 w-5 mx-auto text-text-subtle group-hover:text-accent transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className={`flex justify-center mt-8 gap-3 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                index === currentIndex 
                  ? 'bg-accent shadow-lg shadow-accent/30' 
                  : 'bg-border hover:bg-accent/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;