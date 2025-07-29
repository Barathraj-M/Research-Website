export const navHoverLogoVariants = {
    initial: {
        opacity: 0,
        scale: 0,
        x: -5
    },
    animate: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeIn"
        }
    },
    exit: { opacity: 0 }
}

export const navMenuVariants = {
    initial: {
        y: -100
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        y: -60,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}

export const footerContainerVariants = {
    initial: {
        opacity: 0,
        y: 200
    },
    whileInView: {
        opacity: [0.5, 0.8, 1],
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
            when: "beforeChildren"
        }
    }
}

export const contentBasicVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    whileInView: delaySec => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.1 * delaySec,
            ease: "easeInOut",
            staggerChildren: 0.5
        }
    }),
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}

export const overlayVariants = {
    initial: {
        opacity: 0,
    },
    whileInView: {
        opacity: [0.2, 0.5, 0.7, 0.9, 1],
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

export const heroSectionBottomContainerVariants = {
    initial: {
        y: 140
    },
    animate: {
        y: 0,
        transition: {
            duration: 1.2,
            ease: "easeInOut"
        }
    }
}

export const collapsableContentVariants = {
    collapsed: {
        opacity: 0,
        height: 0,
        marginTop: 0,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
    expanded: {
        opacity: 1,
        height: 'auto',
        marginTop: 8,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    }
}

export const sectionPillVariants = {
    initial: {
        opacity: 0,
    },
    whileInView: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        }
    }
}

export const serviceCardVariants = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            bounce: 0.5,
            damping: 20,
            stiffness: 70,
            mass: 0.3,
            velocity: 0.5
        }
    },
}

export const initialLoaderVariants = {
    initial: {
        opacity: 0,
        y: 200
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            ease: [0.23, 1, 0.32, 1]
        }
    }
}

export const animatedTextCyclerVariants = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.95,
        filter: "blur(4px)"
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 1.05,
        filter: "blur(4px)",
        transition: {
            duration: 0.4,
            ease: [0.55, 0.06, 0.68, 0.19]
        }
    }
};