
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectCaseStudy() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-500 mb-6">
            The requested case study does not exist.
          </p>
          <Link
            to="/"
            className="inline-flex rounded-xl bg-sky-500 px-5 py-3 text-white hover:bg-sky-600 transition"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="mx-auto max-w-5xl">

        <Link
          to="/"
          className="inline-flex items-center mb-8 text-sky-500 hover:underline"
        >
          ← Back to Portfolio
        </Link>

        <div className="glass-strong rounded-3xl overflow-hidden">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]">
            <img
              src={project.banner}
              alt={project.title}
              className="w-full h-auto object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-400">
                {project.status}
              </span>

              {project.featured && (
                <span className="rounded-full bg-sky-500/15 px-3 py-1 text-xs text-sky-400">
                  Featured Project
                </span>
              )}
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {project.title}
            </h1>

            <p
              className="mt-4 text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-sky-500 px-5 py-3 hover:bg-sky-500/10 transition"
              >
                View GitHub
              </a>

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-sky-500 px-5 py-3 text-white hover:bg-sky-600 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        <section className="glass-strong rounded-3xl p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p>{project.caseStudy.overview}</p>
        </section>

        <section className="glass-strong rounded-3xl p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Business Problem</h2>
          <p>{project.caseStudy.businessProblem}</p>
        </section>

        <section className="glass-strong rounded-3xl p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p>{project.caseStudy.solution}</p>
        </section>

        <section className="glass-strong rounded-3xl p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="glass rounded-lg px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="glass-strong rounded-3xl p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>

          <ul className="space-y-3">
            {project.caseStudy.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="glass-strong rounded-3xl p-8 mt-8 mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            Future Improvements
          </h2>

          <ul className="space-y-3">
            {project.caseStudy.futureImprovements.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}
