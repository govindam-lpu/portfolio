import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

const Experience = () => {
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

  const experiences = [
    {
      period: "2022 - Present",
      company: "TechCorp Inc.",
      position: "Senior Full-Stack Developer",
      description: "Lead development of scalable web applications serving 100K+ users. Architect and implement microservices using Node.js and React. Mentor junior developers and drive technical decisions.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led migration to microservices architecture",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      tech: ["React", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      period: "2020 - 2022",
      company: "StartupXYZ",
      position: "Full-Stack Developer",
      description: "Developed and maintained multiple client applications. Collaborated with design team to implement pixel-perfect UIs. Built RESTful APIs and managed database architecture.",
      achievements: [
        "Built 5+ production applications from scratch",
        "Increased user engagement by 35% through UX improvements",
        "Implemented real-time features using WebSocket"
      ],
      tech: ["Vue.js", "Express", "MongoDB", "Docker"]
    },
    {
      period: "2019 - 2020",
      company: "WebSolutions Ltd.",
      position: "Frontend Developer",
      description: "Focused on creating responsive and accessible web interfaces. Worked closely with UX designers to translate designs into interactive experiences.",
      achievements: [
        "Improved accessibility compliance to WCAG 2.1 AA",
        "Reduced bundle size by 30% through optimization",
        "Created reusable component library"
      ],
      tech: ["React", "SCSS", "WordPress", "jQuery"]
    }
  ];

  const education = [
    {
      period: "2015 - 2019",
      institution: "University of Technology",
      degree: "Bachelor of Computer Science",
      description: "Specialized in Software Engineering with focus on web technologies and database systems.",
      achievements: [
        "Graduated Magna Cum Laude (GPA: 3.8/4.0)",
        "President of Computer Science Society",
        "Published research on web performance optimization"
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <span className="section-number">05</span>
          <div className="w-16 h-0.5 bg-accent inline-block ml-4 mb-8"></div>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`transform transition-all duration-1000 delay-${(index + 1) * 200} ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}
                >
                  <Card className="p-6 hover-lift border-border">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="text-xl font-semibold">{exp.position}</h4>
                          <p className="text-accent font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-text-subtle font-mono">{exp.period}</span>
                      </div>

                      <p className="text-text-subtle leading-relaxed">{exp.description}</p>

                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-text-subtle text-sm flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
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
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 border-border">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-accent text-sm">{edu.institution}</p>
                      <span className="text-xs text-text-subtle font-mono">{edu.period}</span>
                    </div>

                    <p className="text-text-subtle text-sm leading-relaxed">{edu.description}</p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-xs">Highlights:</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-text-subtle text-xs flex items-start gap-2">
                            <span className="text-accent mt-0.5">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Certifications */}
              <div className="space-y-4">
                <h4 className="font-semibold">Certifications</h4>
                <div className="space-y-2">
                  {[
                    "AWS Certified Solutions Architect",
                    "Google Cloud Professional Developer", 
                    "MongoDB Certified Developer"
                  ].map((cert) => (
                    <div key={cert} className="text-sm text-text-subtle flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;