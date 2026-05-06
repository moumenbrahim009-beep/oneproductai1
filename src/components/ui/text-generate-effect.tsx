"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  wordClassName?: string;
  filter?: boolean;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className,
  wordClassName,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)}>
      <motion.div>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={cn("opacity-0 inline-block mr-[0.25em]", wordClassName)}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: duration,
              delay: idx * 0.12,
              ease: "easeInOut",
            }}
            style={
              filter
                ? { filter: "blur(10px)", willChange: "filter, opacity" }
                : {}
            }
            whileInView={
              filter
                ? { opacity: 1, filter: "blur(0px)" }
                : { opacity: 1 }
            }
            viewport={{ once: true }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
