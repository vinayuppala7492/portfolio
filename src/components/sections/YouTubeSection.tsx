import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Youtube, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const YouTubeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="youtube" className="py-32 section-glow" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Watch & <span className="gradient-text">Explore</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Content I create
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card-hover p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* YouTube Logo */}
              <motion.a
                href="https://youtube.com/vinayuppala7492"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="relative group"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-[#FF0000] flex items-center justify-center shadow-xl shadow-red-500/20 group-hover:shadow-red-500/30 transition-shadow duration-300">
                  <Youtube size={56} className="text-white" />
                </div>
              </motion.a>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                  My Channel
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join me on YouTube where I share tutorials, tech insights, and document my journey in development and content creation.
                </p>
                
                <Button variant="hero" size="lg" asChild>
                  <a 
                    href="https://youtube.com/vinayuppala7492" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    Visit Channel
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Video Placeholders */}
            <div className="mt-12 grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="relative aspect-video rounded-lg bg-white/[0.03] border border-white/5 overflow-hidden group cursor-pointer hover:border-white/10 transition-colors"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Play size={16} className="text-white/60 ml-0.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;
