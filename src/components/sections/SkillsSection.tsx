import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", level: "More than Intermediate", icon: "🐍" },
  { name: "Java", level: "More than Intermediate", icon: "☕" },
  { name: "C", level: "Intermediate", icon: "⚡" },
  { name: "JavaScript", level: "Beginner", icon: "🌐" },
  { name: "Video Editing", level: "Content Creator", icon: "🎬" },
];

const getLevelStyles = (level: string) => {
  switch (level) {
    case "More than Intermediate":
      return { width: "85%", label: "text-primary" };
    case "Intermediate":
      return { width: "65%", label: "text-accent" };
    default:
      return { width: "45%", label: "text-muted-foreground" };
  }
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 section-glow" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const styles = getLevelStyles(skill.level);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card-hover p-6 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-heading text-lg font-semibold">{skill.name}</h3>
                  </div>
                </div>
                
                <div className={`text-xs font-medium mb-3 ${styles.label}`}>
                  {skill.level}
                </div>
                
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: styles.width } : {}}
                    transition={{ duration: 1.2, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
