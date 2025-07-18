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