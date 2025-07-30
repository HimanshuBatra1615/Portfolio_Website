import { useState, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const scale = useTransform(mouseXSpring, [-0.5, 0.5], [0.95, 1.05]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        scale: scale,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        y: 100,
        rotateX: -30,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 80,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      {/* Floating background glow */}
      <motion.div
        className="absolute -inset-2 bg-gradient-neon rounded-2xl opacity-0 group-hover:opacity-20 blur-lg"
        transition={{ duration: 0.5 }}
      />

      <Card className="relative overflow-hidden glass-effect border-border/30 h-full backdrop-blur-xl">
        <div className="relative overflow-hidden">
          {/* Main project image with parallax effect */}
          <motion.div
            className="relative h-56 overflow-hidden"
            style={{
              transform: "translateZ(20px)",
            }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{
                scale: scale,
                transform: "translateZ(10px)",
              }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Dynamic color overlay based on hover position */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(
    120deg, 
    hsl(var(--accent) / 0.06) 0%, 
    hsl(var(--background) / 0.65) 100%
  )`,
              }}
            />

            {/* Animated border lines */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent"
              whileHover={{
                borderColor: "hsl(var(--accent) / 0.5)",
                borderRadius: "0.5rem",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Floating action panel */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="absolute bottom-4 right-4 flex gap-3">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ delay: 0.1 }}
                className="group/btn"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="h-10 w-10 p-0 glass-effect border border-accent/30 hover:border-accent hover:bg-accent/20 group-hover/btn:shadow-lg group-hover/btn:shadow-accent/25"
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ delay: 0.2 }}
                className="group/btn"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="h-10 w-10 p-0 glass-effect border border-accent/30 hover:border-accent hover:bg-accent/20 group-hover/btn:shadow-lg group-hover/btn:shadow-accent/25"
                  >
                    <motion.div
                      whileHover={{ rotate: -15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Animated particle effect */}
          <motion.div
            className="absolute top-4 left-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        </div>

        {/* Content section with enhanced animations */}
        <motion.div
          className="p-6 relative"
          style={{ transform: "translateZ(40px)" }}
        >
          {/* Floating title with magnetic effect */}
          <motion.h3
            className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300 relative"
            whileHover={{
              x: mouseXSpring.get() * 10,
              y: mouseYSpring.get() * 5,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            {project.title}
            {/* Underline animation */}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-neon"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.h3>

          <motion.p
            className="text-muted-foreground text-sm mb-6 leading-relaxed"
            whileHover={{
              color: "hsl(var(--foreground))",
              transition: { duration: 0.3 },
            }}
          >
            {project.description}
          </motion.p>

          {/* Enhanced tech stack with staggered reveal */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {project.tech.map((tech: string, techIndex: number) => (
              <motion.div
                key={tech}
                variants={{
                  hidden: { opacity: 0, scale: 0, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.15,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="secondary"
                  className="text-xs glass-effect border-border/50 hover:border-accent/50 hover:bg-accent/10 cursor-pointer"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const projects = [
    {
      title: "Reels Pro App (Coming Soon)",
      description:
        "A scalable full-stack short video platform with secure auth, public feeds, video uploads via ImageKit, user profiles with privacy controls, and real-time performance powered by Redis. Built for scalability and performance",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "MongoDB",
        "Redis",
        "ImageKit",
        "NextAuth",
      ],
      image:
        "/project6.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "PingPanda: SaaS Event Monitoring App",
      description:
        "PingPanda is a real-time SaaS event monitoring app featuring a user-friendly dashboard, instant Discord alerts for categorized events, Clerk authentication, Stripe billing, and scalable performance powered by Redis and rate limiting.",
      tech: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Tailwind CSS",
        "Clerk",
        "Discord",
        "Redis",
        "shadcn/ui",
        "Stripe",
      ],
      image: "/project1.png",
      liveUrl: "https://ping-panda-ai-saa-s-monitoring-plat.vercel.app/",
      githubUrl:
        "https://github.com/RudrakshGupta0413/PingPanda_AI_SaaS_Monitoring_Platform",
    },
    {
      title: "My Personal Portfolio",
      description:
        "Built with React.js, Framer Motion, and Tailwind CSS, my portfolio features advanced motion animations, a real-time Slack notification system integrated with the contact form, and automated email delivery for instant communication.",
      tech: [
        "React.js",
        "Typescript",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "Slack",
      ],
      image: "/project2.png",
      liveUrl: "https://my-personal-portfolio-livid-phi.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Saas Landing Page",
      description:
        "Pixel-perfect SaaS landing page built with React, Next.js, Tailwind CSS & Framer Motion—featuring advanced animations, drag-and-drop UI, and smooth interactive effects.",
      tech: ["React.js", "Next.js", "Framer Motion", "Tailwind CSS"],
      image: "/project3.png",
      liveUrl: "https://saas-landing-page-layers-rho.vercel.app/",
      githubUrl:
        "https://github.com/RudrakshGupta0413/Saas-Landing-Page-Layers",
    },
    {
      title: "Ruchi Art House Branding Website",
      description:
        "Custom branding website for Ruchi Art House featuring a dynamic gallery, service showcase, and real-time WhatsApp-based order system for seamless client interaction.",
      tech: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Figma",
        "Framer Motion",
        "Analytics",
        "WhatsApp",
      ],
      image: "/project4.png",
      liveUrl: "https://www.ruchiarthouse.com/",
      githubUrl: "#",
    },
    {
      title: "Amexus AI Supply Chain AI Voice Assistant",
      description:
        "Developed a supply chain web app at Amexus AI with a voice-enabled assistant using Next.js, ElevenLabs, and FastAPI—enabling real-time multi-vendor communication through AI-driven voice interactions.",
      tech: [
        "Next.js",
        "FastAPI",
        "JavaScript",
        "Python",
        "Eleven Labs",
        "Tailwind CSS",
      ],
      image: "/project5.png",
      liveUrl: "#",
      githubUrl: "https://github.com/RudrakshGupta0413/AmexusAI-DEmo",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 relative overflow-hidden"
      ref={ref}
    >
      {/* Code Matrix Background Animation */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
        {/* Binary code streams */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 font-mono text-xs leading-3"
            style={{
              left: `${i * 8 + Math.random() * 10}%`,
              top: -20,
            }}
            animate={{
              y: ["0vh", "120vh"],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div key={j} style={{ marginBottom: "8px" }}>
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </motion.div>
        ))}

        {/* Floating code brackets */}
        <motion.div
          className="absolute top-1/4 left-10 text-blue-400/30 text-6xl font-mono"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {"{ }"}
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-20 text-purple-400/30 text-8xl font-mono"
          animate={{
            rotate: [360, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          &lt;/&gt;
        </motion.div>

        {/* Animated circuit lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M0,50 Q200,100 400,50 T800,50"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.path
            d="M0,200 Q300,150 600,200 T1200,200"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
            opacity="0.15"
            strokeDasharray="8,8"
            animate={{
              strokeDashoffset: [0, 16],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>

        {/* Git commit visualization */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-400 rounded-full opacity-50"
          animate={{
            scale: [1, 0, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            times: [0, 0.5, 1],
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-20 h-0.5 bg-green-400/30 origin-left"
          animate={{
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            times: [0, 0.7, 1],
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-bold gradient-text mb-6"
            whileInView={{
              scale: [0.9, 1],
              opacity: [0, 1],
            }}
            transition={{ duration: 0.8 }}
          >
            Project Showcase
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Each project represents a unique challenge solved through innovative
            thinking, cutting-edge technology, and meticulous attention to
            detail
          </motion.p>
        </motion.div>

        {/* Enhanced project grid with masonry-style layout */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              className={`${index % 3 === 1 ? "xl:mt-12" : ""} ${
                index % 3 === 2 ? "xl:mt-24" : ""
              }`}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Call to action with enhanced animation */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              onClick={() =>
                window.open("https://github.com/RudrakshGupta0413", "_blank")
              }
              size="lg"
              className="glass-effect border border-accent/30 hover:border-accent hover:bg-accent/10 group px-8 py-6 text-lg relative overflow-hidden"
            >
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10"
                initial={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />

              <span className="relative z-10 mr-3">Explore All Projects</span>
              <motion.div
                className="relative z-10"
                animate={{
                  x: [0, 5, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ExternalLink className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
