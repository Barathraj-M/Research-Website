import React, { useEffect, useRef, useState } from 'react';

const PercentageCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger only once when it enters the view the first time
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(ref.current); // Stop observing immediately

          let current = 0;
          const duration = 1000;
          const step = Math.max(Math.floor(duration / target), 10);

          const interval = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) {
              clearInterval(interval);
            }
          }, step);
        }
      },
      { threshold: 0.6 } // You can tweak this threshold
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated, target]);

  return (
    <div
      ref={ref}
      className="text-4xl font-bold mb-2 text-primary-1"
    >
      {count}%
    </div>
  );
};

export default PercentageCounter;
