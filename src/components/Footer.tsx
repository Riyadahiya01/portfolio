import { profile } from "../data/profile";
import { CloudIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-10 py-10 px-6 border-t" style={{ borderColor: "var(--border-soft)" }}>
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 via-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
            RD
          </div>
          <div>
            <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              {profile.name}
            </div>
            <div className="text-[11px] flex items-center gap-1" style={{ color: "var(--text-secondary)" }}>
              <CloudIcon className="h-3 w-3" /> {profile.role}
            </div>
          </div>
        </div>
        <div className="text-xs font-mono text-center md:text-right" style={{ color: "var(--text-secondary)" }}>
          © {new Date().getFullYear()} Riya Dahiya · Crafted with precision, deployed with care.
        </div>
      </div>
    </footer>
  );
}
