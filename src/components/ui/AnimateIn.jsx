import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimateIn({ children, className = "", delay = 0, y = 40 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimateIn;
