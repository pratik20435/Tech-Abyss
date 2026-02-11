"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../utils/animations";

const IntroSection = () => {
  const approaches = [
    {
      label: "JUST CLARITY",
      title: "Understand the Problem",
      description: "Deep discovery sessions to understand your business context, technical constraints, and objectives. No assumptions—just clarity.",
    },
    {
      label: "JUST CLARITY",
      title: "Understand the Problem",
      description: "Deep discovery sessions to understand your business context, technical constraints, and objectives. No assumptions—just clarity.",
    },
    {
      label: "JUST CLARITY",
      title: "Understand the Problem",
      description: "Deep discovery sessions to understand your business context, technical constraints, and objectives. No assumptions—just clarity.",
    },
    {
      label: "JUST CLARITY",
      title: "Understand the Problem",
      description: "Deep discovery sessions to understand your business context, technical constraints, and objectives. No assumptions—just clarity.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full border-t border-slate-800 bg-black px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8 "
    >
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20 ">
          {/* Title */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bricolage leading-tight text-white max-w-4xl mx-auto ml-90">
              A structured approach to ensure your problems are understood,
              solved, and delivered with clear outcomes
            </h2>
          </motion.div>

          {/* Divider */}
          <div className="h-px w-full bg-slate-800" />

          {/* Grid of Approaches */}
          <motion.div
            className="grid grid-cols-4 gap-6 sm:gap-8 lg:gap-10 ml-90"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {approaches.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="space-y-2 col-span-2 border-r border-slate-800"
              >
                {/* Top line */}
                <div className="h-px w-full bg-slate-700/50" />

                <div className="space-y-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-400">
                    {item.label}
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="max-w-sm text-base sm:text-lg leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
