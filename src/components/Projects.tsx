
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Hands-On Cloud Solutions."
          description="Hands-on projects that transformed learning into real-world experience."
        />

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-strong rounded-3xl overflow-hidden lift"
            >
              <div className="aspect-[16/9] overflow-hidden bg-black/5">
                <img
                  src={project.banner}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : project.status === "In Progress"
                        ? "bg-amber-500/15 text-amber-400"
                        : "bg-slate-500/15 text-slate-400"
                    }`}
                  >
                    {project.status}
                  </span>

                  {project.featured && (
                    <span className="text-xs font-semibold text-sky-400">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="glass rounded-lg px-2.5 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-sky-500 px-4 py-2 text-center text-sm font-medium hover:bg-sky-500/10 transition"
                  >
                    GitHub
                  </a>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="flex-1 rounded-xl bg-sky-500 text-white px-4 py-2 text-center text-sm font-medium hover:bg-sky-600 transition"
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
