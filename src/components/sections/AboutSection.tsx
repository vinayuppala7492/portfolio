import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Mail } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 section-glow" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            The story behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 glass-card-hover p-10"
          >
            <p className="text-foreground/90 text-lg leading-relaxed mb-6">
              I'm a passionate learner pursuing B.Tech at Vardhaman College of Engineering. 
              My journey in technology is fueled by curiosity and a drive to create meaningful solutions.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Beyond writing code, I channel my creativity into content creation—sharing insights 
              and documenting my growth. I believe in the power of continuous learning and 
              embracing challenges as opportunities for growth.
            </p>

            <div className="flex flex-wrap gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="text-primary" size={16} />
                <span>Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="text-primary" size={16} />
                <span>vinayuppala7492@gmail.com</span>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#" download>
                <Download className="mr-2" size={16} />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {[
              { label: "Projects", value: "5+", delay: 0 },
              { label: "Languages", value: "4+", delay: 0.1 },
              { label: "Creating", value: "Videos", delay: 0.2 },
              { label: "Status", value: "Learning", delay: 0.3 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + stat.delay }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="font-heading text-2xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
