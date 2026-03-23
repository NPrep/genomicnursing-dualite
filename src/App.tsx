import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { RouterWrapper } from './next/RouterWrapper';
import { KnowledgePage } from './pages/KnowledgePage';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-text-primary antialiased flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<KnowledgePage />} />
        </Routes>
        <Footer />
      </div>
    </RouterWrapper>
  );
}

export default App;
