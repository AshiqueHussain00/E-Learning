import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Students', value: 15, suffix: 'K+', duration: 2 },
  { label: 'Total success', value: 75, suffix: '%', duration: 2 },
  { label: 'Main questions', value: 35, suffix: '', duration: 2 },
  { label: 'Chief experts', value: 26, suffix: '', duration: 2 },
  { label: 'Years of experience', value: 16, suffix: '', duration: 2 },
];

const StatItem = ({ value, label, suffix, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration * 60); // frame rate ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center space-y-1"
    >
      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        {count}
        {suffix}
      </h3>
      <p className="text-sm text-gray-600 sm:text-base">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-12 bg-white-100">
      <div className="max-w-6xl px-4 mx-auto text-center">
        <h2 className="mb-2 text-2xl font-bold sm:text-3xl">Our Success</h2>
        <p className="max-w-xl mx-auto mb-10 text-sm text-gray-500 sm:text-base">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec
          nam et pharetra gravida.
        </p>

        <div className="grid justify-center grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {stats.map((item, index) => (
            <StatItem
              key={index}
              value={item.value}
              label={item.label}
              suffix={item.suffix}
              duration={item.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
