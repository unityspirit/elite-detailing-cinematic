import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[600px] w-full flex items-end justify-center overflow-hidden pt-24 pb-12 px-6 md:px-12"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 origin-top"
        style={{ y: backgroundY }}
      >
        <img 
          src={t.hero.bgImage} 
          alt="UnitySpirit Hero" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dynamic Overlay that darkens as you scroll down */}
        <motion.div 
          className="absolute inset-0 bg-background" 
          style={{ opacity: overlayOpacity }} 
        />
      </motion.div>

      {/* Content wrapper with Parallax */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8"
        style={{ y: textY }}
      >
        <div className="max-w-2xl text-center md:text-left">
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-white tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, staggerChildren: 0.2, delay: 0.2 }}
          >
            {t.hero.titleLines.map((line, i) => (
              <motion.span 
                key={i} 
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.15 }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.div 
          className="max-w-sm flex flex-col gap-6 items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-on-surface-variant text-lg">
            {t.hero.subtitle}
          </p>
          <div>
            <button className="text-white hover:text-secondary transition-colors duration-300 flex items-center gap-2 group text-sm uppercase tracking-widest font-sans">
              <span className="h-[1px] w-8 bg-current group-hover:w-16 transition-all duration-300"></span>
              {t.hero.cta}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
