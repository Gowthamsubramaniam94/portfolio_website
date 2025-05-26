export const fadeIn = (delay: number = 0) => ({
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      delay,
      duration: 0.5,
      ease: "easeInOut" 
    }
  }
});

export const slideUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      delay,
      duration: 0.5,
      ease: "easeOut" 
    }
  }
});

export const slideInLeft = (delay: number = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      delay,
      duration: 0.5,
      ease: "easeOut" 
    }
  }
});

export const slideInRight = (delay: number = 0) => ({
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      delay,
      duration: 0.5,
      ease: "easeOut" 
    }
  }
});

export const stagger = (staggerChildren: number = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren
    }
  }
});

export const scaleUp = (delay: number = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      delay,
      duration: 0.5,
      ease: "easeOut" 
    }
  }
});