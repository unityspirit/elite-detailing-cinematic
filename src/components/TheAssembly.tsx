import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TheAssembly = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-sans text-sm tracking-widest uppercase mb-4 block">
              {t.assembly.sectionNum}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-2">
              {t.assembly.headlineMain}
            </h2>
            <h3 className="font-serif text-3xl md:text-4xl text-on-surface-variant leading-tight">
              {t.assembly.headlineSub}
            </h3>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-6 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
          >
            {t.assembly.paragraphs.map((p, i) => (
              <motion.p 
                key={i} 
                className="text-lg text-on-surface-variant leading-relaxed max-w-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Image with Parallax & Scale */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 h-[45vh] md:h-[60vh] lg:h-[80vh] overflow-hidden rounded-sm relative">
          <motion.div 
            className="w-full h-full origin-center"
            style={{ scale: imageScale, y: imageY }}
          >
            <img 
              src={t.assembly.image} 
              alt={t.assembly.imageCaption}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute bottom-4 right-4 text-xs font-sans tracking-widest uppercase text-white/70 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            {t.assembly.imageCaption}
          </div>
        </div>

      </div>
    </section>
  );
};
