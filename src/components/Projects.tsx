import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

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
      github: "https://github.com",
      live: "Private",
      featured: true,
      status: "Ongoing"
    },
    {
      number: "02", 
      title: "AI Chatbot Integration",
      description: "Voiceflow–Zoho–OpenAI chatbot for automated customer service at Mridanga Media.",
      tech: ["Voiceflow", "Zoho", "OpenAI API"],
      github: "https://github.com",
      live: "Private",
      featured: true,
      status: "Completed"
    },
    {
      number: "03",
      title: "Music App",
      description: "Cross-platform Ionic & Angular music streaming with cloud data sync. Previously live on Google Play.",
      tech: ["Ionic", "Angular", "Firebase"],
      github: "https://github.com",
      live: "Discontinued",
      featured: false
    },
    {
      number: "04",
      title: "Weather Analytics Dashboard",
      description: "Interactive React dashboard visualizing climate data with historical analysis.",
      tech: ["React", "D3.js", "Express", "MongoDB"],
      github: "https://github.com",
      live: "Coming Soon",
      featured: false
    },
    {
      number: "05",
      title: "Ayurveda Health Coach Website",
      description: "Custom WordPress site for online course delivery, SEO-optimized and self-managed.",
      tech: ["WordPress", "SEO", "Google Analytics"],
      github: "https://github.com",
      live: "https://ayurvedahealthcoach.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <span className="section-number">03</span>
          <div className="w-16 h-0.5 bg-accent inline-block ml-4 mb-8"></div>
          <h2 className="section-title">Featured Work</h2>
          <p className="text-lg text-text-subtle max-w-2xl">
            A collection of projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.number}
              className={`transform transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="aspect-video bg-gradient-warm border-none hover-lift overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                      <div className="text-6xl font-bold text-accent/30">{project.number}</div>
                    </div>
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-8">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <Card key={project.number} className="p-6 hover-lift border-border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-mono text-sm">Project {project.number}</span>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" 
                         className="text-text-subtle hover:text-accent transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                         className="text-text-subtle hover:text-accent transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-text-subtle">{project.description}</p>
                  
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
