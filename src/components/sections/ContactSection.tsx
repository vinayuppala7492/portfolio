import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    const data = { name, email, message };

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent",
          description: "Thank you for reaching out. I'll respond soon.",
        });

        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Email error:", error);
      // ❌ Connection error toast removed completely
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 section-glow" ref={ref}>
      <div className="container px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Let's create something together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >

            <div className="glass-card-hover p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>

              <div>
                <h4 className="font-heading font-semibold">Email</h4>
                <a
                  href="mailto:vinayuppala7492@gmail.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  vinayuppala7492@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card-hover p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>

              <div>
                <h4 className="font-heading font-semibold">Location</h4>
                <p className="text-muted-foreground text-sm">
                  Hyderabad, Telangana
                </p>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >

            <form onSubmit={handleSubmit} className="glass-card-hover p-8 space-y-5">

              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>

                <Input
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-white/[0.02] border-white/10 focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>

                <Input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-white/[0.02] border-white/10 focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>

                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-white/[0.02] border-white/10 focus:border-primary/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Send size={16} />
                  </motion.div>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight size={16} />
                  </>
                )}
              </Button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
