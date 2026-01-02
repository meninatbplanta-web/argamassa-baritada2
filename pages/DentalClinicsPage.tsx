import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, CheckCircle2, Star, Ruler, PaintBucket, FileCheck, Stethoscope, ChevronRight, Info } from 'lucide-react';

const DentalClinicsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada para Clínicas Odontológicas | Kits e Proteção Raio-X";
    
    // Inject JSON-LD Schema for Service/Product specific to Dentistry
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Argamassa Baritada para Odontologia",
      "image": "https://picsum.photos/1920/1080",
      "description": "Argamassa baritada de alta densidade para blindagem de consultórios odontológicos. Proteção para Raio-X Periapical e Panorâmico. Acabamento fino.",
      "brand": {
        "@type": "Brand",
        "name": "Marketplace Argamassa Baritada"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "124"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "BRL",
        "lowPrice": "80",
        "highPrice": "150",
        "offerCount": "15"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 py-3 text-sm">
        <div className="container mx-auto px-4 flex items-center gap-2 text-gray-500">
          <Link to="/" className="hover:text-brand-orange">Início</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-bold">Clínicas Odontológicas</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-brand-blue py-12 lg:py-20 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-blue-900 to-blue-800/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Stethoscope className="w-4 h-4" />
                Especial para Dentistas
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Proteção Radiológica para <span className="text-brand-orange">Consultórios Odontológicos</span>
              </h1>
              
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                A solução ideal para blindar sua sala de Raio-X Periapical ou Panorâmico. Obra limpa, acabamento estético perfeito e aprovação garantida na Vigilância Sanitária.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <PaintBucket className="w-5 h-5 text-cyan-400" />
                  <span>Acabamento Fino (Pintura Fácil)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <Ruler className="w-5 h-5 text-cyan-400" />
                  <span>Espessura Reduzida (1.0 - 1.5cm)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <FileCheck className="w-5 h-5 text-cyan-400" />
                  <span>Laudo Técnico Incluso</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <Star className="w-5 h-5 text-cyan-400" />
                  <span>Kits para Pequenas Áreas</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Text Content */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Por que Argamassa Baritada é melhor que Chumbo para seu Consultório?
              </h2>
              <p>
                Na odontologia moderna, a estética do ambiente é fundamental. O uso de lençol de chumbo, além de ser tóxico e exigir mão de obra especializada, muitas vezes resulta em paredes com acabamento irregular e dificuldade para fixação de armários ou decoração.
              </p>
              <p>
                A <strong>argamassa baritada</strong> substitui o chumbo com vantagens claras para clínicas dentárias:
              </p>
              <ul className="space-y-2">
                <li><strong>Acabamento de Alto Padrão:</strong> Aceita pintura, papel de parede ou gesso diretamente sobre ela.</li>
                <li><strong>Fixação Segura:</strong> Permite furar a parede para instalar móveis (com buchas adequadas) sem comprometer a blindagem, ao contrário do chumbo que rasga.</li>
                <li><strong>Saúde e Ecologia:</strong> Material atóxico e ecologicamente correto, alinhado com a imagem de saúde do seu consultório.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Especificações para Odontologia</h3>
              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg not-prose">
                <h4 className="font-bold text-cyan-800 text-lg mb-2">Espessuras Recomendadas*</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span><strong>Raio-X Periapical (Intraoral):</strong> Geralmente 1.0cm a 1.5cm.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span><strong>Panorâmico / Cefalométrico:</strong> Geralmente 1.5cm a 2.0cm.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span><strong>Tomografia Cone Beam:</strong> Geralmente 2.0cm a 2.5cm.</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">*Sempre consulte o Projeto de Blindagem elaborado pelo seu Físico Médico.</p>
              </div>
            </div>

            {/* Sidebar Features */}
            <div className="md:col-span-5 space-y-6">
               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Soluções para Dentistas</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="bg-cyan-100 p-3 rounded-lg h-fit">
                            <PaintBucket className="w-6 h-6 text-cyan-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Reforma Rápida</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                Secagem rápida e aplicação simples (como reboco comum). Libere sua sala para atendimento mais cedo.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-cyan-100 p-3 rounded-lg h-fit">
                            <FileCheck className="w-6 h-6 text-cyan-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Documentação Completa</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                Fornecedores emitem Nota Fiscal e Laudo de Densidade, documentos exigidos na vistoria inicial e renovação de alvará.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-cyan-100 p-3 rounded-lg h-fit">
                            <Star className="w-6 h-6 text-cyan-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Kits Fracionados</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                Não precisa comprar tonelada. Cotamos a quantidade exata para sua sala (ex: 15, 20 sacos).
                            </p>
                        </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link to="/ferramentas/calculadora" className="flex items-center justify-center gap-2 text-brand-orange font-bold hover:underline">
                        Calcular quantidade para minha sala <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ for Dentists */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Dúvidas Frequentes de Dentistas
          </h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-lg p-5 cursor-pointer shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Preciso baritar todas as paredes da sala?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                <p>Nem sempre. O cálculo de blindagem feito pelo físico vai determinar quais paredes precisam de proteção e até que altura (geralmente 2,10m). Paredes externas ou voltadas para o solo muitas vezes não precisam. Isso economiza material.</p>
              </div>
            </details>
            
            <details className="group bg-white rounded-lg p-5 cursor-pointer shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Posso aplicar a argamassa sobre o gesso acartonado (Drywall)?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                <p>Sim, mas com ressalvas. O Drywall precisa ser estruturado para suportar o peso extra (reforço de montantes). Alternativamente, existe a placa de Drywall Baritado (com chumbo colado) ou o uso de argamassa em "sanduíche" entre placas duplas. Nossos fornecedores podem orientar sobre a melhor técnica.</p>
              </div>
            </details>

            <details className="group bg-white rounded-lg p-5 cursor-pointer shadow-sm border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Qual a validade da argamassa baritada?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                <p>Na embalagem (saco), a validade costuma ser de 6 a 12 meses (como cimento comum). Após aplicada na parede, a proteção é permanente e dura toda a vida útil da edificação, sem perder eficácia.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Monte seu Consultório com Segurança</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Receba 3 orçamentos de kits para odontologia com laudo técnico incluso.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR MATERIAL ODONTOLÓGICO
          </button>
        </div>
      </section>

    </div>
  );
};

export default DentalClinicsPage;