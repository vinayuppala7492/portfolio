import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, School } from "lucide-react";

const education = [
  {
    year: "2023 – Present",
    title: "B.Tech",
    institution: "Vardhaman College of Engineering",
    icon: GraduationCap,
  },
  {
    year: "2021 – 2023",
    title: "Intermediate",
    institution: "Alphores Junior College, Karimnagar",
    icon: BookOpen,
  },
  {
    year: "2020 – 2021",
    title: "Schooling",
    institution: "Vignana Vardhini High School",
    location: "Rajanna Siricilla District",
    icon: School,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 section-glow" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            My academic journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:text-left text-center`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className={`glass-card-hover p-6 inline-block ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}>
                  <span className="text-primary text-sm font-medium">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-xl font-bold mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.institution}
                  </p>
                  {item.location && (
                    <p className="text-muted-foreground/60 text-xs mt-1">
                      {item.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Timeline Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="relative flex-shrink-0 z-10"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <item.icon className="text-primary" size={20} />
                </div>
              </motion.div>

              {/* Empty space for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
