import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { timeline } from "../data/timeline";
import { CloseIcon, SendIcon, SparkleIcon } from "./Icons";


type Msg = { role: "ai" | "user"; text: string; suggestions?: string[] };

const initialSuggestions = [
  "Introduce Riya",
  "Show me her top skills",
  "Tell me about her projects",
  "What certifications is she pursuing?",
  "Walk me through her journey",
  "How do I contact her?",
];

function getResponse(input: string): { text: string; suggestions?: string[] } {
  const q = input.toLowerCase();

  if (/intro|who is|about|profile|summary/.test(q)) {
    return {
      text: `${profile.name} is an ${profile.role} based in ${profile.location}. ${profile.tagline} She brings a research mindset from her M.Sc. in Chemistry into building secure, scalable AWS infrastructure.`,
      suggestions: ["What are her strongest skills?", "Show recent projects", "Is she available to hire?"],
    };
  }
  if (/skill|tech|stack|tool|aws/.test(q)) {
    const top = skills.slice(0, 5).map((s) => `${s.icon} ${s.name}`).join(" · ");
    return {
      text: `Her core stack centers on AWS, Linux, Networking and Security with growing DevOps muscle. Top areas: ${top}. Every skill is backed by hands-on labs.`,
      suggestions: ["Tell me about a project", "Which certifications?", "How does she learn?"],
    };
  }
  if (/project|build|portfolio/.test(q)) {
    const list = projects.slice(0, 3).map((p) => `• ${p.title}`).join("\n");
    return {
      text: `She has ${projects.length} hands-on cloud projects. Recent highlights:\n${list}\n\nEach project documents architecture decisions, services used and outcomes.`,
      suggestions: ["Tell me about VPC project", "Show me security work", "What about CI/CD?"],
    };
  }
  if (/vpc|network/.test(q)) {
    const p = projects.find((x) => x.id === "vpc-three-tier");
    return { text: p?.description || "She has built three-tier VPC architectures with multi-AZ design." };
  }
  if (/security|iam/.test(q)) {
    const p = projects.find((x) => x.id === "iam-least-privilege");
    return { text: p?.description || "She follows least-privilege IAM principles with MFA and permission boundaries." };
  }
  if (/ci|cd|pipeline|github/.test(q)) {
    const p = projects.find((x) => x.id === "cicd-github-actions");
    return { text: p?.description || "She builds GitHub Actions pipelines using OIDC for keyless AWS deployments." };
  }
  if (/cert|exam/.test(q)) {
    const list = certifications.map((c) => `• ${c.title} — ${c.status}`).join("\n");
    return {
      text: `She's following a structured AWS certification roadmap:\n${list}`,
      suggestions: ["When will she be certified?", "Show her projects", "Contact info"],
    };
  }
  if (/journey|timeline|background|story|transition|career/.test(q)) {
    const list = timeline.map((t) => `${t.icon} ${t.title}`).join(" → ");
    return {
      text: `Her path: ${list}. A scientist who chose cloud — bringing rigor, documentation and analytical thinking into every build.`,
      suggestions: ["Why cloud engineering?", "Show projects", "Hire her"],
    };
  }
  if (/why cloud|why aws/.test(q)) {
    return { text: profile.about.transition };
  }
  if (/hire|available|contact|email|reach/.test(q)) {
    return {
      text: `She's ${profile.availability.toLowerCase()}. Reach her at ${profile.email}, on LinkedIn (linkedin.com/in/riya-dahiya-cloud-tech) or use the "Hire Riya" form at the bottom of the page.`,
      suggestions: ["Show recruiter dashboard", "Show resume", "Show certifications"],
    };
  }
  if (/resume|cv/.test(q)) {
    return {
      text: `The full PDF resume is "Coming Soon", but you can open the live preview from the Resume section. It captures everything a recruiter needs for an initial screen.`,
      suggestions: ["Show projects", "Contact info"],
    };
  }
  if (/navigate|help|menu|where/.test(q)) {
    return {
      text: `You can jump to: About, Skills, Projects, Certifications, Journey, Resume, Contact — via the navbar. For a fast scan, click "Recruiter View" in the top right.`,
    };
  }
  return {
    text: "I can introduce Riya, walk you through her skills, projects, certifications, journey or contact info. What would you like to explore?",
    suggestions: initialSuggestions.slice(0, 4),
  };
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "ai",
      text: `Hi 👋 I'm Riya's AI Assistant. What would you like to know?`,
      suggestions: initialSuggestions,
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const r = getResponse(text);
      setTyping(false);
      setMessages((m) => [...m, { role: "ai", text: r.text, suggestions: r.suggestions }]);
    }, 450);
  };

  return (
    <>
   {/* Chat Assistant Trigger */}
<motion.button
  onClick={() => setOpen(true)}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1, duration: 0.4 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  aria-label="Open AI Assistant"
  className={`fixed bottom-6 right-6 z-[60]
    ${open ? "hidden" : "flex"}
    h-14 w-14
    items-center justify-center
    rounded-full
    glass-strong
    border border-white/10
    shadow-lg shadow-sky-500/10`}
>
  <span
  className="text-xl"
  style={{ color: "var(--text-primary)" }}
>
  💬
</span>
</motion.button>
  
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-6 right-4 sm:right-6 z-[70] w-[calc(100vw-2rem)] sm:w-[400px] max-h-[80vh] flex flex-col rounded-3xl glass-strong shadow-2xl overflow-hidden"
            style={{ background: "var(--bg-secondary)" }}
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center justify-between border-b" style={{ borderColor: "var(--border-soft)" }}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 blur-md opacity-60" />
                  <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 via-blue-500 to-violet-600 flex items-center justify-center text-white">
                    <SparkleIcon className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    Portfolio AI
                  </div>
                  <div className="text-[10px] font-mono flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="h-8 w-8 rounded-full glass flex items-center justify-center"
                style={{ color: "var(--text-primary)" }}
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-sky-500 to-violet-600 text-white rounded-br-md"
                        : "glass rounded-bl-md"
                    }`}
                    style={m.role === "ai" ? { color: "var(--text-primary)" } : undefined}
                  >
                    {m.text}
                    {m.suggestions && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {m.suggestions.map((s) => (
                          <button
                            key={s}
                            onClick={() => send(s)}
                            className="text-[11px] px-2 py-1 rounded-md glass-strong hover:scale-[1.04] transition"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {typing && (
  <div className="flex justify-start px-4 pb-2">
    <div className="glass rounded-2xl px-4 py-3 flex items-center gap-1.5">
      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
        }}
        className="h-2 w-2 rounded-full bg-sky-400"
      />

      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0.15,
        }}
        className="h-2 w-2 rounded-full bg-sky-400"
      />

      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0.3,
        }}
        className="h-2 w-2 rounded-full bg-sky-400"
      />
    </div>
  </div>
)}
{listening && (
  <div className="flex justify-center pb-2">
    <div className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-medium animate-pulse">
      🎤 Listening...
    </div>
  </div>
)}
           {/* Input */}
<form
  onSubmit={(e) => {
    e.preventDefault();
    send(input);
  }}
  className="p-3 border-t flex items-center gap-2"
  style={{ borderColor: "var(--border-soft)" }}
>
  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Ask about Riya…"
    className="flex-1 px-4 py-2.5 rounded-xl glass text-sm focus:outline-none"
    style={{ color: "var(--text-primary)" }}
  />

  <button
    type="button"
    aria-label="Voice Input"
    onClick={() => {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        alert("Speech Recognition is not supported in this browser.");
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.start();
      setListening(true);

      recognition.onresult = (event: any) => {
  setInput(event.results[0][0].transcript);
  setListening(false);
};

recognition.onend = () => {
  setListening(false);
};
    }}
   className={`h-10 w-10 rounded-xl text-white flex items-center justify-center hover:scale-105 transition ${
  listening
    ? "bg-red-500 shadow-lg shadow-red-500/50 animate-pulse"
    : "glass"
}`}
  >
    🎤
  </button>

  <button
    type="submit"
    aria-label="Send"
    className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-white flex items-center justify-center hover:scale-105 transition"
  >
    <SendIcon className="h-4 w-4" />
  </button>
</form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
