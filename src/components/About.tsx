import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Section Header */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div>
              <span className="section-number">02</span>
              <div className="w-16 h-0.5 bg-accent inline-block ml-4 mb-8"></div>
              <h2 className="section-title">About</h2>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="space-y-6">
              <p className="text-lg text-text-subtle leading-relaxed">
                <strong className="text-foreground">Philosophy:</strong> Code is poetry in motion. 
                Every line should have purpose, every function should tell a story, and every 
                application should feel like magic to the user.
              </p>
              
              <p className="text-lg text-text-subtle leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                scalable applications that don't just work—they inspire. I believe in the power 
                of clean code, thoughtful design, and continuous learning.
              </p>

              <p className="text-lg text-text-subtle leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or experimenting with creative coding and generative art.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-text-subtle mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-text-subtle mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-text-subtle mt-1">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;