import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  siJavascript,
  siTypescript,
  siPython,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siHtml5,
  siNodedotjs,
  siExpress,
  siFastapi,
  siMongodb,
  siPostgresql,
  siMysql,
  siRedis,
  siFirebase,
  siSupabase,
  siDocker,
  siGit,
  siGithub,
  siVercel,
  siFigma,
  siLinux,
  siFramer,
  siGithubactions,
  siApachekafka,
  siCss,
  siPostman,
  siNetlify,
  siRender,
  siSocketdotio,
  siElevenlabs,
  siShadcnui,
  siOpenai,
  siClerk,
  siStripe,
} from "simple-icons/icons";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const techSkills = [
    // Programming Languages
    {
      name: "JavaScript",
      iconPath: siJavascript.path,
      hex: siJavascript.hex,
      category: "Languages",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "TypeScript",
      iconPath: siTypescript.path,
      hex: siTypescript.hex,
      category: "Languages",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Java",
      icon: "☕",
      category: "Languages",
      color: "from-red-400 to-red-600",
    },
    {
      name: "Python",
      iconPath: siPython.path,
      hex: siPython.hex,
      category: "Languages",
      color: "from-yellow-400 to-green-600",
    },

    // Frontend Technologies
    {
      name: "React.js",
      iconPath: siReact.path,
      hex: siReact.hex,
      category: "Frontend",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      name: "Next.js",
      iconPath: siNextdotjs.path,
      hex: siNextdotjs.hex,
      category: "Frontend",
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "Tailwind",
      iconPath: siTailwindcss.path,
      hex: siTailwindcss.hex,
      category: "Frontend",
      color: "from-teal-400 to-teal-600",
    },
    {
      name: "HTML5",
      iconPath: siHtml5.path,
      hex: siHtml5.hex,
      category: "Frontend",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "CSS",
      iconPath: siCss.path,
      hex: siCss.hex,
      category: "Frontend",
      color: "from-blue-400 to-purple-600",
    },
    {
      name: "shadcn/ui",
      iconPath: siShadcnui.path,
      hex: siShadcnui.hex,
      category: "Frontend",
      color: "from-blue-400 to-red-600",
    },
    // Backend Technologies
    {
      name: "Node.js",
      iconPath: siNodedotjs.path,
      hex: siNodedotjs.hex,
      category: "Backend",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Express",
      iconPath: siExpress.path,
      hex: siExpress.hex,
      category: "Backend",
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "Fast API",
      iconPath: siFastapi.path,
      hex: siFastapi.hex,
      category: "Backend",
      color: "from-green-400 to-red-600",
    },
    {
      name: "Socket.io",
      iconPath: siSocketdotio.path,
      hex: siSocketdotio.hex,
      category: "Database",
      color: "from-pink-400 to-emerald-700",
    },

    // Databases
    {
      name: "MongoDB",
      iconPath: siMongodb.path,
      hex: siMongodb.hex,
      category: "Database",
      color: "from-green-400 to-green-700",
    },
    {
      name: "PostgreSQL",
      iconPath: siPostgresql.path,
      hex: siPostgresql.hex,
      category: "Database",
      color: "from-blue-400 to-blue-700",
    },
    {
      name: "MySQL",
      iconPath: siMysql.path,
      hex: siMysql.hex,
      category: "Database",
      color: "from-blue-200 to-blue-500",
    },
    {
      name: "Redis",
      iconPath: siRedis.path,
      hex: siRedis.hex,
      category: "Database",
      color: "from-pink-400 to-emerald-700",
    },
    {
      name: "Firebase",
      iconPath: siFirebase.path,
      hex: siFirebase.hex,
      category: "Database",
      color: "from-yellow-400 to-orange-600",
    },
    {
      name: "Supabase",
      iconPath: siSupabase.path,
      hex: siSupabase.hex,
      category: "Database",
      color: "from-emerald-400 to-emerald-700",
    },

    // Cloud & DevOps

    {
      name: "Docker",
      iconPath: siDocker.path,
      hex: siDocker.hex,
      category: "DevOps",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Kafka",
      iconPath: siApachekafka.path,
      hex: siApachekafka.hex,
      category: "DevOps",
      color: "from-purple-700 to-green-600",
    },
    {
      name: "Git",
      iconPath: siGit.path,
      hex: siGit.hex,
      category: "DevOps",
      color: "from-red-400 to-red-600",
    },
    {
      name: "GitHub",
      iconPath: siGithub.path,
      hex: siGithub.hex,
      category: "DevOps",
      color: "from-slate-200 to-slate-400",
    },
    {
      name: "GitHub Actions",
      iconPath: siGithubactions.path,
      hex: siGithubactions.hex,
      category: "DevOps",
      color: "from-blue-400 to-red-600",
    },
    {
      name: "Vercel",
      iconPath: siVercel.path,
      hex: siVercel.hex,
      category: "DevOps",
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "Netlify",
      iconPath: siNetlify.path,
      hex: siNetlify.hex,
      category: "DevOps",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Render",
      iconPath: siRender.path,
      hex: siRender.hex,
      category: "DevOps",
      color: "from-red-400 to-red-600",
    },

    // Authentication
    
    {
      name: "Clerk",
      iconPath: siClerk.path,
      hex: siClerk.hex,
      category: "Authentication",
      color: "from-violet-500 to-indigo-700",
    },
    {
      name: "NextAuth",
      category: "Authentication",
      color: "from-indigo-400 to-cyan-500"
    },

    // Tools
    {
      name: "Figma",
      iconPath: siFigma.path,
      hex: siFigma.hex,
      category: "Design",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Framer Motion",
      iconPath: siFramer.path,
      hex: siFramer.hex,
      category: "Design",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Linux",
      iconPath: siLinux.path,
      hex: siLinux.hex,
      category: "Tools",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Postman",
      iconPath: siPostman.path,
      hex: siPostman.hex,
      category: "Tools",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "ElevenLabs",
      iconPath: siElevenlabs.path,
      hex: siElevenlabs.hex,
      category: "Tools",
      color: "from-emerald-400 to-emerald-700",
    },
    {
      name: "OpenAI",
      iconPath: siOpenai.path,
      hex: siOpenai.hex,
      category: "Tools",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Stripe",
      iconPath: siStripe.path,
      hex: siStripe.hex,
      category: "Tools",
      color: "from-green-400 to-green-600",
    },
  ];

  // Get unique categories and add "All" option
  const categories = [
    "All",
    ...Array.from(new Set(techSkills.map((skill) => skill.category))),
  ];

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "All"
      ? techSkills
      : techSkills.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-20 px-6 relative overflow-hidden"
      ref={ref}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full opacity-60"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-neon-purple rounded-full opacity-40"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-neon-pink rounded-full opacity-50"
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />

        {/* Large flowing orbs */}
        <motion.div
          className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-neon opacity-5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -20, 0],
            y: [0, 15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-20 w-24 h-24 bg-neon-pink opacity-8 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 25, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern with movement */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px", "0px 0px"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Tech Arsenal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I wield to craft digital masterpieces
          </p>
        </motion.div>

        {/* Tech Categories Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground border-accent shadow-lg shadow-accent/25"
                  : "glass-effect border-border/30 hover:border-accent/50 hover:bg-accent/10 text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Floating Tech Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 max-w-6xl mx-auto min-h-[400px]"
          key={selectedCategory} // Force re-render when category changes
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 50,
                rotateY: -180,
                scale: 0.3,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateY: 0,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.15,
                rotateY: 15,
                z: 50,
                transition: { duration: 0.3 },
              }}
              className="group relative cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative h-24 w-full glass-effect rounded-xl border border-border/30 overflow-hidden"
                whileHover={{
                  boxShadow: "0 0 30px hsl(var(--accent) / 0.3)",
                  borderColor: "hsl(var(--accent) / 0.5)",
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3 + (index % 3),
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              >
                {/* Gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-3 text-center">
                  <motion.div
                    className="text-2xl mb-2"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill={`#${skill.hex}`}
                    >
                      <path d={skill.iconPath} />
                    </svg>
                  </motion.div>
                  <motion.h3
                    className="text-xs font-semibold text-foreground/90 group-hover:text-accent transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.h3>
                </div>

                {/* Floating category badge */}
                <motion.div
                  className="absolute -top-2 -right-2 px-2 py-1 text-xs bg-gradient-neon rounded-full text-background font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.category}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Count Display */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p
            className="text-muted-foreground"
            key={selectedCategory}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Showing{" "}
            <span className="text-accent font-semibold">
              {filteredSkills.length}
            </span>{" "}
            {selectedCategory === "All"
              ? "technologies"
              : `${selectedCategory.toLowerCase()} skills`}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
