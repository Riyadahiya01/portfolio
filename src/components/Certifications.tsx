import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import SectionHeading from "./SectionHeading";
import { AWSIcon, CheckIcon } from "./Icons";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title=" Milestones of Growth"
          description="Recognized achievements on my cloud learning journey."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-strong rounded-3xl p-7 lift relative overflow-hidden group"
            >
              <div className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${c.badgeColor} opacity-20 blur-3xl group-hover:opacity-30 transition`} />

              <div className="relative flex items-start gap-5">
                {/* Badge */}
                <div className="relative shrink-0">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1 rounded-full"
                  >
                    <svg viewBox="0 0 80 80" className="w-full h-full">
                      <circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 4" />
                    </svg>
                  </motion.div>
                  <div className={`h-20 w-20 rounded-full bg-gradient-to-br ${c.badgeColor} flex items-center justify-center text-white shadow-xl relative`}>
                    <AWSIcon className="h-8 w-8" />
                  </div>
                  {c.status === "Achieved" && (
                    <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-white">
                      <CheckIcon className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        c.status === "Achieved"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : c.status === "In Progress"
                            ? "bg-amber-500/15 text-amber-400"
                            : "bg-sky-500/15 text-sky-400"
                      }`}
                    >
                      {c.status}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                      {c.date}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                    {c.title}
                  </h3>
                  <p className="text-xs mt-1 font-mono" style={{ color: "var(--text-secondary)" }}>
                    {c.issuer}
                  </p>
                  <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {c.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
