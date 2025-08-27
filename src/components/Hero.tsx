import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Terminal from './Terminal';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 md:px-6 pt-20 md:pt-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Terminal */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <Terminal />
        </div>

        {/* Hero Content */}
        <div className={`text-center lg:text-left transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="section-number">01</span>
                <div className="w-16 h-0.5 bg-accent inline-block ml-4"></div>
              </div>
              
              <h1 className="section-title">
                <span className="block text-2xl md:text-3xl font-normal text-foreground mb-2">
                  AI Developer &
                </span>
                <span className="gradient-text">
                  Technical Consultant
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-text-subtle max-w-2xl text-balance leading-relaxed">
              Combining AI-driven predictive models with modern web stacks to deliver intelligent, 
              user-centric solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              
              <Button 
                variant="minimal" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 md:space-x-6 pt-6 md:pt-8">
              <a href="https://github.com/govindam-lpu" className="text-text-subtle hover:text-accent transition-colors duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/govindam-vats/" className="text-text-subtle hover:text-accent transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/govind_umm" className="text-text-subtle hover:text-accent transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="mailto:govindamvats.32@gmail.com" className="text-text-subtle hover:text-accent transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-accent" />
      </div>
    </section>
  );
};

export default Hero;