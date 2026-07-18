import { motion } from "framer-motion";
import { timeline } from "../data/timeline";
import SectionHeading from "./SectionHeading";
const TimelineIcon = ({ icon }: { icon: string }) => {
  if (icon === "graduation") {
    return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path strokeWidth="1.8" d="M12 4L3 9l9 5 9-5-9-5Z" />
        <path strokeWidth="1.8" d="M7 12v4c0 1.5 2.5 3 5 3s5-1.5 5-3v-4" />
      </svg>
    );
  }

  if (icon === "chemistry") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path strokeWidth="1.8" d="M10 2v6l-5 8a3 3 0 0 0 2.5 4.5h9A3 3 0 0 0 19 16l-5-8V2" />
      </svg>
    );
  }

  if (icon === "research") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <circle cx="11" cy="11" r="7" strokeWidth="1.8" />
        <path strokeWidth="1.8" d="m20 20-3.5-3.5" />
      </svg>
    );
  }

  if (icon === "cloud") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path strokeWidth="1.8" d="M7 18a4 4 0 1 1 .5-8A5 5 0 0 1 17 8a4 4 0 1 1 0 10H7Z" />
      </svg>
    );
  }

  if (icon === "badge") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <circle cx="12" cy="8" r="5" strokeWidth="1.8" />
        <path strokeWidth="1.8" d="m9 14-1 8 4-2 4 2-1-8" />
      </svg>
    );
  }

  return null;
};

export default function Timeline() {
  return (
    <section id="timeline" className="section">
    <div className="mx-auto max-w-6xl">
       <SectionHeading
         eyebrow="Journey"
         title="The Road to Cloud Engineering"
         description="From science to the cloud — a journey of curiosity, learning and growth."
/>

      <div className="relative mt-20 lg:pr-24">
          {/* Horizontal Line */}
     <div className="hidden lg:block absolute left-8 right-8 top-0 h-px bg-white/10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative"
              >
                {/* Timeline Dot */}
               <div className="hidden lg:flex absolute left-1/2 -top-10 -translate-x-1/2 z-20 flex-col items-center">

  {/* Vertical connector */}
<div className="w-px h-10 bg-white/10" />
  {/* Dot */}
  <div className="relative">
   <div className="h-5 w-5 rounded-full border border-white/20 bg-slate-900/80 backdrop-blur-xl" />
<div className="absolute inset-[6px] rounded-full bg-sky-300/80" />
  </div>

</div>

                {/* Card */}
             <div
 className="
 mt-10
 glass-strong
 rounded-3xl
 p-6
min-h-[220px]
 h-full
 lift
 group
 relative
 overflow-hidden
 text-center
 "
>

<div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl group-hover:bg-sky-400/25 transition duration-500" />

{/* Icon */}
                <div className="flex justify-center mb-4">
  <div
    className="h-12 w-12 rounded-2xl glass flex items-center justify-center"
    style={{ color: "var(--text-primary)" }}
  >
    <TimelineIcon icon={t.icon} />
  </div>
</div>

                  {/* Title */}
                  <h3
                  className="text-[15px] font-medium tracking-wide mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.title}
                  </h3>

                  

                  {/* Description */}
                  <p
               className="text-[13px] leading-5 mb-2 line-clamp-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {t.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] px-2 py-0.5 rounded-md glass"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
