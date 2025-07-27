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
                I'm an AI Developer & Technical Consultant at One Profit, where I build machine-learning 
                trade prediction models in Python to guide financial decisions. I've crafted responsive 
                web apps with React, Angular, and WordPress, and integrated intelligent chatbots using 
                Voiceflow, Zoho, and OpenAI.
              </p>

              <p className="text-lg text-text-subtle leading-relaxed">
                Outside code, I'm passionate about card magic, guitar performance, photography/videography 
                (DaVinci Resolve, Lightroom), and travel—hobbies that fuel my creativity and problem-solving 
                approach.
              </p>
              
              <p className="text-lg text-text-subtle leading-relaxed">
                When not coding, I perform card magic and mentalism, play guitar, cook vegetarian meals 
                (no onion/garlic), read novels, write poetry, watch films/TV, and stay active with regular workouts.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">12+</div>
                <div className="text-sm text-text-subtle mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">2</div>
                <div className="text-sm text-text-subtle mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">25+</div>
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