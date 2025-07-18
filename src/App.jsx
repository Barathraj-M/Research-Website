import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

const Home = lazy(() => import('./temp pages/Home'))
const Contact = lazy(() => import('./temp pages/Contact'))
const About = lazy(() => import('./temp pages/About'))
const Environment = lazy(() => import('./temp pages/Environment'))
const Social = lazy(() => import('./temp pages/Social'))
const Loading = lazy(() => import('./components/Loading'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Header />
        <div className='mt-30'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/environment' element={<Environment />} />
            <Route path='/social' element={<Social />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Suspense>
  )
}

export default App