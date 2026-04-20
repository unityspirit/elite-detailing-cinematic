import { useLanguage } from '../context/LanguageContext';

export function Journal() {
  const { t } = useLanguage();
  const { title, description, placeholder, subscribe } = t.journal;

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 relative border-y border-white/5 bg-background overflow-hidden" id="journal">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full blur-[2px] opacity-20 hidden md:block"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full blur-[1px] opacity-30 hidden md:block"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="serif-display text-3xl md:text-5xl text-white mb-6">
          {title}
        </h2>
        <p className="text-surface-tint font-light tracking-wide leading-relaxed mb-12 max-w-lg mx-auto">
          {description}
        </p>

        <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder={placeholder}
            className="flex-1 bg-transparent border-b border-outline-variant py-3 px-4 text-white placeholder:text-surface-tint/50 focus:outline-none focus:border-white transition-colors"
            required
          />
          <button 
            type="submit"
            className="text-xs tracking-[0.1em] uppercase border border-outline-variant px-8 py-3 hover:bg-white hover:text-background transition-all duration-500 whitespace-nowrap"
          >
            {subscribe}
          </button>
        </form>
      </div>
    </section>
  );
}
