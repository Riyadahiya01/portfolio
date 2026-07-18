import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { profile } from "../data/profile";
import { ArrowRightIcon, CloudIcon, DownloadIcon, SparkleIcon } from "./Icons";

export default function Hero({ onOpenRecruiter }: { onOpenRecruiter: () => void }) {

  const text = "AWS Cloud Engineer";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = text.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === text) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        const nextText = text.slice(0, displayText.length - 1);
        setDisplayText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section id="top" className="relative section pt-36 md:pt-44 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-3.5 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability} · Based in {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
            style={{ color: "var(--text-primary)" }}
          >
            {profile.name.split(" ")[0]}
            <br />
            <span className="gradient-text">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex items-center gap-3"
          >
            <CloudIcon className="h-5 w-5 text-sky-400" />
            <h2
  className="text-lg sm:text-xl font-medium min-h-[32px]"
  style={{ color: "var(--text-primary)" }}
>
  {displayText}
  <span className="animate-pulse">|</span>
</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
            href="/resume.pdf"
target="_blank"
rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 shadow-lg shadow-blue-500/30 hover:scale-[1.03] transition-transform"
            >
              <DownloadIcon className="h-4 w-4" /> View Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold glass-strong hover:scale-[1.03] transition-transform"
              style={{ color: "var(--text-primary)" }}
            >
              Explore Projects <ArrowRightIcon className="h-4 w-4" />
            </a>
           
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12 grid grid-cols-3 gap-3 max-w-md"
          >
            {[
              { k: "10+", v: "Hands-on labs" },
              { k: "6", v: "Cloud projects" },
              { k: "4", v: "Certifications mapped" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl px-4 py-3">
                <div className="text-2xl font-bold gradient-text">{s.k}</div>
                <div className="text-[11px] mt-0.5" style={{ color: "var(--text-secondary)" }}>
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

    
