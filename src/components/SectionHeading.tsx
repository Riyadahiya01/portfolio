import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={`mb-12 ${center ? "text-center mx-auto" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest ${center ? "" : ""}`}
        style={{ color: "var(--text-secondary)" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`mt-4 text-base sm:text-lg max-w-2xl ${center ? "mx-auto" : ""}`}
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
