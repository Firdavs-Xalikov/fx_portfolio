import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import Balancer from "react-wrap-balancer";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  mode?: "words" | "chars";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  mode = "words",
  as: Component = "span",
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <Component className={className}>
        <Balancer preferHTML>{text}</Balancer>
      </Component>
    );
  }

  const items = mode === "words" ? text.split(" ") : Array.from(text);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: mode === "words" ? 0.08 : 0.03,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="inline-block [text-wrap:balance]"
      >
        {items.map((item, idx) => (
          <motion.span
            key={`${item}-${idx}`}
            variants={itemVariants}
            className="inline-block whitespace-pre"
          >
            {item}
            {mode === "words" && idx < items.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
