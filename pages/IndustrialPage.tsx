import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, Factory, HardHat, Box, ChevronRight, Zap, Truck, Layers, FileCheck } from 'lucide-react';

const IndustrialPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Industrial | Proteção para Gamagrafia e Ensaios";
    
    // Inject JSON-LD Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Blindagem Industrial Baritada",
      "description": "Argamassa de alta densidade para bunkers de ensaios não destrutivos e gamagrafia.",
      "provider": { "@type": "Organization", "name": "Marketplace Argamassa Baritada" }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      <nav className="bg-white border-b border-gray-200 py-3 text-sm">
        <div className="container mx-auto px-4 flex items-center gap-2 text-gray-500">
          <Link to="/" className="hover:text-brand-orange">Início</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-bold">Aplicações Industriais</span>
        </div>
      </nav>

      <section className="relative bg-gray-900 py-12 lg:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-slate-900 to-slate-800/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <HardHat className="w-4 h-4" />
                Alta Densidade (3.2 g/cm³)
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Blindagem para <span className="text-yellow-500">Bunkers Industriais</span> e Laboratórios
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                Argamassa baritada para Ensaios Não Destrutivos (END), Gamagrafia e scanners de carga. Fornecimento em larga escala para indústrias em todo o Brasil.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span>Proteção contra Raios Gama/X</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <Layers className="w-5 h-5 text-yellow-500" />
                  <span>Aplicação em Camadas</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-yellow-500" />
                  <span>Logística Paletizada</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-yellow-500" />
                  <span>Certificação CNEN</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Soluções Robustas para Indústria
              </h2>
              <p>
                O setor industrial exige níveis de proteção muito superiores à área médica. Para bunkers de gamagrafia ou aceleradores lineares industriais, a densidade e a homogeneidade do material são críticas.
              </p>
              <p>
                Nossa argamassa baritada industrial é formulada para atingir altas densidades, permitindo a construção de paredes monolíticas que bloqueiam radiação de alta energia sem as falhas comuns em montagens de blocos ou placas.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Aplicações Industriais</h3>
              <ul className="space-y-2">
                <li><strong>Ensaios Não Destrutivos (END):</strong> Salas de radiografia industrial.</li>
                <li><strong>Segurança:</strong> Scanners de caminhões e containers em portos/aeroportos.</li>
                <li><strong>Pesquisa:</strong> Aceleradores de partículas e laboratórios de física.</li>
              </ul>
            </div>

            <div className="md:col-span-5">
               <div className="bg-gray-100 rounded-xl p-8 border border-gray-200 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                      <Factory className="w-5 h-5" /> Atendimento Corporativo
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                      Temos condições especiais para compras técnicas e grandes volumes (cargas fechadas de 14 a 28 toneladas).
                  </p>
                  <ul className="space-y-4 mb-8">
                     <li className="flex items-start gap-3 text-sm">
                        <Box className="w-5 h-5 text-gray-700 mt-0.5" />
                        <span>Entrega Paletizada e Filmada</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm">
                        <FileCheck className="w-5 h-5 text-gray-700 mt-0.5" />
                        <span>Faturamento via Boleto Corporativo</span>
                     </li>
                  </ul>
                  <button 
                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                     className="w-full block text-center bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition"
                  >
                      Falar com Eng. de Vendas
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndustrialPage;