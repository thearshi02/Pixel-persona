import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RealityPage } from './pages/RealityPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { StrugglePage } from './pages/StrugglePage';
import { ImpactPage } from './pages/ImpactPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ConversationPage } from './pages/ConversationPage';
import { BeyondGradesPage } from './pages/BeyondGradesPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F3F0E9] text-[#111D26]">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reality" element={<RealityPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/struggle" element={<StrugglePage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/conversation" element={<ConversationPage />} />
            <Route path="/beyond-grades" element={<BeyondGradesPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
