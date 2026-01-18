import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Generative AI Certification",
    issuer: "Microsoft",
    icon: "🤖",
    description: "Comprehensive understanding of generative AI concepts and applications",
  },
  {
    title: "Fundamentals of AI",
    issuer: "Microsoft",
    icon: "🧠",
    description: "Core artificial intelligence principles and machine learning fundamentals",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-32 section-glow" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Professional credentials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-hover p-8 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1.5 mt-1">
                    <Award size={12} className="text-primary" />
                    {cert.issuer}
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-5">
                {cert.description}
              </p>

              <Button variant="ghost" size="sm" className="w-full text-muted-foreground hover:text-foreground">
                <ExternalLink size={14} />
                View Certificate
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
