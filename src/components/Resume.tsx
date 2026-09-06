import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { DownloadIcon } from "./Icons";

export default function Resume() {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="resume" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resume"
          title="Built for the Cloud"
          description="The full resume is being polished to enterprise standards."
        />

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

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                Download the latest version of my resume.
              </p>

              {/* Buttons */}
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

                {/* Request Resume */}
                <button
                  type="button"
                  onClick={() => {
                    setShowRequestForm(!showRequestForm);
                    setSubmitted(false);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold glass-strong hover:scale-[1.02] transition"
                  style={{ color: "var(--text-primary)" }}
                >
                  Request via Email
                </button>
              </div>

              {/* Request Form */}
              {showRequestForm && !submitted && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.25 }}
                  action="https://formsubmit.co/dahiyariya007@gmail.com"
                  method="POST"
                  className="mt-5 space-y-3"
                  onSubmit={() => setSubmitted(true)}
                >
                  {/* Email Subject */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Resume Request - Portfolio"
                  />

                  {/* Reply To */}
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none glass-strong"
                    style={{
                      color: "var(--text-primary)",
                      background: "transparent",
                    }}
                  />

                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none glass-strong"
                    style={{
                      color: "var(--text-primary)",
                      background: "transparent",
                    }}
                  />

                  {/* Message */}
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Write your message..."
                    defaultValue="Hi Riya, I would like to request your latest resume."
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none glass-strong resize-none"
                    style={{
                      color: "var(--text-primary)",
                      background: "transparent",
                    }}
                  />

                  {/* Honeypot spam protection */}
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Captcha */}
                  <input
                    type="hidden"
                    name="_captcha"
                    value="true"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-5 py-3 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition"
                  >
                    Send Resume Request
                  </button>
                </motion.form>
              )}

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-2xl p-4 text-center"
                  style={{
                    background: "rgba(34, 197, 94, 0.08)",
                    border: "1px solid rgba(34, 197, 94, 0.2)",
                  }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Resume request sent successfully.
                  </p>

                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Thank you! I’ll get back to you soon.
                  </p>
                </motion.div>
              )}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
