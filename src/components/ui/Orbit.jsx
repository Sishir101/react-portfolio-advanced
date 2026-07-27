import { motion } from "framer-motion";

export default function Orbit({
  radius = 220,
  duration = 20,
  angle = 0,
  children,
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ width: 0, height: 0 }}
      initial={{ rotate: angle }}
      animate={{ rotate: angle + 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        style={{ transform: `translateX(${radius}px)` }}
        initial={{ rotate: -angle }}
        animate={{ rotate: -(angle + 360) }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">{children}</div>
      </motion.div>
    </motion.div>
  );
}
