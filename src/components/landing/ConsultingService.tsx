'use client'

import { motion } from 'framer-motion'
import { IconArrowRight } from '@tabler/icons-react'
import { staggerContainer, staggerItem } from '../../utils/animations'

export default function ServicesSection() {
  const services = [
    {
      title: 'Full-Stack Development',
      description:
        'Complete web applications from frontend interfaces to backend APIs using TypeScript, React, Vue.js, Angular, Node.js, and Golang',
    },
    {
      title: 'Cloud Infrastructure',
      description:
        'Scalable cloud solutions with AWS, Google Cloud, and Azure. DevOps, CI/CD pipelines, and containerization with Docker and Kubernetes',
    },
    {
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift',
    },
    {
      title: 'Technical Consulting',
      description:
        'Strategic technology consulting, architecture design, code reviews, and technical leadership for your projects',
    },
  ]

  return (
    <section id="approach" className="min-h-screen bg-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bricolage leading-tight mb-6 sm:mb-8 max-w-4xl ml-35">
            Full-stack software development and consulting services
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-4xl leading-relaxed ml-35 font-inter">
            Building complete web applications from frontend to backend with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-0 ml-8 sm:ml-12 lg:ml-75"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`
                relative p-3 sm:p-4 lg:p-5 group cursor-pointer
                border-gray-800
                ${index < 2 ? 'border-b' : ''}
                ${index % 2 === 0 ? 'sm:border-r' : ''}
                hover:bg-white/5 transition-colors duration-300
              `}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-normal mb-2 sm:mb-3 pr-6">
                {service.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mb-6 sm:mb-0">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
                <IconArrowRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
