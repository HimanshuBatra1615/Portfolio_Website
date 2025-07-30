import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      id: 1,
      title: "From React.js to Next.js: Elevate Your Web Development Game",
      excerpt:
        "Discover how transitioning from React.js to Next.js can supercharge your web development workflow with features like server-side rendering, API routes, and built-in performance optimization.",
      date: "2024-06-04",
      readTime: "6 min read",
      tags: ["React", "Next.js", "Web Development", "Full Stack Development"],
      url: "https://rudrakshgupta40.hashnode.dev/from-reactjs-to-nextjs-elevate-your-web-development-game",
      image: "/blog1.png",
    },

    {
      id: 2,
      title: "How to start with React.js: A Simple Guide for Beginners",
      excerpt:
        "A beginner-friendly guide to help you get started with React.js. Learn the core concepts, project setup, and how to build your first interactive UI components step by step.",
      date: "2024-06-07",
      readTime: "5 min read",
      tags: ["React", "Web Development", "Javascript"],
      url: "https://rudrakshgupta40.hashnode.dev/how-to-start-with-reactjs-a-simple-guide-for-beginners",
      image: "/blog2.png",
    },
    {
      id: 3,
      title: "Discover HTMX: Revolutionizing Modern Web Development",
      excerpt:
        "Explore how HTMX is transforming modern web development by enabling dynamic, interactive user experiences using standard HTML—without relying heavily on JavaScript frameworks.",
      date: "2024-06-22",
      readTime: "6 min read",
      tags: ["HTMX", "HTML5", "Frontend", "Web Development"],
      url: "https://rudrakshgupta40.hashnode.dev/discover-htmx-revolutionizing-modern-web-development",
      image: "/blog3.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
    },
  };

  return (
    <section
      id="blogs"
      className="py-20 px-6 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating blog icons */}
        <motion.div
          className="absolute top-20 left-16 text-accent/20 text-3xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          📝
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-neon-purple/30 text-2xl"
          animate={{
            x: [0, -20, 0],
            y: [0, -40, 0],
            rotate: [0, -180, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        >
          ✍️
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-neon-cyan/25 text-xl"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        >
          💡
        </motion.div>

        {/* Morphing background shapes */}
        <motion.div
          className="absolute top-1/4 right-12 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            x: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-16 w-24 h-24 bg-neon-pink opacity-8 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 3 }}
        />

        {/* Animated article lines */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              style={{
                left: "10%",
                right: "10%",
                top: `${20 + i * 10}%`,
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Latest Blogs
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Thoughts, insights, and experiences from my development journey
          </motion.p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              className="group relative cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative glass-effect rounded-2xl border border-border/30 overflow-hidden h-full"
                whileHover={{
                  boxShadow: "0 20px 40px hsl(var(--accent) / 0.1)",
                  borderColor: "hsl(var(--accent) / 0.3)",
                }}
                onClick={() => window.open(post.url, "_blank")}
              >
                {/* Background gradient */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />

                {/* Blog Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <motion.div
                    className="text-accent/50 text-4xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Floating particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent/30 rounded-full"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${40 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: index * 0.2 + i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {post.title}
                  </motion.h3>

                  {/* Excerpt */}
                  <motion.p
                    className="text-sm text-muted-foreground mb-4 line-clamp-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {post.excerpt}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {post.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-2 py-1 text-xs bg-secondary/50 text-accent rounded-full border border-accent/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: 1.2 + index * 0.1 + tagIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Read More Button */}
                  <motion.div
                    className="flex items-center gap-2 text-accent text-sm font-medium group-hover:text-accent-foreground transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* External link indicator */}
                <motion.div
                  className="absolute top-4 right-4 p-2 rounded-full bg-secondary/50 text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                >
                  <ExternalLink className="h-4 w-4" />
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="glow-effect hover:glow-accent transition-all duration-300"
              onClick={() =>
                window.open("https://rudrakshgupta40.hashnode.dev/", "_blank")
              }
            >
              <span className="mr-2">View All Posts</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="h-4 w-4" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
