import { useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TheAssembly } from './components/TheAssembly';
import { Portfolio } from './components/Portfolio';
import { Journal } from './components/Journal';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-background text-on-surface min-h-screen relative overflow-x-hidden selection:bg-secondary selection:text-white">
      {/* Global Grain Overlay - softened opacity for less gloomy look */}
      <div className="fixed inset-0 z-[100] grain-overlay pointer-events-none opacity-[0.02]"></div>
      
      <Header />
      
      <main>
        <Hero />
        <TheAssembly />
        <Portfolio />
        <Journal />
      </main>

      <Footer />
    </div>
  );
}

export default App;
