import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { DownloadIcon } from "./Icons";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resume"
          title="Built for the Cloud"
          description="The full resume is being polished to enterprise standards."
        />

        {/* Resume Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-3xl p-7 sm:p-8">
              
              {/* Current Status */}
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-[10px] font-mono uppercase tracking-widest"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Current Status
                </span>

                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 font-semibold">
                  {profile.resumeStatus}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-xl sm:text-2xl font-semibold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Professional Resume Available
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                Download the latest version of my resume.
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-2.5">
                
                {/* View Resume */}
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold glass-strong hover:scale-[1.02] transition"
                  style={{ color: "var(--text-primary)" }}
                >
                  <DownloadIcon className="h-4 w-4" />
                  View Resume
                </a>

                {/* Request via Email */}
                <a
                  href={`mailto:${profile.email}?subject=Resume request — Riya Dahiya`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold glass-strong hover:scale-[1.02] transition"
                  style={{ color: "var(--text-primary)" }}
                >
                  Request via Email
                </a>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
