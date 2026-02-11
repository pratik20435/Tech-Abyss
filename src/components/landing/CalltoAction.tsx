'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="w-full border-t border-slate-800 bg-black px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="flex flex-col items-center justify-between gap-6 sm:gap-8 rounded-lg border border-slate-800 bg-gradient-to-br from-slate-900 to-black p-8 sm:p-12 lg:p-16 sm:flex-row"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-2 font-bricolage ml-35">
              Let's Connect!
            </h2>
            <p className="text-gray-400 text-base sm:text-lg ml-35">
              Ready to start your next project?
            </p>
          </div>
          
          <motion.button 
            className="group flex items-center gap-3 rounded-lg border border-slate-700 bg-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-black transition-all hover:bg-gray-100 hover:scale-105 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Hire Now!</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
