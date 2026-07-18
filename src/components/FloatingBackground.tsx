import { motion } from "framer-motion";
import { useMemo } from "react";

// Inspired by AWS architecture diagrams: cubes, nodes, cloud glyphs, data particles
type FloatNode = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "cube" | "ring" | "hex" | "diamond" | "node";
  hue: number;
};

function makeNodes(count: number, seed = 1): FloatNode[] {
  const arr: FloatNode[] = [];
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 0; i < count; i++) {
    arr.push({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: 30 + rand() * 80,
     duration: 24 + rand() * 20,
      delay: -rand() * 20,
      type: (["cube", "ring", "hex", "diamond", "node"] as const)[Math.floor(rand() * 5)],
      hue: 190 + rand() * 90,
    });
  }
  return arr;
}

function Shape({ node }: { node: FloatNode }) {
  const color = `hsl(${node.hue}, 80%, 60%)`;
  const stroke = `hsl(${node.hue}, 80%, 70%)`;

  if (node.type === "cube") {
    const s = node.size;
    return (
      <svg width={s} height={s} viewBox="0 0 100 100" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id={`g-${node.id}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <g fill={`url(#g-${node.id})`} stroke={stroke} strokeWidth="1" strokeOpacity="0.6">
          <polygon points={`20,30 50,15 80,30 80,70 50,85 20,70`} />
          <polyline points={`20,30 50,45 80,30`} fill="none" />
          <line x1="50" y1="45" x2="50" y2="85" />
        </g>
        <text x="50" y="55" textAnchor="middle" fontSize="9" fill={stroke} opacity="0.6" fontFamily="monospace">
          AWS
        </text>
      </svg>
    );
  }
  if (node.type === "ring") {
    return (
      <svg width={node.size} height={node.size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke={stroke} strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="50" cy="50" r="25" fill="none" stroke={stroke} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
        <circle cx="50" cy="50" r="6" fill={color} fillOpacity="0.5" />
      </svg>
    );
  }
  if (node.type === "hex") {
    return (
      <svg width={node.size} height={node.size} viewBox="0 0 100 100">
        <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill={color} fillOpacity="0.08" stroke={stroke} strokeWidth="1" strokeOpacity="0.5" />
        <polygon points="50,25 75,38 75,62 50,75 25,62 25,38" fill="none" stroke={stroke} strokeWidth="0.6" strokeOpacity="0.3" />
      </svg>
    );
  }
  if (node.type === "diamond") {
    return (
      <svg width={node.size} height={node.size} viewBox="0 0 100 100">
        <polygon points="50,10 90,50 50,90 10,50" fill={color} fillOpacity="0.1" stroke={stroke} strokeWidth="1" strokeOpacity="0.5" />
        <polygon points="50,30 70,50 50,70 30,50" fill={stroke} fillOpacity="0.2" />
      </svg>
    );
  }
  // node = network node
  return (
    <svg width={node.size} height={node.size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="10" fill={color} fillOpacity="0.6" />
      <circle cx="50" cy="50" r="20" fill="none" stroke={stroke} strokeWidth="0.6" strokeOpacity="0.4" />
      <line x1="50" y1="50" x2="90" y2="20" stroke={stroke} strokeOpacity="0.3" strokeWidth="0.6" />
      <line x1="50" y1="50" x2="10" y2="80" stroke={stroke} strokeOpacity="0.3" strokeWidth="0.6" />
      <line x1="50" y1="50" x2="90" y2="80" stroke={stroke} strokeOpacity="0.3" strokeWidth="0.6" />
      <circle cx="90" cy="20" r="3" fill={stroke} />
      <circle cx="10" cy="80" r="3" fill={stroke} />
      <circle cx="90" cy="80" r="3" fill={stroke} />
    </svg>
  );
}

export default function FloatingBackground() {
const nodes = useMemo(() => makeNodes(8, 42), []);
const particles = useMemo(() => makeNodes(10, 99), []);

  return (
    <>
      <div className="aurora-bg" />
      <div className="grid-overlay" />
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        {nodes.map((n) => (
          <motion.div
            key={`s-${n.id}`}
            className="absolute"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              opacity: 0.55,
             filter: "drop-shadow(0 6px 18px rgba(56,189,248,0.18))",
            }}
            animate={{
              y: [0, -30, 0, 25, 0],
              x: [0, 20, -10, 15, 0],
              rotate: [0, 8, -5, 6, 0],
            }}
            transition={{
              duration: n.duration,
              delay: n.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Shape node={n} />
          </motion.div>
        ))}
        {/* Data flow particles */}
        {particles.map((p) => (
          <motion.div
            key={`p-${p.id}`}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: 4,
              height: 4,
              background: `hsl(${p.hue}, 90%, 70%)`,
             boxShadow: `0 0 5px hsl(${p.hue}, 90%, 70%)`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 16 + (p.id % 8),
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
}
