import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, GraduationCap, Microscope, Building2, Plane, Activity, CheckCircle2, XCircle, FileText } from 'lucide-react';

const CampinasPage: React.FC = () => {
  useEffect(() => {
    // 1. Otimização de Título e Meta Description Dinâmica
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Campinas - SP | Preço de Fábrica e Entrega Rápida";
    
    // Atualiza ou cria a meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Compre Argamassa Baritada em Campinas com laudo técnico. Atendemos clínicas no Cambuí, Guanabara e Barão Geraldo. Entrega em 24h para RMC. Cote agora.');

    // 2. Schema JSON-LD Híbrido (LocalBusiness + FAQPage)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "name": "Argamassa Baritada Campinas Hub",
          "image": "https://picsum.photos/1920/1080",
          "description": "Distribuidor de argamassa baritada de alta densidade em Campinas. Especialista em proteção radiológica para área médica e pesquisa.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Barão de Itapura, 1500 - Guanabara",
            "addressLocality": "Campinas",
            "addressRegion": "SP",
            "postalCode": "13020-432",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -22.8870,
            "longitude": -47.0601
          },
          "url": window.location.href,
          "telephone": "+551932001234",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          "areaServed": ["Campinas", "Sumaré", "Hortolândia", "Paulínia", "Indaiatuba", "Valinhos", "Vinhedo", "Jaguariúna"],
          "priceRange": "$$"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Qual o preço do m² da argamassa baritada em Campinas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O preço em Campinas varia entre R$ 80 e R$ 150 por m² aplicado, dependendo da espessura exigida pelo projeto de blindagem. Por ser um polo logístico, oferecemos valores competitivos de atacado."
              }
            },
            {
              "@type": "Question",
              "name": "Vocês entregam em condomínios de Valinhos e Vinhedo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Atendemos toda a região de condomínios fechados e clínicas em Valinhos, Vinhedo e Swiss Park, respeitando as normas de horários e restrições de veículos."
              }
            },
            {
              "@type": "Question",
              "name": "O material é certificado para laboratórios da UNICAMP?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Fornecemos material com densidade 3.2 g/cm³ e laudo técnico, atendendo rigorosamente às normas da CNEN para laboratórios de pesquisa e hospitais universitários."
              }
            }
          ]
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      // Opcional: Resetar meta description ao sair
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Breadcrumb SEO optimized */}
      <nav className="bg-white border-b border-gray-200 py-3 text-sm">
        <div className="container mx-auto px-4 flex items-center gap-2 text-gray-500">
          <Link to="/" className="hover:text-brand-orange">Início</Link>
          <span>/</span>
          <Link to="/" className="hover:text-brand-orange">São Paulo</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada Campinas - SP</span>
        </div>
      </nav>

      {/* Hero Section - Conversion Focused */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <FileText className="w-4 h-4" />
                Com Laudo Técnico e Nota Fiscal
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Campinas e RMC</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                Fornecimento direto da fábrica para clínicas no <strong>Guanabara</strong>, <strong>Cambuí</strong> e Hospitais Universitários. A melhor cotação da região em 5 minutos.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Entrega em 24h (Logística RMC)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Homologado Vigilância Campinas</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <GraduationCap className="w-5 h-5 text-brand-orange" />
                  <span>Padrão UNICAMP / PUC</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Building2 className="w-5 h-5 text-brand-orange" />
                  <span>Atacado para Construtoras</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Campinas - SP" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Technical Authority */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Proteção Radiológica no Maior Polo Tecnológico do Brasil
              </h2>
              <p>
                Campinas exige padrão técnico elevado. Com a presença de instituições como <strong>UNICAMP</strong>, <strong>CNPEM</strong> e grandes redes hospitalares no bairro <strong>Guanabara</strong>, a proteção radiológica não aceita falhas.
              </p>
              <p>
                Nossa argamassa baritada possui densidade superior (3.2 g/cm³), garantindo a blindagem eficaz contra radiação ionizante em salas de Raio-X, Tomografia e Aceleradores Lineares, ocupando menos espaço que o tijolo maciço e sendo mais ecológica que o chumbo.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Logística Estratégica: O Corredor da Anhanguera</h3>
              <p>
                Graças à nossa localização no entroncamento das rodovias <strong>Anhanguera</strong>, <strong>Bandeirantes</strong> e <strong>Dom Pedro I</strong>, conseguimos realizar entregas "just-in-time" para obras em <strong>Paulínia</strong>, <strong>Sumaré</strong>, <strong>Indaiatuba</strong> e todo o Circuito das Águas.
              </p>

              {/* Tabela Comparativa - High Value for Technical Users */}
              <div className="mt-8 border rounded-lg overflow-hidden shadow-sm">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-brand-blue text-white">
                        <tr>
                            <th className="p-4">Comparativo</th>
                            <th className="p-4">Argamassa Baritada</th>
                            <th className="p-4">Lençol de Chumbo</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-50">
                        <tr className="border-b">
                            <td className="p-4 font-bold">Custo Médio</td>
                            <td className="p-4 text-green-700 font-bold">Mais Econômico</td>
                            <td className="p-4 text-red-600">Alto Custo</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-4 font-bold">Aplicação</td>
                            <td className="p-4">Mão de obra de pedreiro (simples)</td>
                            <td className="p-4">Mão de obra especializada (complexa)</td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-4 font-bold">Toxidade</td>
                            <td className="p-4 text-green-700">Atóxico / Ecológico</td>
                            <td className="p-4 text-red-600">Material Tóxico</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-bold">Durabilidade</td>
                            <td className="p-4">Permanente (integra à parede)</td>
                            <td className="p-4">Pode oxidar ou descolar</td>
                        </tr>
                    </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar: Regions & Coverage */}
            <div className="md:col-span-5 space-y-6">
               <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                    Bairros de Entrega Frequente
                  </h3>
                  <div className="space-y-4">
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Guanabara & Centro</span>
                        <p className="text-xs text-gray-500">Maior concentração de clínicas e laboratórios de imagem.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Cambuí & Nova Campinas</span>
                        <p className="text-xs text-gray-500">Clínicas de estética e dermatologia de alto padrão.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Barão Geraldo</span>
                        <p className="text-xs text-gray-500">Região da UNICAMP, Centro Médico e Polo de Alta Tecnologia.</p>
                    </div>
                     <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Ouro Verde & Campo Grande</span>
                        <p className="text-xs text-gray-500">Hospitais regionais e expansão da rede pública.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Aplicações Típicas</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Tomografia Computadorizada</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Mamografia Digital</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Raio-X Odontológico (Panorâmico)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Hemodinâmica</span>
                    </li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment Focus: Campinas Ecosystem */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos na Região
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <GraduationCap className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Universidades</h3>
              <p className="text-xs text-gray-600">Materiais para laboratórios de física e hospitais escola.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Building2 className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Edifícios Médicos</h3>
              <p className="text-xs text-gray-600">Obras no Ed. l'Officiel, Trade Tower e Centro Médico.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Activity className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Hospitais RMC</h3>
              <p className="text-xs text-gray-600">Atendimento a Sumaré, Hortolândia e Paulínia.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <ShieldCheck className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Veterinária</h3>
              <p className="text-xs text-gray-600">Clínicas de grandes animais (Haras) e pets na região.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Campinas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Perguntas Frequentes - Campinas e Região
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Qual o preço do m² da argamassa baritada em Campinas?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                O preço em Campinas varia entre R$ 80 e R$ 150 por m² aplicado (material), dependendo da espessura exigida pelo projeto. Devido à nossa logística local, oferecemos valores competitivos de atacado.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam em condomínios de Valinhos e Vinhedo?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Atendemos toda a região de condomínios fechados e clínicas em Valinhos, Vinhedo e Swiss Park. Nossos parceiros respeitam as regras de horário de entrega e restrições de veículos pesados desses locais.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                O material serve para laboratórios de pesquisa?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Fornecemos argamassa baritada com laudo técnico detalhado, ideal para atender os requisitos de segurança de laboratórios de pesquisa da UNICAMP, CNPEM e empresas do parque tecnológico.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Vai construir sua clínica em Campinas?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Compare preços dos melhores fornecedores da RMC em um só lugar.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange hover:bg-gray-100 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR AGORA - CAMPINAS & RMC
          </button>
        </div>
      </section>

    </div>
  );
};

export default CampinasPage;