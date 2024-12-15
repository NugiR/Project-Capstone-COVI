import { Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

import HomePage from './pages/HomePage'
import UploadPage from './pages/UploadPage'
import SubsPage from './pages/SubsPage'
import ConsultantPage from './pages/ConsultantPage'
import VisualPage from './pages/VisualPage'

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/upload' Component={UploadPage}/>
        <Route path='/subscription' Component={SubsPage}/>
        <Route path='/consultant' Component={ConsultantPage}/>
        <Route path='/visualization' Component={VisualPage}/>
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App
