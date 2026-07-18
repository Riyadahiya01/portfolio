import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { SendIcon, CheckIcon } from "./Icons";

export default function HireForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", role: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Opportunity: ${form.role || "Cloud role"} at ${form.company || "your company"}`);
    const body = encodeURIComponent(
      `Hi Riya,\n\nMy name is ${form.name} from ${form.company}.\nWe're hiring for: ${form.role}\n\n${form.message}\n\nReach me at: ${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="hire" className="section">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Hire Riya"
          title="Send a direct inquiry."
          description="A short note is enough. I'll respond personally, usually within 24 hours."
          align="center"
        />

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-7 md:p-10 relative overflow-hidden"
        >
          <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-4">
            <Field label="Your name" placeholder="Jane Recruiter" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="Company" placeholder="Acme Cloud Inc." value={form.company} onChange={(v) => setForm({ ...form, company: v })} required />
            <Field label="Work email" type="email" placeholder="jane@acme.com" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            <Field label="Role" placeholder="Cloud Engineer · SysOps · Support" value={form.role} onChange={(v) => setForm({ ...form, role: v })} required />
            <div className="md:col-span-2">
              <Label>Message</Label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell Riya about the role, team and what excites you about her profile."
                className="w-full px-4 py-3 rounded-2xl glass text-sm focus:outline-none resize-none"
                style={{ color: "var(--text-primary)" }}
              />
            </div>
          </div>

          <div className="relative mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
              By submitting, your default email client opens with a pre-filled message.
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition"
            >
              {sent ? (
                <>
                  <CheckIcon className="h-4 w-4" /> Opening your mail client…
                </>
              ) : (
                <>
                  <SendIcon className="h-4 w-4" /> Send Inquiry
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-2xl glass text-sm focus:outline-none"
        style={{ color: "var(--text-primary)" }}
      />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--text-secondary)" }}>
      {children}
    </label>
  );
}
