import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SectionHeading from "./SectionHeading";

const categoryColor: Record<string, string> = {
  Cloud: "from-sky-400 to-blue-600",
  DevOps: "from-violet-400 to-fuchsia-600",
  Systems: "from-emerald-400 to-teal-600",
  Security: "from-rose-400 to-red-600",
  Tools: "from-amber-400 to-orange-600",
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="The Cloud Toolkit"
          description=" The technologies powering my learning and projects."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass-strong rounded-3xl p-6 lift relative overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${categoryColor[s.category]} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${categoryColor[s.category]} flex items-center justify-center text-xl text-white shadow-lg`}>
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
                        {s.name}
                      </h3>
                      <span className="text-[11px] font-mono uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                        {s.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-mono font-bold gradient-text">{s.level}%</span>
                </div>

                <p className="text-xs leading-relaxed mb-4 min-h-[3rem]" style={{ color: "var(--text-secondary)" }}>
                  {s.description}
                </p>

                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border-soft)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${categoryColor[s.category]} shadow-[0_0_12px_currentColor]`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
