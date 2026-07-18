import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";



export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
         eyebrow="ABOUT"
title="Engineering the Next Chapter"
description="Scientist by Training. Cloud Engineer by Choice."
        />

       <div className="space-y-5">

  {/* Main About Card */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="
    glass-strong
    rounded-3xl
    p-6
    lift
    group
    relative
    overflow-hidden
    "
  >
    <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl group-hover:bg-sky-400/25 transition duration-500" />

    <div className="relative z-10">

     <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass mb-5">
  <span className="text-lg">🎓</span>

  <span
    className="text-base font-semibold"
    style={{ color: "var(--text-primary)" }}
  >
    MSc Chemistry
  </span>

  <span
    className="text-base"
    style={{ color: "var(--text-secondary)" }}
  >
    →
  </span>

  <span
    className="text-base font-semibold"
    style={{ color: "#38bdf8" }}
  >
    Cloud Engineering
  </span>
</div>
      <h3
  className="text-xl md:text-2xl font-semibold mb-3"
  style={{ color: "var(--text-primary)" }}
>
  Building Cloud Expertise Through Continuous Learning
</h3>

      <p
        className="max-w-3xl text-sm leading-7"
        style={{ color: "var(--text-secondary)" }}
      >
        I transitioned from Chemistry to Cloud Computing with a strong focus on
        AWS, Linux, Networking and Security. My goal is to build scalable,
        secure and reliable cloud solutions while continuously expanding my
        expertise in modern cloud technologies.
      </p>

    </div>
  </motion.div>

  {/* Stats Cards */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

    {[
  { icon: "☁️", value: "20+", label: "AWS Services" },
  { icon: "📁", value: "5+", label: "Cloud Projects" },
  { icon: "🏆", value: "4+", label: "Certifications" },
  { icon: "📚", value: "500+", label: "Learning Hours" },
].map((item) => (
      <div
        key={item.label}
        className="
        glass-strong
        rounded-3xl
    p-4
min-h-[130px]
        lift
        group
        relative
        overflow-hidden
        flex
        flex-col
        justify-center
        "
      >
        <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl group-hover:bg-sky-400/25 transition duration-500" />

        <div className="relative z-10">
          <div className="h-10 w-10 rounded-2xl glass flex items-center justify-center mb-3 text-lg">
  {item.icon}
</div>
          <div
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            {item.value}
          </div>

          <div
            className="text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            {item.label}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
