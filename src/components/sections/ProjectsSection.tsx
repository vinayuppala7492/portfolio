import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Gamepad2, Brain, Lock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Hangman Game",
    description: "Classic word guessing game with difficulty levels and score tracking.",
    tech: ["Python"],
    icon: Gamepad2,
  },
  {
    title: "Rock Paper Scissors",
    description: "Interactive game with AI opponent and win/loss statistics.",
    tech: ["Python"],
    icon: Gamepad2,
  },
  {
    title: "Quiz Application",
    description: "Dynamic quiz app with multiple categories and instant feedback.",
    tech: ["Python", "JSON"],
    icon: HelpCircle,
  },
  {
    title: "Caesar Cipher",
    description: "Encryption tool implementing the classic Caesar cipher algorithm.",
    tech: ["Python"],
    icon: Lock,
  },
  {
    title: "Guess the Number",
    description: "Number guessing game with hints and attempt tracking.",
    tech: ["JavaScript"],
    icon: Brain,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 section-glow" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-hover group overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 flex items-center justify-center relative">
                <project.icon 
                  size={48} 
                  className="text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-white/5 text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-foreground">
                    <Github size={15} />
                    Code
                  </Button>
                  <Button variant="hero" size="sm" className="flex-1">
                    <ExternalLink size={15} />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
