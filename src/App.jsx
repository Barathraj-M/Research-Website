import React, { Suspense, lazy, useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop.jsx'
import InitialLoader from './components/InitialLoader';

const Home = lazy(() => import('./pages/Home.jsx'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About.jsx'))
const Environment = lazy(() => import('./pages/Environment.jsx'))
const Social = lazy(() => import('./pages/Social.jsx'))

const Loading = lazy(() => import('./components/Loading'))
const NotFound = lazy(() => import('./pages/NotFound'))

function AppContent() {
  const location = useLocation()
  
  const validRoutes = ['/', '/about', '/contact', '/environment', '/social']
  const isValidRoute = validRoutes.includes(location.pathname)
  
  return (
    <>
      {isValidRoute && <Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/environment' element={<Environment />} />
          <Route path='/social' element={<Social />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      {isValidRoute && <Footer />}
    </>
  )
}

function App() {
  const [showInitialLoader, setShowInitialLoader] = useState(() => {
    return sessionStorage.getItem('slsrp-initial-loader-shown') !== 'true';
  });

  useEffect(() => {
    if(showInitialLoader) {
      const timer = setTimeout(() => {
        setShowInitialLoader(false);
        sessionStorage.setItem('slsrp-initial-loader-shown', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showInitialLoader]);

  if(showInitialLoader) {
    return <InitialLoader />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </Suspense>
  );
}

export default App