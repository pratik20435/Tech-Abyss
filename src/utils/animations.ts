// Reusable Framer Motion animation variants and utilities

export const fadeIn:any = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInUp:any = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInRight:any = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const scaleIn:any = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const staggerContainer:any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem:any = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const slideInLeft:any = {
  hidden: { x: "-100%" },
  visible: { 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    x: "-100%",
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

export const slideInRight:any = {
  hidden: { x: "100%" },
  visible: { 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    x: "100%",
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

export const pageTransition:any = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

export const hoverScale:any = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeInOut" }
};

export const hoverGlow:any = {
  boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
  transition: { duration: 0.3 }
};

// Scroll animation helper
export const scrollReveal:any = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
