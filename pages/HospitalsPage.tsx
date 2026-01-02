import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, Building2, Activity, Truck, ChevronRight, FileText, CheckCircle2, Siren } from 'lucide-react';

const HospitalsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada para Hospitais | Tomografia e Hemodinâmica";
    
    // Inject JSON-LD Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Blindagem Hospitalar",
      "description": "Fornecimento de argamassa baritada para grandes obras hospitalares. Salas de Tomografia, Hemodinâmica e Radioterapia.",
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
          <span className="text-gray-900 font-bold">Hospitais</span>
        </div>
      </nav>

      <section className="relative bg-brand-blue py-12 lg:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-lightBlue text-brand-blue px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Building2 className="w-4 h-4" />
                Infraestrutura Hospitalar
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Blindagem para <span className="text-brand-orange">Grandes Complexos Hospitalares</span>
              </h1>
              
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Soluções de alta performance para salas de Tomografia, Hemodinâmica e Bunkers. Capacidade de fornecimento para grandes obras com logística dedicada.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <Activity className="w-5 h-5 text-brand-orange" />
                  <span>Alta Proteção (CT/Angio)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Entrega Programada (Obras)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <FileText className="w-5 h-5 text-brand-orange" />
                  <span>Documentação para Licitação</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Conformidade RDC-50</span>
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
                Segurança Crítica para Ambientes de Alta Complexidade
              </h2>
              <p>
                Hospitais exigem materiais que combinem proteção radiológica máxima com facilidade de manutenção e assepsia. Nossa argamassa baritada é utilizada nas maiores redes hospitalares do Brasil por garantir a blindagem eficaz em salas com alta carga de trabalho.
              </p>
              <p>
                Diferente de soluções artesanais, o material fornecido possui controle de qualidade industrial, garantindo densidade homogênea em todas as paredes, essencial para aprovação em testes radiométricos rigorosos.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Aplicações de Alta Demanda</h3>
              <ul className="space-y-2">
                <li><strong>Tomografia Computadorizada (TC):</strong> Paredes e teto com espessuras de 2cm a 4cm.</li>
                <li><strong>Hemodinâmica:</strong> Proteção crítica para procedimentos longos.</li>
                <li><strong>Medicina Nuclear e PET-CT:</strong> Soluções complementares para blindagem.</li>
              </ul>
            </div>

            <div className="md:col-span-5">
               <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                      <Siren className="w-5 h-5 text-brand-blue" /> Engenharia Clínica
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                      Entendemos os prazos apertados de obras hospitalares e retrofit.
                  </p>
                  <ul className="space-y-4 mb-8">
                     <li className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                        <span>Estoque para pronta entrega de grandes volumes.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                        <span>Apoio técnico para cálculo de consumo.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                        <span>Laudos aceitos pela ANVISA em todo território nacional.</span>
                     </li>
                  </ul>
                  <button 
                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                     className="w-full block text-center bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition"
                  >
                      Solicitar Cotação Hospitalar
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HospitalsPage;