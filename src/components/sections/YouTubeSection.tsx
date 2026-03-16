import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Youtube, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHANNEL_URL = "https://www.youtube.com/@vinayuppala7492";

const videos = [
{
id: "RSr_Z3dDnZ4",
url: "https://youtu.be/RSr_Z3dDnZ4?si=RpHvqnJVph3bAUdY",
},
{
id: "AspDxtZzuKI",
url: "https://youtu.be/AspDxtZzuKI?si=1V8rotmi12BKzAL-",
},
{
id: "plYz5npqGFM",
url: "https://youtu.be/plYz5npqGFM?si=IsmyO4D60M7T0dFh",
},
];

const YouTubeSection = () => {
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

return ( <section id="youtube" className="py-32 section-glow" ref={ref}> <div className="container px-4">

```
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

          <motion.a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-[#FF0000] flex items-center justify-center shadow-xl shadow-red-500/20 group-hover:shadow-red-500/40 transition-shadow duration-300">
              <Youtube size={56} className="text-white" />
            </div>
          </motion.a>

          <div className="flex-1 text-center md:text-left">

            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              My Channel
            </h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join me on YouTube where I share tutorials, tech insights, and document my journey in development and content creation.
            </p>

            <Button variant="hero" size="lg" asChild>
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2"
              >
                Visit Channel
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </Button>

          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3">

          {videos.map((video, i) => (
            <motion.a
              key={i}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="relative aspect-video rounded-lg overflow-hidden group border border-white/5 hover:border-white/10"
            >

              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
                  <Play size={16} className="text-white ml-0.5" />
                </div>
              </div>

            </motion.a>
          ))}

        </div>

      </div>

    </motion.div>

  </div>
</section>


);
};

export default YouTubeSection;
