import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Technology } from './components/Technology';
import { Features } from './components/Features';
import { AuthenticatedRelics } from './components/AuthenticatedRelics';
import { HowItWorks } from './components/HowItWorks';
import { ICO } from './components/ICO';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Whitepaper } from './pages/Whitepaper';
import { TechnicalPaper } from './pages/TechnicalPaper';
import { OperatingAgreement } from './pages/OperatingAgreement';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { RelicGallery } from './components/RelicGallery';
import './App.css';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Technology />
      <Features />
      <RelicGallery />
      <HowItWorks />
      <ICO />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/technical-paper" element={<TechnicalPaper />} />
          <Route path="/operating-agreement" element={<OperatingAgreement />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;