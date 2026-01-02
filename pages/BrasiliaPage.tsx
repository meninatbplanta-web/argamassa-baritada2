import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Building2, FileText, CheckCircle2, Landmark, Users } from 'lucide-react';

const BrasiliaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Brasília - DF | Cotação Online para Setor Hospitalar";
    
    // Inject JSON-LD Schema for Local Business SEO (Brasília Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Brasília & DF",
      "image": "https://picsum.photos/1920/1080",
      "description": "Hub de cotação de argamassa baritada em Brasília (DF). Conectamos sua obra aos melhores fornecedores para o Setor Hospitalar (SHS/SHN), clínicas em Águas Claras e Taguatinga.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brasília",
        "addressRegion": "DF",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -15.7975,
        "longitude": -47.8919
      },
      "url": window.location.href,
      "telephone": "+5561999999999",
      "areaServed": ["Brasília", "Taguatinga", "Águas Claras", "Ceilândia", "Guará", "Sobradinho", "Valparaíso de Goiás"],
      "priceRange": "$$"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Breadcrumb SEO optimized */}
      <nav className="bg-white border-b border-gray-200 py-3 text-sm">
        <div className="container mx-auto px-4 flex items-center gap-2 text-gray-500">
          <Link to="/" className="hover:text-brand-orange">Início</Link>
          <span>/</span>
          <Link to="/" className="hover:text-brand-orange">Distrito Federal</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada Brasília - DF</span>
        </div>
      </nav>

      {/* Hero Section - Institutional & Credibility */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Architect/Modern city background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517652787012-185d03896352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800/80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <Landmark className="w-4 h-4 text-brand-orange" />
                Hub de Cotação Especializado DF
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Encontre Fornecedores de Argamassa Baritada em <span className="text-brand-orange">Brasília e DF</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                Conectamos sua obra aos principais fabricantes e distribuidores que atendem o <strong>Setor Hospitalar (SHS/SHN)</strong> e clínicas do DF. Receba orçamentos diretos de quem tem o material.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <FileText className="w-5 h-5 text-brand-orange" />
                  <span>Parceiros com Laudo Técnico</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Users className="w-5 h-5 text-brand-orange" />
                  <span>Negocie Direto com Fornecedor</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                  <span>Densidade 3.2 g/cm³</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Building2 className="w-5 h-5 text-brand-orange" />
                  <span>Atacado para Construtoras</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Brasília - DF" />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location & Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Main SEO Content */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A maneira mais inteligente de cotar Proteção Radiológica
              </h2>
              <p>
                Brasília é um centro de excelência médica. Para atender a demanda do <strong>Setor Hospitalar Sul (SHS)</strong> e <strong>Norte (SHN)</strong>, nossa plataforma seleciona os melhores fornecedores de <strong>argamassa baritada</strong> que atuam na região.
              </p>
              <p>
                Ao invés de ligar para várias empresas, você preenche um único formulário e nós encaminhamos sua demanda para parceiros qualificados que possuem estoque e logística para atender o Distrito Federal. Isso garante que você receba propostas competitivas e negocie prazos de entrega diretamente com quem fornece.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Soluções para o Crescimento do DF</h3>
              <p>
                Seja para obras verticais em <strong>Águas Claras</strong>, clínicas em expansão em <strong>Taguatinga</strong> e <strong>Ceilândia</strong>, ou reformas no Plano Piloto, nossos parceiros estão preparados para atender.
              </p>

              <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mt-8 rounded-r-lg">
                <h4 className="font-bold text-brand-blue text-lg mb-2">Processos Licitatórios</h4>
                <p className="text-sm">
                  Trabalhamos com fornecedores habituados a fornecer documentação técnica para editais públicos e hospitais da rede SARAH e IGESDF.
                </p>
              </div>
            </div>

            {/* Sidebar: Regions */}
            <div className="md:col-span-5 space-y-6">
               <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                    Regiões de Atendimento
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    Nossos parceiros realizam entregas em todas as Regiões Administrativas e Entorno.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2 border-b pb-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Plano Piloto (Asa Sul/Norte)</span>
                    </li>
                    <li className="flex items-center gap-2 border-b pb-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Lago Sul / Lago Norte</span>
                    </li>
                    <li className="flex items-center gap-2 border-b pb-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Águas Claras / Taguatinga</span>
                    </li>
                    <li className="flex items-center gap-2 border-b pb-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Ceilândia / Samambaia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Entorno (Valparaíso, Luziânia)</span>
                    </li>
                  </ul>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Suporte Técnico</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <ShieldCheck className="w-5 h-5 text-brand-blue" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Parceiros Qualificados</h4>
                            <p className="text-xs text-gray-500">Fornecedores com material certificado.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <FileText className="w-5 h-5 text-brand-blue" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Laudos Técnicos</h4>
                            <p className="text-xs text-gray-500">Material acompanha documentação.</p>
                        </div>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Applications Grid customized for Brasilia */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos no Distrito Federal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-brand-blue mb-2">Clínicas no Sudoeste</h3>
              <p className="text-sm text-gray-600">Odontologia e Estética Facial com Raio-X.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-brand-blue mb-2">Hospitais (SHS)</h3>
              <p className="text-sm text-gray-600">Salas de Tomografia e Hemodinâmica.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-brand-blue mb-2">Laboratórios (SIA)</h3>
              <p className="text-sm text-gray-600">Proteção para equipamentos de análise.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-brand-blue mb-2">Clínicas Populares</h3>
              <p className="text-sm text-gray-600">Soluções econômicas para Ceilândia e Samambaia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Brasilia */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Perguntas Frequentes - DF
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Qual a densidade da argamassa dos seus parceiros?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nossos parceiros trabalham com argamassa baritada de alta densidade (geralmente 3.2 g/cm³). Ao receber o contato, você poderá confirmar as especificações técnicas e solicitar o laudo diretamente ao fornecedor.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Os fornecedores emitem Nota Fiscal para órgãos públicos?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Selecionamos parceiros com expertise no fornecimento para o setor público, aptos a emitir NF-e e fornecer as certificações exigidas em editais.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Como funciona a entrega e retirada?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A logística é combinada diretamente com o fornecedor escolhido. Muitos possuem rotas de entrega no DF ou balcões de retirada em parceiros logísticos no SIA. Solicite essa informação no momento da cotação.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Sua Obra no DF Precisa de Material?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Facilitamos sua compra conectando você aos melhores distribuidores da região.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR COM FORNECEDORES DF
          </button>
        </div>
      </section>

    </div>
  );
};

export default BrasiliaPage;