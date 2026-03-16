import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/vinayuppala7492" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/vinayuppala7492" },
  { name: "X", icon: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ), url: "https://x.com/vinayuppala7492" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/vinayuppala7492" },
];

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#" className="font-heading text-2xl font-bold gradient-text">
            Vinay Uppala
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground/60 text-sm">
            © {new Date().getFullYear()} Vinay Uppala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
