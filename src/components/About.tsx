import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Coffee, Heart, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Code,
      label: "Projects Completed",
      value: "15+",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      icon: Coffee,
      label: "Cups of Coffee",
      value: "1000+",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: Heart,
      label: "Happy Clients",
      value: "10+",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Zap,
      label: "Years Experience",
      value: "4+",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flowing code particles */}
        <motion.div
          className="absolute top-16 left-20 text-accent/20 text-2xl font-mono"
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 360],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 0 }}
        >
          &lt;/&gt;
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 text-neon-purple/30 text-lg font-mono"
          animate={{
            y: [0, -80, 0],
            x: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        >
          {}
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/3 text-neon-cyan/25 text-xl font-mono"
          animate={{
            y: [0, -60, 0],
            x: [0, 30, 0],
            rotate: [0, -180, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        >
          =&gt;
        </motion.div>

        {/* Large flowing orbs */}
        <motion.div
          className="absolute top-1/3 right-16 w-40 h-40 bg-gradient-primary opacity-8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-24 w-32 h-32 bg-neon-pink opacity-10 rounded-full blur-2xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, 50, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated circuit lines */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px", "0px 0px"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </motion.div>

        {/* Animated floating code elements */}
        <motion.div
          className="absolute top-12 left-10 text-accent/30 text-3xl font-mono"
          animate={{
            y: [0, -150, 0],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 360, 720],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 0 }}
        >
          {"{ }"}
        </motion.div>
        <motion.div
          className="absolute top-20 right-16 text-neon-cyan/25 text-2xl font-mono"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        >
          []
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/4 text-neon-purple/30 text-xl font-mono"
          animate={{
            y: [0, -80, 0],
            x: [0, 50, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 1.5 }}
        >
          ()
        </motion.div>

        {/* Binary code rain effect */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-accent/10 text-xs font-mono"
            style={{
              left: `${10 + i * 8}%`,
              top: `${-10}%`,
            }}
            animate={{
              y: ["0vh", "120vh"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear",
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
            <br />
            {Math.random() > 0.5 ? "0" : "1"}
            <br />
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}

        {/* Floating geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The story behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">
                Full Stack Developer & Problem Solver
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a full-stack developer with 4+ years of experience building
                end-to-end web applications through freelance projects,
                internships, and hands-on work. I specialize in creating
                responsive front-ends, scalable back-ends, and clean,
                maintainable code.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Passionate about solving real-world problems, I enjoy exploring
                new technologies, contributing to open source, and mentoring
                fellow developers. Fueled by curiosity (and coffee), I embrace
                every challenge as an opportunity to learn and grow.
              </p>
            </motion.div>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <h4 className="text-xl font-semibold text-foreground mb-3">
                What drives me:
              </h4>
              <ul className="space-y-2">
                {[
                  "Creating intuitive user experiences that solve real problems",
                  "Writing clean, efficient code that stands the test of time",
                  "Collaborating with teams to bring innovative ideas to life",
                  "Staying current with emerging technologies and best practices",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground text-lg"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotateY: -90,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 },
                }}
                className="group relative cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="relative p-6 glass-effect rounded-xl border border-border/30 text-center overflow-hidden h-full"
                  whileHover={{
                    boxShadow: "0 0 30px hsl(var(--accent) / 0.3)",
                    borderColor: "hsl(var(--accent) / 0.5)",
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {/* Gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="text-3xl mb-3 text-accent"
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="w-8 h-8 mx-auto" />
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold gradient-text mb-2"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
