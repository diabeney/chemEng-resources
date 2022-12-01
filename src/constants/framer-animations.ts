//<------ HERO --------->
export const textboxAnimations = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.6,
    },
  },
};

export const textAnimations = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const imageBoxAnimations = {
  hidden: { scale: 0.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      delay: 1,
      duration: 2,
    },
  },
};



// <------ SERVICES --------->

export const headingAnimation = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2,
    },
  },
};

export const headingAnimationsProp = {
  variants: headingAnimation,
  initial: "hidden",
  whileInView: "show",
  viewport: {
    once: true,
  },
};


export const serviceAnimations = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const chemCardsContainerAnimations = {
    hidden: { opacity: 0, y: 50 },
    show: {
    opacity: 1,
    y: 0,
    transition: {
        staggerChildren: 0.4,
    },
  },
}

export const chemCardAnimations = {
    hidden: { opacity: 0, y: 20},
    show: {opacity: 1,y: 0}
    }