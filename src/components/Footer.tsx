import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/govindam-lpu", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/govindam-vats/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/govind_umm", label: "Instagram" },
    { icon: Mail, href: "mailto:govindamvats.32@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-12 px-6 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Govindam Vats</h3>
            <p className="text-text-subtle text-sm flex items-center gap-1 justify-center md:justify-start">
              © {currentYear} Built with 
              <Heart className="h-4 w-4 text-accent fill-current" />
              and lots of caffeine
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-subtle hover:text-accent transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-text-subtle text-xs">
            This website is open source and available on{' '}
            <a 
              href="https://github.com/govindam-lpu/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;