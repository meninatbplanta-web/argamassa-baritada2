import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-blue p-2 rounded-lg group-hover:bg-brand-orange transition-colors duration-300">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-none">Argamassa</span>
              <span className="text-sm font-medium text-brand-orange uppercase tracking-wider leading-none">Baritada</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">Início</Link>
            <Link to="/cidades" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">Onde Atendemos</Link>
            <Link to="/ferramentas/calculadora" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">Calculadora</Link>
            <Link to="/" className="px-5 py-2.5 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">
              Pedir Orçamento
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg absolute w-full">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-gray-600 py-2" onClick={() => setIsMenuOpen(false)}>Início</Link>
            <Link to="/cidades" className="text-gray-600 py-2" onClick={() => setIsMenuOpen(false)}>Cidades Atendidas</Link>
            <Link to="/ferramentas/calculadora" className="text-gray-600 py-2" onClick={() => setIsMenuOpen(false)}>Ferramentas</Link>
            <Link to="/" className="w-full text-center px-5 py-3 bg-brand-orange text-white font-bold rounded-lg" onClick={() => setIsMenuOpen(false)}>
              Pedir Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;