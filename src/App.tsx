/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Included from './components/Included';
import Showcase from './components/Showcase';
import Comparison from './components/Comparison';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-blue-200">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Included />
        <Showcase />
        <Comparison />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
