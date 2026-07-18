import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { socials } from "../data/socials";
import SectionHeading from "./SectionHeading";
import { getSocialIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="CONTACT"
          title="Let's Connect"
          description="Let's build something on the cloud."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.id}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.ariaLabel}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-strong rounded-3xl p-6 lift group relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl group-hover:bg-sky-400/25 transition" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center mb-3" style={{ color: "var(--text-primary)" }}>
                  {getSocialIcon(s.iconType, { className: "h-5 w-5" })}
                </div>
                <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                  {s.label}
                </h3>
                <p className="text-xs mt-1 font-mono break-all" style={{ color: "var(--text-secondary)" }}>
                  {s.id === "email" ? profile.email : s.href.replace(/^https?:\/\//, "")}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
