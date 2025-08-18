import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });
  const isMobile = useIsMobile();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      color: "bg-primary/10 border-primary/20",
      skills: ["React", "Angular", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend & AI",
      icon: "🤖",
      color: "bg-accent/10 border-accent/20",
      skills: ["Python", "Node.js", "Firebase", "REST APIs", "Machine Learning", "scikit-learn"]
    },
    {
      title: "Tools & Design",
      icon: "🎨",
      color: "bg-muted/50 border-border",
      skills: ["Git/GitHub", "Figma", "Adobe Creative", "DaVinci Resolve", "WordPress", "SEO"]
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      color: "bg-primary/5 border-primary/10",
      skills: ["MongoDB", "MySQL", "AWS", "Google Cloud", "Supabase", "Vercel"]
    },
    {
      title: "Mobile & Frameworks",
      icon: "📱",
      color: "bg-accent/5 border-accent/10",
      skills: ["React Native", "Ionic", "Next.js", "Vite", "Express.js", "FastAPI"]
    },
    {
      title: "Analytics & APIs",
      icon: "📊",
      color: "bg-muted/30 border-border/50",
      skills: ["Google Analytics", "Pandas", "Data Analytics", "OpenAI", "Voiceflow", "Zoho"]
    }
  ];

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
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <span className="section-number">04</span>
            <div className="w-16 h-0.5 bg-accent ml-4"></div>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="text-lg text-text-subtle max-w-2xl">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>

        {/* Skills Dashboard */}
        {isMobile ? (
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {skillCategories.map((category, categoryIndex) => (
                <Card
                  key={category.title}
                  className={`${category.color} p-4 hover-lift border group transform transition-all duration-1000 delay-${(categoryIndex + 1) * 100} min-w-[280px] flex-shrink-0 ${
                    isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{category.icon}</span>
                      <h3 className="text-base font-semibold">{category.title}</h3>
                    </div>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 bg-background/60 backdrop-blur-sm border border-border/50 rounded-full text-xs font-medium transition-all duration-300 delay-${skillIndex * 50} hover:bg-accent hover:text-accent-foreground hover:scale-105 cursor-default ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                          }`}
                          style={{
                            animationDelay: `${(categoryIndex + 1) * 200 + skillIndex * 100}ms`
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Category Stats */}
                    <div className="pt-2 border-t border-border/20">
                      <div className="flex items-center justify-between text-xs text-text-subtle">
                        <span>{category.skills.length} Technologies</span>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          <span>Active Use</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className={`${category.color} p-6 hover-lift border group transform transition-all duration-1000 delay-${(categoryIndex + 1) * 100} ${
                  isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                }`}
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 bg-background/60 backdrop-blur-sm border border-border/50 rounded-full text-xs font-medium transition-all duration-300 delay-${skillIndex * 50} hover:bg-accent hover:text-accent-foreground hover:scale-105 cursor-default ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                        }`}
                        style={{
                          animationDelay: `${(categoryIndex + 1) * 200 + skillIndex * 100}ms`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Category Stats */}
                  <div className="pt-2 border-t border-border/20">
                    <div className="flex items-center justify-between text-xs text-text-subtle">
                      <span>{category.skills.length} Technologies</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span>Active Use</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
        
        {/* Featured Technologies */}
        <div className={`mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Core Competencies</h3>
            <p className="text-text-subtle text-sm">Primary technologies I work with daily</p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Python", icon: "🐍" },
              { name: "TypeScript", icon: "📘" },
              { name: "Node.js", icon: "🟢" },
              { name: "AI/ML", icon: "🧠" },
              { name: "Cloud", icon: "☁️" }
            ].map((tech, index) => (
              <Card
                key={tech.name}
                className={`p-3 sm:p-4 text-center hover-lift border group cursor-default transform transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-lg sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="text-xs sm:text-sm font-medium">{tech.name}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;