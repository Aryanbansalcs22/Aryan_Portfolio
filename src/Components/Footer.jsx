import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Aryanbansalcs22", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aryan-bansal-627377251/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:aryanbansal667@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <footer
  id="contact"
  className="text-black border-t-4 shadow-lg"
  style={{
    backgroundColor: '#fffaf0', // applied here
    borderColor: '#b87b71',
    boxShadow: '0 0 15px rgba(184, 123, 113, 0.4)',
  }}
>



      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 border-b-2 pb-10"
               style={{ borderColor: '#b87b71' }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#b87b71' }}>
              Get In Touch
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto">
              Let's discuss your next project and create something amazing together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'aryanbansal667@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 8791436180' },
                { icon: MapPin, label: 'Location', value: 'Mathura, India' }
              ].map((item, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6" style={{ color: '#b87b71' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#b87b71' }}>{item.label}</h3>
                    <p className="text-black">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold" style={{ color: '#b87b71' }}>Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-left text-black hover:text-[#b87b71] transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold" style={{ color: '#b87b71' }}>Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border rounded-full transition-colors group"
                      style={{
                        borderColor: '#b87b71',
                        color: '#b87b71',
                      }}
                    >
                      <IconComponent className="w-5 h-5 group-hover:text-[#b87b71] group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6">
                <button
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white transition"
                  style={{ backgroundColor: '#b87b71' }}
                >
                  <Mail className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t py-6 text-center text-sm"
        style={{ borderColor: '#b87b71', backgroundColor: '#fdf7f6' }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-black">
            <span>© 2025 Aryan Bansal.</span>
            <span className="text-[#b87b71] flex items-center gap-1">
              Made with <Heart className="w-4 h-4 fill-current" /> using React & Tailwind CSS
            </span>
          </div>
          <div className="text-black text-sm">All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
