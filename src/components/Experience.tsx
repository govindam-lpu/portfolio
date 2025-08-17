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
      period: "Jan 2025 - Present",
      company: "One Profit",
      position: "AI Developer & Technical Consultant",
      description: "Built Python-based trade-prediction models leveraging pandas, scikit-learn, and external APIs. Advised on AI implementation, system architecture, and deployment pipelines.",
      achievements: [
        "Developed machine-learning models for financial predictions",
        "Implemented real-time data ingestion pipelines",
        "Advised on AI implementation strategies"
      ],
      tech: ["Python", "scikit-learn", "pandas", "REST APIs"]
    },
    {
      period: "Aug 2024 - Dec 2024",
      company: "Mridanga Media",
      position: "Web Developer & AI Chatbot Developer",
      description: "Developed customer-service chatbot integrating Voiceflow, Zoho, OpenAI. Created React/Angular web apps and managed client requirements.",
      achievements: [
        "Built intelligent chatbot for automated customer service",
        "Developed React/Angular web applications",
        "Managed client requirements and project delivery"
      ],
      tech: ["Voiceflow", "Zoho", "OpenAI", "React", "Angular"]
    },
    {
      period: "Oct 2023 - Jul 2024",
      company: "Mridanga Media",
      position: "Junior Developer (Internship)",
      description: "Collaborated on AI chatbot and mobile app features. Gained proficiency in API integrations and troubleshooting.",
      achievements: [
        "Contributed to AI chatbot development",
        "Learned API integrations and troubleshooting",
        "Supported mobile app feature development"
      ],
      tech: ["JavaScript", "API Integration", "Mobile Development"]
    },
    {
      period: "Ongoing",
      company: "Various Clients",
      position: "Freelance Web Developer",
      description: "Built and maintained WordPress sites including yofit.in, ayurvedahealthcoach.com, drmteitelbaum.com, astrosarasvat.com.",
      achievements: [
        "Delivered 5+ WordPress websites",
        "Implemented SEO optimization strategies",
        "Provided ongoing maintenance and support"
      ],
      tech: ["WordPress", "SEO", "Google Analytics"]
    }
  ];

  const education = [
    {
      period: "2020 - 2024",
      institution: "Lovely Professional University",
      degree: "B.Tech in Computer Science & Engineering",
      description: "Comprehensive program covering software engineering, AI/ML, web technologies, and system design.",
      achievements: [
        "Graduated with strong technical foundation",
        "Specialized in AI and web development",
        "Completed multiple real-world projects"
      ]
    },
    {
      period: "2018 - 2020",
      institution: "Holy Angels Sr Secondary, Ghaziabad",
      degree: "ISC Senior Secondary",
      description: "Completed senior secondary education with focus on science and mathematics.",
      achievements: [
        "Strong foundation in mathematics and physics",
        "Developed early interest in computer science",
        "Participated in technical competitions"
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center justify-center md:justify-start mb-8">
            <span className="section-number">06</span>
            <div className="w-16 h-0.5 bg-accent ml-4"></div>
          </div>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Experience */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8">Professional Experience</h3>
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`transform transition-all duration-1000 delay-${(index + 1) * 200} ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}
                >
                  <Card className="p-3 sm:p-4 md:p-6 hover-lift border-border">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex flex-col gap-2">
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold">{exp.position}</h4>
                          <p className="text-accent font-medium text-sm md:text-base">{exp.company}</p>
                        </div>
                        <span className="text-xs md:text-sm text-text-subtle font-mono">{exp.period}</span>
                      </div>

                      <p className="text-text-subtle leading-relaxed text-sm md:text-base">{exp.description}</p>

                      <div className="space-y-2">
                        <h5 className="font-medium text-xs md:text-sm">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-text-subtle text-xs md:text-sm flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5 md:gap-2">
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
          <div className={`order-1 lg:order-2 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 lg:translate-x-0 opacity-100' : 'translate-y-12 lg:translate-y-0 lg:translate-x-12 opacity-0'}`}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8">Education</h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 border-border">
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">{edu.degree}</h4>
                      <p className="text-accent text-xs md:text-sm">{edu.institution}</p>
                      <span className="text-xs text-text-subtle font-mono">{edu.period}</span>
                    </div>

                    <p className="text-text-subtle text-xs md:text-sm leading-relaxed">{edu.description}</p>

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
              <div className="space-y-3 md:space-y-4">
                <h4 className="font-semibold text-sm md:text-base">Certifications</h4>
                <div className="space-y-2">
                  {[
                    { course: "Crash Course on Python", provider: "Google", grade: "94%" },
                    { course: "Wind Energy", provider: "Technical University of Denmark (DTU)", grade: "91.91%" },
                    { course: "The Complete Full-Stack Web Development Bootcamp", provider: "Dr. Angela Yu", grade: "Completed" }
                  ].map((cert, index) => (
                    <div key={index} className="text-xs md:text-sm text-text-subtle">
                      <div className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <div>
                          <span className="font-medium">{cert.course}</span>
                          <span className="text-text-subtle"> by {cert.provider}</span>
                          <span className="text-accent block text-xs">Grade: {cert.grade}</span>
                        </div>
                      </div>
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