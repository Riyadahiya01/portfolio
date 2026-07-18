import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { CloseIcon, DownloadIcon } from "./Icons";

export default function Resume() {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <section id="resume" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
         eyebrow="Resume"
          title="Built for the Cloud"
          description="The full resume is being polished to enterprise standards. Preview the live one-pager below."
        />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5" />
            <ResumePreview />
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="glass-strong rounded-3xl p-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                  Current Status
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 font-semibold">
                  {profile.resumeStatus}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
  Professional Resume Available
</h3>
             <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
  Download the latest version of my resume or view it in fullscreen preview.
</p>

              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => setFullscreen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition"
                >
                  Open Fullscreen Preview
                </button>
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
                <a
                  href={`mailto:${profile.email}?subject=Resume request — Riya Dahiya`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold glass-strong hover:scale-[1.02] transition"
                  style={{ color: "var(--text-primary)" }}
                >
                  Request via Email
                </a>
              </div>
            </div>

            <div className="glass rounded-3xl p-5">
              <p className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                Need a tailored CV (Cloud Engineer, SysOps, Support)?
                <br />
                <span style={{ color: "var(--text-primary)" }}>I'll send a role-specific version within 24h.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md p-4 sm:p-8 overflow-y-auto"
            onClick={() => setFullscreen(false)}
          >
            <button
              onClick={() => setFullscreen(false)}
              className="fixed top-6 right-6 h-11 w-11 rounded-full glass-strong flex items-center justify-center z-10 hover:scale-110 transition"
              style={{ color: "var(--text-primary)" }}
              aria-label="Close"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto max-w-3xl"
            >
              <ResumePreview />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ResumePreview() {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8"
      style={{
        background: "var(--bg-secondary)",
        color: "var(--text-primary)",
        boxShadow: "inset 0 0 0 1px var(--border-soft)",
      }}
    >
      <div className="flex items-start justify-between gap-4 pb-4 border-b" style={{ borderColor: "var(--border-soft)" }}>
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Riya Dahiya</h3>
          <p className="text-sm mt-1 font-mono" style={{ color: "var(--text-secondary)" }}>
            Aspiring AWS Cloud Engineer · India
          </p>
        </div>
        <div className="text-right text-xs space-y-0.5 font-mono" style={{ color: "var(--text-secondary)" }}>
          <div>dahiyariya007@gmail.com</div>
          <div>linkedin.com/in/riya-dahiya-cloud-tech</div>
          <div>github.com/RD-Cloud-Tech</div>
        </div>
      </div>

      <Section title="SUMMARY">
        Research-trained problem solver transitioning into cloud engineering. Hands-on with AWS core services, Linux, Networking, Security, CI/CD and Infrastructure-as-Code fundamentals. Bias toward documentation, automation and least-privilege design.
      </Section>

      <Section title="EDUCATION">
        <Row left="M.Sc. Chemistry" right="Postgraduate" sub="Research methodology · Technical writing · Analytical thinking" />
        <Row left="B.Sc. Science" right="Undergraduate" sub="Scientific method · Quantitative reasoning" />
      </Section>

      <Section title="CORE SKILLS">
        <div className="text-xs leading-relaxed font-mono" style={{ color: "var(--text-secondary)" }}>
          AWS (EC2, S3, IAM, VPC, Lambda, CloudWatch, RDS) · Linux · Networking · Security fundamentals · GitHub & Git · GitHub Actions · Docker basics · Terraform (learning) · CloudWatch monitoring · Documentation
        </div>
      </Section>

      <Section title="SELECTED PROJECTS">
        <Row left="Serverless Static Website on AWS" right="S3 · CloudFront · ACM · Route 53" sub="Private bucket fronted by CloudFront with OAC, custom domain and TLS." />
        <Row left="Three-Tier VPC Architecture" right="VPC · EC2 · RDS · NAT GW" sub="Multi-AZ, defense-in-depth, SSM-based access (no bastion)." />
        <Row left="IAM Least-Privilege Lab" right="IAM · Access Analyzer" sub="Role-based access, MFA, permission boundaries." />
      </Section>

      <Section title="CERTIFICATIONS (ROADMAP)">
        <div className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
          AWS Certified Cloud Practitioner (in progress) → Solutions Architect Associate → SysOps Associate → DevOps Engineer Professional
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h4 className="text-[11px] font-bold tracking-[0.2em] mb-2" style={{ color: "var(--accent)" }}>
        {title}
      </h4>
      <div className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
        {children}
      </div>
    </div>
  );
}

function Row({ left, right, sub }: { left: string; right: string; sub: string }) {
  return (
    <div className="mb-2.5">
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-semibold text-sm">{left}</span>
        <span className="text-[11px] font-mono" style={{ color: "var(--text-secondary)" }}>
          {right}
        </span>
      </div>
      <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
        {sub}
      </p>
    </div>
  );
}
