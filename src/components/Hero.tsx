import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

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
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Logo & Visual Identity */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <div className="relative">
            <img 
              src={logo} 
              alt="Developer Logo" 
              className="w-80 h-80 mx-auto lg:mx-0 object-contain"
            />
            <div className="absolute inset-0 bg-gradient-warm opacity-20 rounded-full blur-3xl"></div>
          </div>
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
                <span className="block text-2xl md:text-3xl font-normal text-text-subtle mb-2">
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

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
            <div className="flex justify-center lg:justify-start space-x-6 pt-8">
              <a href="https://github.com" className="text-text-subtle hover:text-accent transition-colors duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-text-subtle hover:text-accent transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:hello@example.com" className="text-text-subtle hover:text-accent transition-colors duration-300">
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