import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, CheckCircle2, PawPrint, Ruler, PaintBucket, FileCheck, ChevronRight, HeartPulse } from 'lucide-react';

const VeterinaryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada para Clínicas Veterinárias | Proteção Raio-X Animal";
    
    // Inject JSON-LD Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Argamassa Baritada Veterinária",
      "description": "Proteção radiológica para salas de raio-x veterinário. Material lavável e de alta densidade.",
      "brand": { "@type": "Brand", "name": "Marketplace Argamassa Baritada" },
      "audience": { "@type": "Audience", "audienceType": "Veterinários" }
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
          <span className="text-gray-900 font-bold">Clínicas Veterinárias</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-brand-blue py-12 lg:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-blue-900 to-blue-800/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <PawPrint className="w-4 h-4" />
                Diagnóstico Animal Seguro
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Proteção Radiológica para <span className="text-brand-orange">Centros Veterinários</span>
              </h1>
              
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Solução prática e higiênica para salas de Raio-X digital e Tomografia animal. Garantimos a densidade necessária para aprovação do seu centro de diagnóstico.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <PaintBucket className="w-5 h-5 text-green-400" />
                  <span>Parede Lavável (Higiene)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <Ruler className="w-5 h-5 text-green-400" />
                  <span>Espessura Otimizada</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <FileCheck className="w-5 h-5 text-green-400" />
                  <span>Laudo Técnico Incluso</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <HeartPulse className="w-5 h-5 text-green-400" />
                  <span>Segurança para a Equipe</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Blindagem Ideal para Diagnóstico Pet
              </h2>
              <p>
                Clínicas veterinárias possuem necessidades específicas. Além da proteção contra radiação, o ambiente precisa ser <strong>facilmente lavável e higienizável</strong>. 
              </p>
              <p>
                Diferente do chumbo, que exige revestimentos complexos para não oxidar com produtos de limpeza, a argamassa baritada torna-se parte da alvenaria, aceitando tintas epóxi ou azulejos, ideais para o ambiente cirúrgico e ambulatorial veterinário.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Aplicações Comuns</h3>
              <ul className="space-y-2">
                <li><strong>Raio-X Digital:</strong> Proteção padrão para pequenos animais.</li>
                <li><strong>Tomografia Veterinária:</strong> Blindagem reforçada para equipamentos de alta potência.</li>
                <li><strong>Equinos:</strong> Salas grandes para diagnóstico de grandes animais (haras e hospitais).</li>
              </ul>
            </div>

            <div className="md:col-span-5">
               <div className="bg-green-50 rounded-xl p-8 border border-green-100 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Vantagens para o Vet</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Liberação rápida na Vigilância Sanitária com laudo do material.</span>
                    </li>
                    <li className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Baixo custo comparado ao chumbo, sobrando verba para equipamentos.</span>
                    </li>
                    <li className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Kits fracionados para salas pequenas de clínicas de bairro.</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link to="/ferramentas/calculadora" className="w-full block text-center bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
                        Calcular Material
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VeterinaryPage;