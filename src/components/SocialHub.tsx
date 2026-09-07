import { motion } from "framer-motion";
import { socials } from "../data/socials";
import { getSocialIcon } from "./Icons";

export default function SocialHub() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-28 right-4 z-40 hidden md:flex flex-col gap-3"
      aria-label="Social links"
    >
      {socials.map((s) => (
        <motion.a
          key={s.id}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={s.ariaLabel}
          title={s.label}
          className="group relative"
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          {/* Soft hover glow */}
          <span
            className="
              absolute inset-0
              rounded-2xl
              bg-sky-400/10
              blur-xl
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
            "
          />

          {/* Icon container */}
          <span
            className="
              relative
              flex h-11 w-11
              items-center justify-center
              rounded-2xl
              border border-white/10
              bg-white/[0.035]
              backdrop-blur-xl
              shadow-lg
              transition-all duration-300
              group-hover:border-sky-400/30
              group-hover:bg-white/[0.07]
            "
          >
            <span
              className="
                relative
                transition-colors duration-300
              "
              style={{ color: "var(--text-secondary)" }}
            >
              {getSocialIcon(s.iconType, {
                className: "h-[18px] w-[18px]",
              })}
            </span>
          </span>

          {/* Tooltip */}
          <span
            className="
              pointer-events-none
              absolute right-full mr-3
              top-1/2 -translate-y-1/2
              whitespace-nowrap
              rounded-lg
              border border-white/10
              bg-black/40
              px-3 py-1.5
              text-xs
              opacity-0
              backdrop-blur-xl
              transition-opacity duration-200
              group-hover:opacity-100
            "
            style={{ color: "var(--text-primary)" }}
          >
            {s.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}
