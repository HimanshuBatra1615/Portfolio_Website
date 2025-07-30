import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const testimonials = [
    {
      name: "Amit Gurawa",
      role: "CEO, Amexus AI",
      content:
        "Rudraksh made a real impact during his internship. From web apps to AI voice integrations, he handled every task with focus and speed. A sharp mind with a proactive approach—great to work with!",
      rating: 5,
      avatar: "/Testimonial1.png",
    },
    {
      name: "Ruchi",
      role: "Founder, Ruchi Art House",
      content:
        "Rudraksh brought my vision to life with a beautiful, easy-to-navigate website. He listened patiently and delivered exactly what my small business needed. Super happy with the result!",
      rating: 5,
      avatar: "/Testimonial2.png",
    },
    {
      name: "Andrew Cook",
      role: "Tech Consultant & Branding Coach",
      content:
        "Rudraksh did a great job building my personal site. It's clean, professional, and truly reflects my brand. He’s efficient, thoughtful, and easy to collaborate with.",
      rating: 4,
      avatar: "#",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 px-6 bg-surface-dark/50 relative overflow-hidden"
      ref={ref}
    >
      {/* Network/Connection Animation Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {/* Animated network nodes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + Math.sin(i) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Connection lines between nodes */}
        <svg className="absolute inset-0 w-full h-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 10}%`}
              y1={`${30 + Math.sin(i) * 20}%`}
              x2={`${30 + i * 10}%`}
              y2={`${30 + Math.sin(i + 1) * 20}%`}
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              opacity="0.3"
              strokeDasharray="3,3"
              animate={{
                strokeDashoffset: [0, -6],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>

        {/* Floating WiFi symbols */}
        <motion.div
          className="absolute top-20 left-10 text-blue-400/40 text-4xl"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          📶
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20 text-purple-400/40 text-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🔗
        </motion.div>

        {/* Cloud connectivity symbols */}
        <motion.div
          className="absolute top-1/3 right-1/4 text-cyan-400/30 text-5xl"
          animate={{
            x: [0, 15, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ☁️
        </motion.div>

        {/* Data transfer visualization */}
        <motion.div
          className="absolute top-1/2 left-1/4 flex gap-1"
          animate={{
            x: [0, 200, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-green-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateY: 5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="p-6 glass-effect hover:glow-accent transition-all duration-500 border-border/50 h-full group">
                <motion.div
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Quote className="h-8 w-8 text-accent/50 mr-2" />
                  </motion.div>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <Star className="h-4 w-4 fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.p
                  className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                >
                  "{testimonial.content}"
                </motion.p>

                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                >
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover border-2 border-accent/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <div>
                    <h4 className="font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
