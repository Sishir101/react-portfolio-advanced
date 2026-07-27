import { motion } from "framer-motion";
import TechBadge from "./TechBadge";

export default function OrbitRing({ items, radius = 280, duration = 18 }) {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2 size-0"
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((tech, index) => {
        const angle = (360 / items.length) * index;

        return (
          <div
            key={tech.name}
            className="absolute left-0 top-0"
            style={{
              transform: `rotate(${angle}deg) translateX(${radius}px)`,
            }}
          >
            <div
              style={{
                transform: `rotate(${-angle}deg) translate(-50%, -50%)`,
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
              >
                <TechBadge icon={tech.icon} name={tech.name} />
              </motion.div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
