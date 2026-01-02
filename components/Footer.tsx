import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { CITIES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-orange p-1.5 rounded-md">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Argamassa Baritada</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Conectamos você aos melhores fornecedores de proteção radiológica do Brasil. Segurança, qualidade e o melhor preço em um só lugar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Início</Link></li>
              <li><Link to="/ferramentas/calculadora" className="hover:text-brand-orange transition-colors">Calculadora de Materiais</Link></li>
              <li><Link to="/clinicas-odontologicas" className="hover:text-brand-orange transition-colors">Para Dentistas</Link></li>
              <li><Link to="/cidades" className="hover:text-brand-orange transition-colors">Cidades Atendidas</Link></li>
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Aplicações</h4>
            <ul className="space-y-3">
              <li><Link to="/hospitais" className="hover:text-brand-orange transition-colors">Hospitais</Link></li>
              <li><Link to="/clinicas-odontologicas" className="hover:text-brand-orange transition-colors">Clínicas Odontológicas</Link></li>
              <li><Link to="/clinicas-veterinarias" className="hover:text-brand-orange transition-colors">Clínicas Veterinárias</Link></li>
              <li><Link to="/industrias" className="hover:text-brand-orange transition-colors">Indústrias</Link></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Principais Cidades</h4>
            <ul className="space-y-3">
              {CITIES.slice(0, 5).map(city => (
                <li key={city.slug}>
                  <Link to={`/argamassa-baritada-em-${city.slug}`} className="hover:text-brand-orange transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                 <Link to="/cidades" className="text-brand-orange text-sm hover:underline mt-2 inline-block">Ver todas as cidades →</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Argamassa Baritada. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;