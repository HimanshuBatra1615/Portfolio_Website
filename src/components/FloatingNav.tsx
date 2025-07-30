import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Code,
  Briefcase,
  MessageSquare,
  PenTool,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { SiHashnode } from "react-icons/si";

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "blogs", icon: PenTool, label: "Blogs" },
    // { id: "testimonials", icon: MessageSquare, label: "Testimonials" },
    { id: "contact", icon: User, label: "Contact" },
  ];

  const socialItems = [
    {
      icon: Github,
      href: "https://github.com/RudrakshGupta0413",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rudraksh-gupta-664b591b2/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:rudrakshgupta40@gmail.com", label: "Email" },
    {
      icon: SiHashnode,
      href: "https://rudrakshgupta40.hashnode.dev/",
      label: "Hashnode",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed right-6 top-3/4 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
    >
      {/* Navigation */}
      <div className="glass-effect glow-effect rounded-full p-2 space-y-2">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative p-3 rounded-full transition-all duration-300 group ${
              activeSection === item.id
                ? "bg-primary text-primary-foreground glow-effect"
                : "text-muted-foreground hover:text-accent hover:bg-secondary/20"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="h-5 w-5" />

            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-background border border-border rounded-lg px-3 py-1 text-sm whitespace-nowrap">
                {item.label}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Social Links - Horizontal */}
      <div className="glass-effect rounded-full p-2 flex space-x-2">
        {socialItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-full text-muted-foreground hover:text-accent hover:bg-secondary/20 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="h-4 w-4" />

            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-background border border-border rounded-lg px-3 py-1 text-sm whitespace-nowrap">
                {item.label}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingNav;
