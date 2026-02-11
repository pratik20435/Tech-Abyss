'use client'

import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../utils/animations'

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-black px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
      <motion.div 
        className="mx-auto max-w-7xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mb-8 sm:mb-12 h-px bg-slate-800" />

        <div className="mx-auto max-w-[1152px] min-h-[320px] pb-[104px] grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between">
          {/* Brand */}
          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="text-4xl font-bricolage text-white">TECH ABYSS</h3>
            <p className="text-sm text-white font-inter">Sanepa, Lalitpur</p>
            <p className="text-sm text-white font-inter">Nepal</p>
          </motion.div>

          {/* Socials */}
          <motion.div variants={staggerItem} className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">Socials</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-[9.43px] text-sm text-white transition-colors hover:text-white group">
                <div className="flex items-center justify-center w-[47.16px] h-[47.16px] p-[9.43px] border-[0.24px] border-white/20 rounded-[28.29px] transition-colors group-hover:border-white">
                  <Facebook className="w-full h-full" />
                </div>
                <span>FACEBOOK</span>
              </a>
              <a href="#" className="flex items-center gap-[9.43px] text-sm text-white transition-colors hover:text-white group">
                <div className="flex items-center justify-center w-[47.16px] h-[47.16px] p-[9.43px] border-[0.24px] border-white/20 rounded-[28.29px] transition-colors group-hover:border-white">
                  <Instagram className="w-full h-full" />
                </div>
                <span>INSTAGRAM</span>
              </a>
              <a href="#" className="flex items-center gap-[9.43px] text-sm text-white transition-colors hover:text-white group">
                <div className="flex items-center justify-center w-[47.16px] h-[47.16px] p-[9.43px] border-[0.24px] border-white/20 rounded-[28.29px] transition-colors group-hover:border-white">
                  <Linkedin className="w-full h-full" />
                </div>
                <span>LINKEDIN</span>
              </a>
            </div>
          </motion.div>

          {/* Menu */}
          <motion.div variants={staggerItem} className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">Menu</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-white transition-colors hover:text-white font-inter">
                SERVICES
              </a>
              <a href="#" className="block text-white transition-colors hover:text-white font-inter">
                OUR APPROACH
              </a>
              <a href="#" className="block text-white transition-colors hover:text-white font-inter">
                PROJECTS
              </a>
              <a href="#" className="block text-white transition-colors hover:text-white font-inter">
                ABOUT US
              </a>
              <a href="#" className="block text-white transition-colors hover:text-white font-inter">
                BLOG
              </a>
            </div>
          </motion.div>

          {/* Info & Legal */}
          <motion.div variants={staggerItem} className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Local Time</h4>
              <p className="text-sm text-white">NPT (UTC+5:45)</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Version</h4>
              <p className="text-sm text-white">2026 © Edition</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Legal</h4>
              <div className="space-y-2 text-sm">
                <Link to="/terms" className="block text-white transition-colors hover:text-white">
                  Terms & Conditions
                </Link>
                <Link to="/privacy" className="block text-white transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
