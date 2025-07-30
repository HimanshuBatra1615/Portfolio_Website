import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Code,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { SiHashnode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/RudrakshGupta0413",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rudraksh-gupta-664b591b2/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:rudrakshgupta40@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
    {
      icon: SiHashnode,
      href: "https://rudrakshgupta40.hashnode.dev/",
      label: "Hashnode",
      color: "hover:text-blue-600",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-12 px-6 bg-background/80 backdrop-blur-sm border-t border-border/50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-24 h-24 bg-primary/5 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div
              onClick={() => {
                const homeSection = document.getElementById("home");
                if (homeSection) {
                  homeSection.scrollIntoView({ behavior: "smooth" });
                }
                setIsOpen(false);
              }}
              className="flex items-center gap-2 hover:cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-primary/10 rounded-lg"
              >
                <Code className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold gradient-text">
                Rudraksh Gupta
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting exceptional digital experiences through clean code and
              innovative solutions. Let's build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className={`p-3 rounded-lg bg-secondary/20 text-muted-foreground ${social.color} transition-all duration-300 group hover:bg-secondary/40`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:drop-shadow-[0_0_8px_currentColor]" />
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted-foreground"
            >
              <p>Available for freelance work</p>
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full inline-block mr-2 mt-1"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-400">Currently online</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-border/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Rudraksh Gupta. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-400 fill-current" />
              </motion.div>
              <span>and lots of coffee</span>
            </div>
            <div className="text-center md:text-right">
              <p>Designed & Developed by Rudraksh Gupta</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
