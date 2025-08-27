import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'), 
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/govindamvats.32@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _captcha: false
        })
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback to mailto
      const mailtoLink = `mailto:govindamvats.32@gmail.com?subject=${encodeURIComponent(data.subject as string)}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\nMessage:\n${data.message}`)}`;
      window.open(mailtoLink);
      
      toast({
        title: "Email client opened!",
        description: "Your default email client should open with the message pre-filled.",
      });
      (e.target as HTMLFormElement).reset();
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "govindamvats.32@gmail.com",
      href: "mailto:govindamvats.32@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8800664912",
      href: "tel:+918800664912"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/govindam-lpu",
      hoverColor: "hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/govindam-vats/",
      hoverColor: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: Instagram,
      label: "Instagram", 
      href: "https://www.instagram.com/govind_umm",
      hoverColor: "hover:bg-pink-600 hover:text-white"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center justify-center mb-8">
            <span className="section-number">08</span>
            <div className="w-16 h-0.5 bg-accent ml-4"></div>
          </div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-lg text-text-subtle max-w-2xl mx-auto">
            So what do you think? Are we a good fit? Whether it's AI-driven or
            modern web applications, or technical consultation, I'm here 
            to turn your vision into reality. Hit me up!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <Card className="p-8 border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      required 
                      className="bg-surface border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      className="bg-surface border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="Project inquiry" 
                    required 
                    className="bg-surface border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell me about your project..." 
                    rows={5}
                    required 
                    className="bg-surface border-border resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a 
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-border hover:bg-surface-elevated transition-colors duration-300 group"
                  >
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-text-subtle text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-surface rounded-lg border border-border transition-all duration-300 hover:-translate-y-1 ${social.hoverColor}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="p-6 border-border bg-gradient-warm/5">
              <div className="space-y-3">
                <h4 className="font-semibold">Currently Available</h4>
                <p className="text-text-subtle text-sm">
                  I'm open to consulting, web development projects, and technical roles. 
                  Let's discuss how we can use my skills to solve your problems.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-text-subtle">Available for new projects</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
