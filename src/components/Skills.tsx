import { useEffect, useRef, useState } from 'react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend & AI",
      skills: [
        { name: "Python", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Adobe Creative", level: 80 },
        { name: "DaVinci Resolve", level: 85 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          skillCategories.forEach(category => {
            category.skills.forEach(skill => {
              setTimeout(() => {
                setProgressValues(prev => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
              }, Math.random() * 1000);
            });
          });
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
    <section id="skills" ref={sectionRef} className="py-24 px-6">
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

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`space-y-6 transform transition-all duration-1000 delay-${(categoryIndex + 1) * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <h3 className="text-xl font-semibold border-b border-accent/20 pb-2 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-lg">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-text-subtle font-mono">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    
                    {/* Skill Level Visualization */}
                    <div className="relative">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => {
                          const threshold = (index + 1) * 20;
                          const isActive = skill.level >= threshold;
                          const isPartial = skill.level > (threshold - 20) && skill.level < threshold;
                          
                          return (
                            <div
                              key={index}
                              className={`h-3 flex-1 rounded-sm transition-all duration-500 delay-${index * 100} ${
                                isActive 
                                  ? 'bg-accent shadow-sm' 
                                  : isPartial 
                                    ? 'bg-accent/50' 
                                    : 'bg-surface-elevated border border-border'
                              }`}
                              style={{
                                animationDelay: `${index * 100}ms`
                              }}
                            />
                          );
                        })}
                      </div>
                      
                      {/* Skill Level Labels */}
                      <div className="flex justify-between mt-2 text-xs text-text-subtle">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>

                    {/* Hover Effect - Additional Info */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                      <div className="text-xs text-text-subtle">
                        {skill.level >= 90 && "Expert level - Can architect and lead projects"}
                        {skill.level >= 80 && skill.level < 90 && "Advanced - Strong production experience"}
                        {skill.level >= 70 && skill.level < 80 && "Intermediate - Comfortable with most tasks"}
                        {skill.level < 70 && "Learning - Basic understanding and growing"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h3 className="text-xl font-semibold mb-6">Other Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "WordPress", "Wix", "Shopify", "OpenAI", "scikit-learn", "pandas", 
              "Voiceflow", "Zoho", "Data Analytics", "Lightroom", "Ionic"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-surface-elevated border border-border rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;