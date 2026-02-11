import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { slideInRight } from '../../utils/animations';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: 'Overview', href: '#overview' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Works', href: '#works' },
  { name: 'Process', href: '#process' },
  { name: 'Profile', href: '#profile' },
  { name: 'Insights', href: '#insights' },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const handleLinkClick = (href: string) => {
    onClose();
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Menu */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-black border-l border-white/10 z-50 lg:hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-6 px-8 pt-20">
              <div className="text-xl font-bold tracking-wider mb-4">TECH ABYSS</div>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className="text-white hover:text-purple-400 transition-colors text-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

export const MobileMenuButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden text-white hover:text-gray-300 transition-colors"
      aria-label="Open menu"
    >
      <Menu size={24} />
    </button>
  );
};
