import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import resumePdf from '@/assets/govindam_resume.pdf'; 

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'top-4 bg-background/95 backdrop-blur-md border border-border shadow-lg rounded-full max-w-4xl w-[calc(100%-2rem)]' 
          : 'top-0 bg-background/80 backdrop-blur-md border-border w-full max-w-6xl'
      }`}>
        <div className={`mx-auto ${isScrolled ? 'px-6' : 'px-6 max-w-6xl'}`}>
          <div className={`flex items-center justify-between ${isScrolled ? 'h-12' : 'h-16'}`}>
            {/* Logo */}
            <button 
              onClick={scrollToTop}
              className={`font-bold hover:text-accent transition-all duration-500 ease-in-out ${
                isScrolled ? 'text-lg' : 'text-2xl'
              }`}
            >
              <span className="text-center block">Gova's Vision</span>
            </button>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center space-x-6 ${
              isScrolled ? 'ml-8' : 'ml-12'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-accent relative ${
                    activeSection === item.href.substring(1) ? 'text-accent' : 'text-text-subtle'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"></div>
                  )}
                </button>
              ))}
              
              {/* Resume Button */}
              <Button 
                variant="outline" 
                size="sm" 
                className="group relative overflow-hidden border-accent/30 text-accent hover:text-background transition-all duration-300"
                asChild
              >
                <a href={resumePdf} download="Govindam_Vats_Resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative z-10 flex items-center">
                  <div className="absolute inset-0 bg-foreground -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                  <Download className="h-4 w-4 mr-2 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10">Resume</span>
                </a>
              </Button>
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="group relative overflow-hidden p-2 hover:bg-accent/10 rounded-full w-8 h-8"
              >
                <div className="absolute inset-0 bg-accent/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                <Sun className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                <Moon className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              
              <Button variant="accent" size="sm" onClick={() => scrollToSection('#contact')}>
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden border-t border-border bg-background transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left text-sm font-medium transition-colors duration-300 hover:text-accent ${
                    activeSection === item.href.substring(1) ? 'text-accent' : 'text-text-subtle'
                  }`}
                >
                  {item.name}
                </button>
                ))}
                
                {/* Mobile Resume Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-center border-accent/30 text-accent hover:bg-accent hover:text-background"
                  asChild
                >
                  <a href={resumePdf} download="Govindam_Vats_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </a>
                </Button>
                
                {/* Mobile Theme Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-full justify-center hover:bg-accent/10 relative"
                >
                  <Sun className="h-4 w-4 mr-2 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                  <Moon className="h-4 w-4 mr-2 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 absolute left-4" />
                  <span className="ml-6">Toggle Theme</span>
                </Button>
                
                <Button 
                  variant="accent" 
                  size="sm" 
                  className="w-full mt-4"
                  onClick={() => scrollToSection('#contact')}
                >
                  Hire Me
                </Button>
              </div>
            </div>
      </nav>

      {/* Section Indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-3">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.href.substring(1) 
                  ? 'bg-accent scale-125' 
                  : 'bg-border hover:bg-accent/50'
              }`}
              title={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;