import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {  MoonIcon, SunIcon, MenuIcon, CloseIcon, SparkleIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#timeline", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ onOpenRecruiter }: { onOpenRecruiter: () => void }) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
      
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
  className={`mx-auto px-4 sm:px-6 transition-all duration-500 ${
  scrolled ? "max-w-4xl" : "max-w-5xl"
  }`}
>
          <div
          className={`overflow-hidden flex items-center justify-between px-5 transition-all duration-500 border ${
  scrolled
    ? "py-2 shadow-xl border-white/10"
    : "py-3 border-white/10"
}`}
           style={{
  borderRadius: "9999px",
  background: "rgba(15, 23, 42, 0.15)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow: "0 8px 30px rgba(0,0,0,0.20)",
}}
          >
            {/* Logo */}
          <a href="#top" className="flex items-center">
  <span
    className="text-lg font-medium tracking-[0.15em]"
    style={{ color: "rgba(255,255,255,0.9)" }}
  >
    RD
  </span>
</a>

            {/* Desktop Nav */}
           <nav className="hidden lg:flex items-center gap-1 ml-4">
              {links.map((l) => (
                <a
  key={l.href}
  href={l.href}
  onMouseEnter={() => setActiveLink(l.href)}
                  onMouseLeave={() => setActiveLink("")}
  className="
  relative group
  px-4
  py-2
  text-sm
  font-medium
  transition-all
  duration-300
  "
  style={{ color: "var(--text-secondary)" }}
>
  <span
  className={`relative z-10 transition-colors duration-300 ${
    activeLink === l.href
      ? "text-cyan-400"
      : ""
  }`}
>
  {l.label}
</span>
                  {activeLink === l.href && (
  <motion.div
    layoutId="active-indicator"
    className="
      absolute
      bottom-0
      left-1/2
      h-[2px]
      w-6
      -translate-x-1/2
      rounded-full
      bg-cyan-400
      shadow-[0_0_15px_rgba(34,211,238,0.9)]
    "
  />
)}

  <span
    className="
    absolute
    inset-0
    rounded-full
    opacity-0
    transition-all
    duration-300
    group-hover:opacity-100
    bg-white/5
    backdrop-blur-md
    "
  />

  
</a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenRecruiter}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 shadow-lg shadow-blue-500/30 hover:shadow-violet-500/40 transition-all hover:scale-[1.02]"
              >
                <SparkleIcon className="h-4 w-4" />
                Recruiter View
              </button>

              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="h-10 w-10 inline-flex items-center justify-center rounded-xl border transition-colors hover:bg-white/5"
                style={{ borderColor: "var(--border-soft)", color: "var(--text-primary)" }}
              >
                {theme === "dark" ? (
                  <SunIcon className="h-4 w-4" />
                ) : (
                  <MoonIcon className="h-4 w-4" />
                )}
              </button>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-xl border"
                style={{ borderColor: "var(--border-soft)", color: "var(--text-primary)" }}
              >
                {mobileOpen ? (
                  <CloseIcon className="h-4 w-4" />
                ) : (
                  <MenuIcon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 inset-x-4 z-40 lg:hidden"
          >
            <div className="glass-strong rounded-2xl p-3 flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium rounded-xl hover:bg-white/5"
                  style={{ color: "var(--text-primary)" }}
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenRecruiter();
                }}
                className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600"
              >
                Recruiter View
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
