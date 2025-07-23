import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

const Home = lazy(() => import('./Home'))
const Contact = lazy(() => import('./temp pages/Contact'))
const About = lazy(() => import('./temp pages/About'))
const Environment = lazy(() => import('./temp pages/Environment'))
const Social = lazy(() => import('./temp pages/Social'))
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
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Suspense>
  )
}

export default App