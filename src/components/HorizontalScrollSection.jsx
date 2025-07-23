import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimate } from 'framer-motion'

import '../index.css'

const HorizontalScrollSection = ({ children, scrollSpeed = 3 }) => {
    // scope is like a ref but for useAnimate hook
    const [scope, animate] = useAnimate();
    const scrollRef = useRef(null);

    // State to hold the scroll constraints
    const [scrollBounds, setScrollBounds] = useState(0);

    // This effect runs on mount and whenever the window is resized.
    useEffect(() => {
        const calculateBounds = () => {
            if (scrollRef.current && scope.current) {
                const containerWidth = scrollRef.current.offsetWidth;
                const contentWidth = scope.current.scrollWidth;
                // Calculate the maximum scrollable distance
                const newBounds = contentWidth > containerWidth ? contentWidth - containerWidth : 0;
                setScrollBounds(newBounds);
            }
        };

        calculateBounds();

        // Recalculate on window resize
        window.addEventListener('resize', calculateBounds);
        return () => window.removeEventListener('resize', calculateBounds);
    }, [scope]);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let currentX = 0; // Keep track of the target x position

        const onWheel = (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
            e.preventDefault();

            // Update the target position based on wheel delta
            currentX -= e.deltaY * scrollSpeed;

            // Clamp the value within the calculated bounds
            currentX = Math.max(-scrollBounds, Math.min(0, currentX));

            // Animate to the new position using a spring for a smooth effect
            animate(scope.current,
                { x: currentX },
                { type: 'spring', stiffness: 300, damping: 30, mass: 0.5 }
            );
        };

        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', onWheel, { passive: false });
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('wheel', onWheel);
            }
        };
    }, [scope, animate, scrollBounds, scrollSpeed]);

    return (
        <div ref={scrollRef} className="overflow-hidden py-8 relative">
            <div className='absolute inset-0 w-20 h-full z-1 progressive-gradient-left'></div>
            <motion.div
                ref={scope}
                className="grid grid-flow-col auto-cols-max gap-x-8 hide-scrollbar px-10"
            >
                {children}
            </motion.div>
            <div className='absolute right-0 bottom-0 w-20 h-full z-1 progressive-gradient-right'></div>
        </div>
    );
};

export default HorizontalScrollSection