import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { PYQ } from './pages/PYQ';
import { SubjectTests } from './pages/SubjectTests';
import { MockTests } from './pages/MockTests';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-text-primary antialiased flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/pyq" element={<PYQ />} />
          <Route path="/subject-tests" element={<SubjectTests />} />
          <Route path="/mock-tests" element={<MockTests />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
