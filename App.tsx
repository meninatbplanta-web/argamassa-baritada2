import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CityPage from './pages/CityPage';
import ManausPage from './pages/ManausPage';
import RioPage from './pages/RioPage';
import BrasiliaPage from './pages/BrasiliaPage';
import SaoPauloPage from './pages/SaoPauloPage';
import FortalezaPage from './pages/FortalezaPage';
import SalvadorPage from './pages/SalvadorPage';
import CampinasPage from './pages/CampinasPage';
import JundiaiPage from './pages/JundiaiPage';
import GuarulhosPage from './pages/GuarulhosPage';
import BeloHorizontePage from './pages/BeloHorizontePage';
import CuritibaPage from './pages/CuritibaPage';
import PortoAlegrePage from './pages/PortoAlegrePage';
import GoianiaPage from './pages/GoianiaPage';
import NatalPage from './pages/NatalPage';
import BelemPage from './pages/BelemPage';
import DentalClinicsPage from './pages/DentalClinicsPage';
import VeterinaryPage from './pages/VeterinaryPage';
import IndustrialPage from './pages/IndustrialPage';
import HospitalsPage from './pages/HospitalsPage';
import Calculator from './pages/Calculator';
import LocationsHub from './pages/LocationsHub';

// ScrollToTop component to ensure page starts at top on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => new URL(window.location.href), [window.location.href]);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ferramentas/calculadora" element={<Calculator />} />
            
            {/* Hub Page for Locations */}
            <Route path="/cidades" element={<LocationsHub />} />
            <Route path="/locais" element={<LocationsHub />} />

            {/* Specific Service Pages */}
            <Route path="/clinicas-odontologicas" element={<DentalClinicsPage />} />
            <Route path="/clinica-odontologica" element={<DentalClinicsPage />} />
            
            <Route path="/clinicas-veterinarias" element={<VeterinaryPage />} />
            <Route path="/clinica-veterinaria" element={<VeterinaryPage />} />
            
            <Route path="/industrias" element={<IndustrialPage />} />
            <Route path="/industria" element={<IndustrialPage />} />
            
            <Route path="/hospitais" element={<HospitalsPage />} />
            <Route path="/hospital" element={<HospitalsPage />} />

            {/* SEO Specific City Routes - Higher Priority */}
            <Route path="/argamassa-baritada-em-manaus" element={<ManausPage />} />
            <Route path="/argamassa-baritada-em-rio-de-janeiro" element={<RioPage />} />
            <Route path="/argamassa-baritada-em-brasilia" element={<BrasiliaPage />} />
            <Route path="/argamassa-baritada-em-sao-paulo" element={<SaoPauloPage />} />
            <Route path="/argamassa-baritada-em-fortaleza" element={<FortalezaPage />} />
            <Route path="/argamassa-baritada-em-salvador" element={<SalvadorPage />} />
            <Route path="/argamassa-baritada-em-campinas" element={<CampinasPage />} />
            <Route path="/argamassa-baritada-em-jundiai" element={<JundiaiPage />} />
            <Route path="/argamassa-baritada-em-guarulhos" element={<GuarulhosPage />} />
            <Route path="/argamassa-baritada-em-belo-horizonte" element={<BeloHorizontePage />} />
            <Route path="/argamassa-baritada-em-curitiba" element={<CuritibaPage />} />
            <Route path="/argamassa-baritada-em-porto-alegre" element={<PortoAlegrePage />} />
            <Route path="/argamassa-baritada-em-goiania" element={<GoianiaPage />} />
            <Route path="/argamassa-baritada-em-natal" element={<NatalPage />} />
            <Route path="/argamassa-baritada-em-belem" element={<BelemPage />} />
            
            {/* Dynamic City Routes matching format /argamassa-baritada-em-[city-slug] */}
            <Route path="/:citySlug" element={<CityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;