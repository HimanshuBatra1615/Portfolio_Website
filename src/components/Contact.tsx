import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  Building,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rudrakshgupta40@gmail.com",
      description: "Drop me a line anytime",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6396883674 ",
      description: "Mon-Sat from 8am to 10pm",
      color: "from-green-400 to-green-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available Worldwide",
      description: "Remote & on-site projects",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Quick turnaround guaranteed",
      color: "from-orange-400 to-orange-600",
    },
  ];

  const services = [
    { icon: "🚀", text: "Full-stack web development" },
    { icon: "💻", text: "Frontend web development" },
    { icon: "👨‍💻", text: "Backend web development" },
    { icon: "💡", text: "Technical consulting" },
    { icon: "🔧", text: "Code reviews & optimization" },
    { icon: "☁️", text: "Cloud deployment & DevOps" },
    { icon: "🎨", text: "UI/UX design collaboration" },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 relative overflow-hidden"
      ref={ref}
    >
      {/* Server/Database Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        {/* Database cylinder animations */}
        <motion.div
          className="absolute top-20 left-10 w-8 h-16 bg-gradient-to-b from-blue-500/90 to-blue-600/80 rounded-full"
          animate={{
            scaleY: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-32 right-20 w-6 h-12 bg-gradient-to-b from-green-500/50 to-green-600/50 rounded-full"
          animate={{
            scaleY: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Server rack visualization */}
        <motion.div className="absolute top-1/3 right-20 space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-16 h-2 bg-orange-400/70 rounded-sm"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>

        {/* API request visualization */}
        <motion.div
          className="absolute top-80 left-1/4"
          animate={{
            x: [0, 300, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="w-3 h-3 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="text-cyan-400/100 text-md font-mono"
              animate={{
                opacity: [1.5, 1, 1.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              POST /api/contact
            </motion.div>
          </div>
        </motion.div>

        {/* Terminal cursor blinking */}
        <motion.div
          className="absolute bottom-20 left-40 text-green-400/70 text-xl font-mono"
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            times: [0, 0.2, 0.8, 1],
            ease: "easeOut",
            repeat: Infinity,
          }}
        >
          $█
        </motion.div>

        {/* Floating command prompts */}
        <motion.div
          className="absolute top-20 right-1/3 text-purple-400/100 text-md font-mono"
          animate={{
            y: [0, -15, 0],
            opacity: [4.5, 3.0, 1.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          npm start
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-8 text-yellow-300/100 text-md font-mono"
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [1.8, 0.8, 1.8],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
        >
          git commit -m "services"
        </motion.div>

        {/* Data flow visualization */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M100,100 Q300,50 500,100 T900,100"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            strokeDasharray="10,5"
            animate={{
              strokeDashoffset: [0, -15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="3"
            fill="hsl(var(--accent))"
            opacity="0.6"
            animate={{
              cx: [100, 500, 900, 100],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-border/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">Let's Connect</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start Your Project
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your ideas into reality? Let's discuss how we can
            create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Card className="p-6 glass-effect border-border/30 hover:border-accent/30 transition-all duration-300 h-full group cursor-pointer">
                    <motion.div
                      className="flex flex-col items-start space-y-3"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`p-3 bg-gradient-to-r ${info.color} rounded-xl opacity-90 group-hover:opacity-100 transition-opacity`}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        <info.icon className="h-5 w-5 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-sm font-medium text-muted-foreground">
                          {info.value}
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Services Available */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                <Building className="h-5 w-5 text-accent" />
                Services Available
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.text}
                    className="flex items-center gap-3 p-3 rounded-lg glass-effect border border-border/30 hover:border-accent/30 transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.span
                      className="text-xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {service.icon}
                    </motion.span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {service.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="p-8 glass-effect border-border/30 hover:border-accent/20 transition-all duration-500 relative overflow-hidden">
              {/* Form background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, hsl(var(--accent)/0.05), transparent, hsl(var(--primary)/0.05))",
                    "linear-gradient(135deg, hsl(var(--primary)/0.05), transparent, hsl(var(--accent)/0.05))",
                    "linear-gradient(45deg, hsl(var(--accent)/0.05), transparent, hsl(var(--primary)/0.05))",
                  ],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="relative z-10">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                >
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <User className="h-5 w-5 text-accent" />
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground">
                    I'll get back to you within 24 hours
                  </p>
                </motion.div>

                <form
                  // onSubmit={handleSubmit}
                  action="https://formcarry.com/s/f9XAvWTXvAS"
                  method="POST"
                  className="space-y-6"
                >
                  <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label className="text-sm font-medium mb-2 block text-foreground">
                        Name *
                      </label>
                      <Input
                        name="name"
                        placeholder="Your full name"
                        className="glass-effect border-border/50 hover:border-accent/50 focus:border-accent transition-all duration-300"
                        required
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <label className="text-sm font-medium mb-2 block text-foreground">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="glass-effect border-border/50 hover:border-accent/50 focus:border-accent transition-all duration-300"
                        required
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="text-sm font-medium mb-2 block text-foreground">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      placeholder="Project inquiry, consultation, etc."
                      className="glass-effect border-border/50 hover:border-accent/50 focus:border-accent transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="text-sm font-medium mb-2 block text-foreground">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                      rows={6}
                      className="glass-effect border-border/50 hover:border-accent/50 focus:border-accent transition-all duration-300 resize-none"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-neon hover:bg-gradient-primary text-background font-semibold py-3 relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      {/* Button animation overlay */}
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />

                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-4 h-4 border-2 border-background border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Send className="h-4 w-4" />
                            </motion.div>
                          </>
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
