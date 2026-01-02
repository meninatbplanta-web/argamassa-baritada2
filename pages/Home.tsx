import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ChevronDown, ChevronRight, Calculator, FileText, Download, Scale, AlertTriangle } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { FEATURES, SERVICE_CARDS, TESTIMONIALS, FAQS, CITIES } from '../constants';

const Home: React.FC = () => {
  // Quick Calculator State
  const [quickArea, setQuickArea] = useState('');
  const [quickResult, setQuickResult] = useState<number | null>(null);

  const handleQuickCalc = () => {
    const area = parseFloat(quickArea);
    if (!isNaN(area)) {
      // Logic: Area * 1.5cm (avg) * 3200 density
      const weight = area * 0.015 * 3200;
      setQuickResult(Math.ceil(weight));
    }
  };

  // Helper to determine link based on slug
  const getServiceLink = (slug: string) => {
    if (slug === 'calculadora') return '/ferramentas/calculadora';
    if (slug === 'clinica-odontologica') return '/clinicas-odontologicas';
    if (slug === 'clinica-veterinaria') return '/clinicas-veterinarias';
    if (slug === 'industria') return '/industrias';
    if (slug === 'hospital') return '/hospitais';
    return '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-brand-blue py-16 lg:py-24 overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0 opacity-10">
           <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Fundo Radiologia" 
            className="w-full h-full object-cover"
           />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <Check className="w-4 h-4 text-brand-orange" />
                <span className="text-sm font-medium">Proteção Radiológica Certificada</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Argamassa Baritada: <span className="text-brand-orange">Proteção Profissional</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed">
                Obtenha 3 orçamentos de fornecedores especializados em apenas 5 minutos. Segurança garantida para sua obra com laudos técnicos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">Fornecedores Certificados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">Entrega Rápida</span>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:pl-8">
              <LeadForm />
            </div>

          </div>
        </div>
      </section>

      {/* NEW: Technical Tools Section (Calculator & Laudo) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ferramentas do Especialista
            </h2>
            <p className="text-gray-600 text-lg">
              Recursos gratuitos para engenheiros, arquitetos e proprietários de clínicas planejarem sua blindagem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Left: Quick Calculator */}
            <div className="bg-brand-lightBlue rounded-2xl p-8 border border-blue-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Calculator className="w-32 h-32 text-brand-blue" />
               </div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="bg-brand-blue p-2.5 rounded-lg">
                     <Scale className="w-6 h-6 text-white" />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">Calculadora Rápida</h3>
                 </div>
                 
                 <p className="text-gray-600 mb-6">
                   Faça uma estimativa rápida de peso para argamassa (base 1.5cm de espessura).
                 </p>

                 <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                   <div className="flex flex-col sm:flex-row gap-4 items-end">
                     <div className="w-full">
                       <label className="block text-sm font-semibold text-gray-700 mb-2">Área a baritar (m²)</label>
                       <input 
                         type="number" 
                         value={quickArea}
                         onChange={(e) => setQuickArea(e.target.value)}
                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none"
                         placeholder="Ex: 25"
                       />
                     </div>
                     <button 
                       onClick={handleQuickCalc}
                       className="w-full sm:w-auto bg-brand-orange text-white font-bold py-2.5 px-6 rounded-lg hover:bg-brand-orangeHover transition-colors"
                     >
                       Calcular
                     </button>
                   </div>
                   
                   {quickResult && (
                     <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                       <p className="text-sm text-gray-500">Estimativa de material:</p>
                       <p className="text-3xl font-bold text-brand-blue">{quickResult} kg</p>
                       <p className="text-xs text-gray-400 mt-1">Aprox. {Math.ceil(quickResult / 25)} sacos de 25kg.</p>
                     </div>
                   )}
                 </div>

                 <Link to="/ferramentas/calculadora" className="text-brand-blue font-semibold hover:underline flex items-center gap-1">
                   Acessar calculadora avançada <ChevronRight className="w-4 h-4" />
                 </Link>
               </div>
            </div>

            {/* Right: Technical Report Model */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <FileText className="w-32 h-32 text-gray-600" />
               </div>

               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="bg-gray-700 p-2.5 rounded-lg">
                     <FileText className="w-6 h-6 text-white" />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">Modelo de Laudo Técnico</h3>
                 </div>

                 <p className="text-gray-600 mb-6">
                   O "Laudo Radiométrico" ou "Memorial de Cálculo de Blindagem" é obrigatório. Veja o que ele <strong>deve conter</strong> para ser aprovado:
                 </p>

                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-3 mb-6 text-sm">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gray-900">1. Memorial de Cálculo:</span>
                        <span className="text-gray-600 block text-xs">Cálculo das espessuras de barreiras (paredes, teto, piso) baseado na carga de trabalho do equipamento.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gray-900">2. Planta Baixa Radiométrica:</span>
                        <span className="text-gray-600 block text-xs">Desenho técnico indicando onde cada blindagem deve ser aplicada.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gray-900">3. ART / RRT:</span>
                        <span className="text-gray-600 block text-xs">Anotação de Responsabilidade Técnica assinada por um Físico Médico ou Supervisor de Radioproteção.</span>
                      </div>
                    </div>
                 </div>

                 <div className="flex items-center gap-2 text-xs text-orange-600 bg-orange-50 p-3 rounded-lg border border-orange-100">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Nota: Não vendemos laudos. Conectamos você a quem fornece o material.</span>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher Argamassa Baritada?
            </h2>
            <p className="text-gray-600 text-lg">
              A solução mais eficiente e econômica para proteção radiológica em ambientes de saúde e indústria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aplicações da Argamassa Baritada
            </h2>
            <p className="text-gray-600 text-lg">
              Soluções especializadas para cada tipo de ambiente radiológico.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {SERVICE_CARDS.map((card, idx) => (
              <Link 
                key={idx} 
                to={getServiceLink(card.slug)}
                className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-orange/30 transition-all duration-300 group text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors shadow-sm">
                  <card.icon className="w-6 h-6 text-gray-600 group-hover:text-white" />
                </div>
                <span className="font-semibold text-gray-800 text-sm md:text-base group-hover:text-brand-orange transition-colors">
                  {card.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="flex gap-1 mb-4 text-brand-orange">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                  <div className="text-xs text-brand-blue font-semibold mt-1">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 list-none">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Argamassa Baritada em Sua Cidade</h2>
            <p className="text-gray-500">Encontre fornecedores especializados na sua região.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {CITIES.map((city) => (
              <Link 
                key={city.slug} 
                to={`/argamassa-baritada-em-${city.slug}`}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-white bg-white/50 text-gray-600 hover:text-brand-orange transition-all hover:shadow-sm"
              >
                <ChevronRight className="w-4 h-4 text-gray-300" />
                <span className="text-sm font-medium">{city.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Iniciar Seu Projeto?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Receba 3 orçamentos gratuitos de fornecedores certificados e economize tempo e dinheiro.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 px-12 rounded-lg shadow-xl transform transition hover:-translate-y-1 text-lg"
          >
            Obter Orçamentos Grátis
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;