import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";
import { skills } from "../data/skills";
import { certifications } from "../data/certifications";
import { projects } from "../data/projects";
import { CloseIcon, DownloadIcon, SparkleIcon } from "./Icons";

export default function RecruiterDashboard({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-y-auto relative"
            style={{ background: "var(--bg-secondary)" }}
          >
            {/* Header bar */}
            <div className="sticky top-0 z-10 glass-strong rounded-t-3xl px-6 py-4 flex items-center justify-between border-b" style={{ borderColor: "var(--border-soft)" }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 via-rose-500 to-violet-600 flex items-center justify-center text-white shadow-lg">
                  <SparkleIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                    Recruiter Dashboard
                  </div>
                  <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    Candidate Overview · Riya Dahiya
                  </h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:scale-110 transition"
                style={{ color: "var(--text-primary)" }}
                aria-label="Close recruiter dashboard"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 grid md:grid-cols-3 gap-4">
              {/* Overview */}
              <Card title="Candidate Overview" span={2}>
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-violet-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    RD
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                      {profile.name}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {profile.role} · {profile.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {profile.tagline}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Hiring snapshot */}
              <Card title="Hiring Snapshot">
                <div className="space-y-2 text-sm">
                  {Object.entries(profile.hiringSnapshot).map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                        {k.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="text-xs font-semibold text-right" style={{ color: "var(--text-primary)" }}>
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Key skills */}
              <Card title={`Key Skills (${skills.length})`} span={2}>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((s) => (
                    <span
                      key={s.name}
                      className="text-xs px-2.5 py-1 rounded-lg glass font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {s.icon} {s.name}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Certifications */}
              <Card title="Certifications Roadmap">
                <ul className="space-y-2 text-xs">
                  {certifications.map((c) => (
                    <li key={c.id} className="flex items-start gap-2">
                      <span
                        className={`mt-1 h-2 w-2 rounded-full shrink-0 ${
                          c.status === "Achieved"
                            ? "bg-emerald-400"
                            : c.status === "In Progress"
                              ? "bg-amber-400"
                              : "bg-sky-400"
                        }`}
                      />
                      <div>
                        <div className="font-semibold" style={{ color: "var(--text-primary)" }}>
                          {c.title.replace("AWS Certified ", "")}
                        </div>
                        <div className="font-mono text-[10px]" style={{ color: "var(--text-secondary)" }}>
                          {c.status} · {c.date}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Projects */}
              <Card title={`Featured Projects (${projects.length})`} span={3}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {projects.map((p) => (
                    <div key={p.id} className="glass rounded-xl p-3">
                      <div className="text-[10px] font-mono uppercase tracking-wider mb-1" style={{ color: "var(--text-secondary)" }}>
                        {p.category}
                      </div>
                      <div className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                        {p.title}
                      </div>
                      <div className="text-xs leading-snug" style={{ color: "var(--text-secondary)" }}>
                        {p.summary}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Resume access */}
              <Card title="Resume Access" span={2}>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="#resume"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-violet-600 shadow-lg"
                  >
                    Open Live Preview
                  </a>
                  <button
                    disabled
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold glass opacity-60 cursor-not-allowed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <DownloadIcon className="h-4 w-4" /> PDF — Coming soon
                  </button>
                </div>
              </Card>

              {/* Contact actions */}
              <Card title="Contact Actions">
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href={`mailto:${profile.email}`}
                    className="px-3 py-2 rounded-lg glass hover:scale-[1.02] transition text-xs font-mono break-all"
                    style={{ color: "var(--text-primary)" }}
                  >
                    ✉ {profile.email}
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg glass hover:scale-[1.02] transition text-xs"
                    style={{ color: "var(--text-primary)" }}
                  >
                    💼 LinkedIn
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg glass hover:scale-[1.02] transition text-xs"
                    style={{ color: "var(--text-primary)" }}
                  >
                    🐙 GitHub
                  </a>
                </div>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Card({ title, children, span = 1 }: { title: string; children: React.ReactNode; span?: 1 | 2 | 3 }) {
  const spanClass = span === 3 ? "md:col-span-3" : span === 2 ? "md:col-span-2" : "";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`glass rounded-2xl p-5 ${spanClass}`}
    >
      <div className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: "var(--text-secondary)" }}>
        {title}
      </div>
      {children}
    </motion.div>
  );
}
