import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { color, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// Using the uploaded image directly
const developerPhoto =
  "/lovable-uploads/527e4f40-1c8f-4c3f-b934-cf5361a2627d.png";
import ParticleBackground from "./ParticleBackground";
import CodeSnippets from "./CodeSnippets";
import { SiHashnode } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Animated Particle Background */}
      <ParticleBackground />

      {/* Floating Code Snippets */}
      <CodeSnippets />

      {/* Morphing shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-neon opacity-20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-20 w-24 h-24 bg-neon-pink opacity-30 rounded-full blur-lg"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-2 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-0 md:mt-[5rem]">
          {/* Text Content */}
          <motion.div
            className="space-y-6 lg:space-y-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-accent sm:text-lg md:text-[0.8rem] lg:text-[1rem] font-medium"
              >
                <Terminal className="h-5 w-5" />
                <span>console.log("Hello World!");</span>
              </motion.div> */}

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.span
                  className="gradient-text inline-block"
                  // animate={{ rotateY: [0, 360] }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                >
                  Rudraksh
                </motion.span>{" "}
                <span>Gupta</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                  Full Stack Developer , Software Engineer &
                  <motion.span
                    className="text-accent ml-2"
                    animate={{
                      color: ["#00ffff", "#8b5cf6", "#ff00ff", "#00ffff"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Freelancer
                  </motion.span>
                </h2>
              </motion.div>
            </div>

            <motion.p
              className="text-sm sm:text-base lg:text-[1.2rem] text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Turning coffee into code and ideas into reality. I build
              full-stack solutions with modern web tech, a love for learning,
              and a passion for digital innovation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#projects">
                  <Button
                    size="lg"
                    className="glow-effect hover:glow-accent transition-all duration-300 group"
                  >
                    <span className="mr-2">View My Work</span>
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowDown className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="glow-effect hover:bg-secondary/60 hover:text-white"
                  >
                    Get In Touch
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/RudrakshGupta0413",
                  color: "hover:text-neon-purple",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/rudraksh-gupta-664b591b2/",
                  color: "hover:text-neon-cyan",
                },
                {
                  icon: Mail,
                  href: "mailto:rudrakshgupta40@gmail.com",
                  color: "hover:text-neon-pink",
                },
                {
                  icon: SiHashnode,
                  href: "https://rudrakshgupta40.hashnode.dev/",
                  color: "hover:text-neon-blue",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground ${social.color} transition-all duration-300 p-3 rounded-lg hover:bg-secondary/20 group`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-6 w-6 group-hover:drop-shadow-[0_0_8px_currentColor]" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative group">
              {/* Animated rings - updated colors for natural theme */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-emerald-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  width: "120%",
                  height: "120%",
                  left: "-10%",
                  top: "-10%",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-400/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                  width: "140%",
                  height: "140%",
                  left: "-20%",
                  top: "-20%",
                }}
              />

              {/* Background glow - adjusted for outdoor theme */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-400/20 rounded-full blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Photo container with enhanced styling for the new image */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden glass-effect border-2 border-primary/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                }}
              >
                <motion.img
                  src={developerPhoto}
                  alt="Developer"
                  className="w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
                  }}
                />

                {/* Enhanced overlay effect for the outdoor photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle outdoor-themed border glow */}
                <div className="absolute inset-0 rounded-full border-2 border-emerald-400/20 opacity-60" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="p-2 rounded-full glass-effect"
        >
          <ArrowDown className="h-6 w-6 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
