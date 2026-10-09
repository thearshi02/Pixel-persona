import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ReadingProgress } from './components/ReadingProgress';
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

// Page transition container wrapper
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    className="w-full"
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/reality"
          element={
            <PageWrapper>
              <RealityPage />
            </PageWrapper>
          }
        />
        <Route
          path="/academics"
          element={
            <PageWrapper>
              <AcademicsPage />
            </PageWrapper>
          }
        />
        <Route
          path="/comparison"
          element={
            <PageWrapper>
              <ComparisonPage />
            </PageWrapper>
          }
        />
        <Route
          path="/struggle"
          element={
            <PageWrapper>
              <StrugglePage />
            </PageWrapper>
          }
        />
        <Route
          path="/impact"
          element={
            <PageWrapper>
              <ImpactPage />
            </PageWrapper>
          }
        />
        <Route
          path="/solutions"
          element={
            <PageWrapper>
              <SolutionsPage />
            </PageWrapper>
          }
        />
        <Route
          path="/conversation"
          element={
            <PageWrapper>
              <ConversationPage />
            </PageWrapper>
          }
        />
        <Route
          path="/beyond-grades"
          element={
            <PageWrapper>
              <BeyondGradesPage />
            </PageWrapper>
          }
        />
        {/* Fallback route */}
        <Route
          path="*"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <ReadingProgress />
      <div className="min-h-screen flex flex-col bg-[#F3F0E9] text-[#111D26] selection:bg-[#B94732]/20 selection:text-[#111D26]">
        <Header />
        <main className="flex-1 overflow-x-hidden">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
