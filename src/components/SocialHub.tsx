import { motion } from "framer-motion";
import { socials } from "../data/socials";
import { getSocialIcon } from "./Icons";

export default function SocialHub() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="fixed top-28 right-3 sm:right-5 z-40 hidden md:flex flex-col gap-3"
      aria-label="Social links"
    >
      {socials.map((s, i) => (
        <motion.a
          key={s.id}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={s.ariaLabel}
          title={s.label}
          className="group relative"
          animate={{
            y: [0, -6, 0, 4, 0],
          }}
          transition={{
            duration: 4 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.92 }}
        >
          {/* Glow */}
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 opacity-0 group-hover:opacity-70 blur-lg transition-opacity duration-500" />
          {/* Pulse ring */}
          <span className="pointer-events-none absolute inset-0 rounded-2xl border border-sky-400/40 opacity-0 group-hover:opacity-100 animate-ping" />

          <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl glass-strong shadow-xl">
            <span
              className="absolute inset-[2px] rounded-[14px] bg-gradient-to-br opacity-30"
              style={{
                backgroundImage:
                  s.iconType === "aws"
                    ? "linear-gradient(135deg, #f59e0b, #ef4444)"
                    : s.iconType === "linkedin"
                      ? "linear-gradient(135deg, #0a66c2, #38bdf8)"
                      : s.iconType === "github"
                        ? "linear-gradient(135deg, #6b7280, #1f2937)"
                        : "linear-gradient(135deg, #06b6d4, #6366f1)",
              }}
            />
            <span className="relative" style={{ color: "var(--text-primary)" }}>
              {getSocialIcon(s.iconType, { className: "h-5 w-5" })}
            </span>
          </span>

          {/* Tooltip */}
          <span
            className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity glass-strong"
            style={{ color: "var(--text-primary)" }}
          >
            {s.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}
