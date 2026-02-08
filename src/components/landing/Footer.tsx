'use client'

import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 h-px bg-black" />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">TECH ABYSS</h3>
            <p className="text-sm text-white">Sanepa, Lalitpur</p>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">Socials</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-sm text-white transition-colors hover:text-white">
                <Facebook className="h-5 w-5" />
                <span>FACEBOOK</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-white transition-colors hover:text-white">
                <Instagram className="h-5 w-5" />
                <span>INSTAGRAM</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-white transition-colors hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">Menu</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-white transition-colors hover:text-white">
                SERVICES
              </a>
              <a href="#" className="block text-white transition-colors hover:text-white">
                OUR APPROACH
              </a>
              <a href="#" className="block text-white transition-colors hover:text-white">
                PROJECTS
              </a>
              <a href="#" className="block text-white transition-colors hover:text-white">
                ABOUT US
              </a>
              <a href="#" className="block text-white transition-colors hover:text-white">
                BLOG
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">Local Time</h4>
              <p className="text-sm text-white">4:15 PM UTC+2</p>
            </div>
           
          </div>
          <div className='space-y-2'>
             <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">Version</h4>
              <p className="text-sm text-white">2026 @ Edition</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
       
      </div>
    </footer>
  )
}

export default Footer
