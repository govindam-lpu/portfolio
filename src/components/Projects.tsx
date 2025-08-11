import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import TradingDashboard from './TradingDashboard';
import VoiceflowChatbot from './VoiceflowChatbot';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const projects = [
    {
      number: "01",
      title: "AI Trade Prediction Model",
      description: "Real-time data ingestion and predictive analytics for financial markets at One Profit.",
      tech: ["Python", "scikit-learn", "pandas", "REST APIs"],
      github: "https://github.com/govindam-lpu",
      live: "Private",
      featured: true,
      status: "Ongoing"
    },
    {
      number: "02", 
      title: "AI Chatbot Integration",
      description: "Voiceflow–Zoho–OpenAI chatbot for automated customer service at Mridanga Media.",
      tech: ["Voiceflow", "Zoho", "OpenAI API"],
      github: "https://github.com/govindam-lpu",
      live: "Private",
      featured: true,
      status: "Completed"
    },
    {
      number: "03",
      title: "Music App",
      description: "Cross-platform Ionic & Angular music streaming with cloud data sync. Previously live on Google Play.",
      tech: ["Ionic", "Angular", "Firebase"],
      github: "https://github.com/govindam-lpu",
      live: "Discontinued",
      featured: false
    },
    {
      number: "04",
      title: "Weather Analytics Dashboard",
      description: "Interactive React dashboard visualizing climate data with historical analysis.",
      tech: ["React", "D3.js", "Express", "MongoDB"],
      github: "https://github.com/govindam-lpu",
      live: "Coming Soon",
      featured: false
    },
    {
      number: "05",
      title: "WordPress Portfolio Collection",
      description: "Custom WordPress websites with SEO optimization, responsive design, and content management.",
      tech: ["WordPress", "SEO", "Google Analytics", "Custom Themes"],
      sites: [
        { name: "Ayurveda Health Coach", url: "https://ayurvedahealthcoach.com", category: "Health & Wellness" },
        { name: "YoFit Fitness", url: "https://yofit.in", category: "Fitness & Training" },
        { name: "Dr. M Teitelbaum", url: "https://drmteitelbaum.com", category: "Medical Practice" },
        { name: "Astro Sarasvat", url: "https://astrosarasvat.com", category: "Astrology Services" },
        { name: "The Vedic Life", url: "https://thevediclife.com", category: "Spiritual Wellness" }
      ],
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <span className="section-number">03</span>
            <div className="w-16 h-0.5 bg-accent ml-4"></div>
          </div>
          <h2 className="section-title">Featured Work</h2>
          <p className="text-lg text-text-subtle max-w-2xl">
            A collection of projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 md:space-y-24 mb-12 md:mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.number}
              className={`transform transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                {/* Interactive Project Module */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="aspect-video bg-gradient-warm border-none hover-lift overflow-hidden relative group">
                    {project.number === "01" ? (
                      <TradingDashboard />
                    ) : (
                      <VoiceflowChatbot />
                    )}
                  </Card>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-accent font-mono text-sm">Project {project.number}</span>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  </div>

                  <p className="text-text-subtle text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-surface-elevated border border-border rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.status && (
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          project.status === 'Ongoing' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <span className="text-sm font-medium text-text-subtle">
                          {project.status}
                        </span>
                      </div>
                    )}
                    {project.number === "03" && (
                      <>
                        <Button variant="accent" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="minimal" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </>
                    )}
                    {project.number === "04" && (
                      <>
                        <Button variant="accent" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="minimal" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-8">Other Notable Projects</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {otherProjects.slice(0, 2).map((project, index) => (
              <Card 
                key={project.number} 
                className="p-6 hover-lift border-border transition-all duration-500 hover:shadow-lg hover:border-accent/30 group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${(index + 1) * 0.2}s both`
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-mono text-sm">Project {project.number}</span>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" 
                           className="text-text-subtle hover:text-accent transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                           className="text-text-subtle hover:text-accent transition-colors">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-text-subtle">{project.description}</p>
                  
                  {/* Special WordPress Sites Grid */}
                  {project.sites && (
                     <div className="grid grid-cols-1 gap-3 mt-4">
                       {project.sites.map((site, index) => (
                         <a key={site.name} 
                            href={site.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="individual-site-card group relative overflow-hidden rounded-lg border border-border/50 p-4 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 block"
                            style={{ animationDelay: `${index * 100}ms` }}>
                           <div className="flex items-center justify-between">
                             <div className="space-y-1">
                               <h5 className="font-medium text-sm group-hover:text-accent transition-colors">
                                 {site.name}
                               </h5>
                               <p className="text-xs text-text-subtle group-hover:text-muted-foreground transition-colors">{site.category}</p>
                             </div>
                             <div className="opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all">
                               <ExternalLink className="h-4 w-4" />
                             </div>
                           </div>
                           <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                         </a>
                       ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-surface text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* WordPress Portfolio - Full Width */}
          {otherProjects.slice(2).map((project, index) => (
            <Card 
              key={project.number} 
              className="p-8 hover-lift border-border transition-all duration-500 hover:shadow-lg hover:border-accent/30 group mt-8"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.6}s both`
              }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-accent font-mono text-sm">Project {project.number}</span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" 
                         className="text-text-subtle hover:text-accent transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                         className="text-text-subtle hover:text-accent transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold">{project.title}</h4>
                    <p className="text-text-subtle text-lg">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-surface text-sm font-medium rounded-md border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                   {/* WordPress Sites Grid */}
                   {project.sites && (
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {project.sites.map((site, siteIndex) => (
                         <a key={site.name} 
                            href={site.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-lg border border-border/50 p-4 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:shadow-md block"
                            style={{
                              animation: `slideInRight 0.4s ease-out ${siteIndex * 0.1}s both`
                            }}>
                           <div className="flex items-center justify-between">
                             <div className="space-y-2">
                               <h5 className="font-medium text-sm group-hover:text-accent transition-colors">
                                 {site.name}
                               </h5>
                               <p className="text-xs text-text-subtle group-hover:text-muted-foreground transition-colors">{site.category}</p>
                             </div>
                             <div className="opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all transform group-hover:scale-110">
                               <ExternalLink className="h-4 w-4" />
                             </div>
                           </div>
                           <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                         </a>
                       ))}
                     </div>
                   )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
