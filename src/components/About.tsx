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
    <section id="about" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <span className="section-number">02</span>
            <div className="w-16 h-0.5 bg-accent ml-4"></div>
          </div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}

          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="space-y-6">
              <p className="text-lg text-text-subtle leading-relaxed">
                I'm a Developer & Technical Consultant at One Profit, where I build machine-learning 
                trade prediction models in Python to guide financial decisions. I've crafted responsive 
                web apps with React, Angular, and WordPress, and integrated chatbots using 
                Voiceflow, Zoho, Whatsapp API and OpenAI.
              </p>

              <p className="text-lg text-text-subtle leading-relaxed">
                Outside work, I'm passionate about cinema and TV shows, card magic, music(concerts, guitars, take your pick haha), photography/videography 
                (DaVinci Resolve, Lightroom), and travel-hobbies that fuel my creativity and motivate me to always do the best.
              </p>
            
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">12+</div>
                <div className="text-xs md:text-sm text-text-subtle mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">2</div>
                <div className="text-xs md:text-sm text-text-subtle mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">25+</div>
                <div className="text-xs md:text-sm text-text-subtle mt-1">Technologies</div>
              </div>
            </div>
          </div>

          {/* Personal Image */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative">
              <div className="aspect-square bg-gradient-warm rounded-2xl border border-border/50 overflow-hidden hover-lift">
                <img 
                  src="/lovable-uploads/5941941a-9c00-4e7e-8f82-1721f306840b.png" 
                  alt="Govindam Vats at tech event" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
