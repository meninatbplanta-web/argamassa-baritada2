import React, { useState } from 'react';
import { Calculator as CalcIcon, RefreshCw, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Calculator: React.FC = () => {
  const [area, setArea] = useState<string>('');
  const [thickness, setThickness] = useState<string>('1.5');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const areaNum = parseFloat(area);
    const thickNum = parseFloat(thickness);

    if (isNaN(areaNum) || isNaN(thickNum)) return;

    // Density approx 3.2 g/cm3 -> 3200 kg/m3
    // Formula: Area (m2) * Thickness (m) * Density
    // Thickness is in cm usually for user input, so /100
    const density = 3200; 
    const weight = areaNum * (thickNum / 100) * density;
    
    setResult(Math.ceil(weight));
  };

  return (
    <div className="min-h-screen bg-gray-50">
       {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-orange">Início</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Calculadora de Materiais</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl mb-4">
                    <CalcIcon className="w-8 h-8" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Calculadora de Argamassa Baritada</h1>
                <p className="text-gray-600">Estime a quantidade de material necessário para o seu projeto de proteção radiológica.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-8">
                    <div className="grid gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Área Total (m²)</label>
                            <input 
                                type="number" 
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange outline-none"
                                placeholder="Ex: 20"
                            />
                            <p className="text-xs text-gray-500 mt-1">Soma das áreas de paredes, teto e piso a serem baritados.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Espessura da Camada (cm)</label>
                            <select 
                                value={thickness}
                                onChange={(e) => setThickness(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange outline-none bg-white"
                            >
                                <option value="1.0">1.0 cm (Odontológico Padrão)</option>
                                <option value="1.5">1.5 cm (Odontológico/Veterinário)</option>
                                <option value="2.0">2.0 cm (Raio-X Médico Geral)</option>
                                <option value="2.5">2.5 cm (Raio-X Alta Demanda)</option>
                                <option value="3.0">3.0 cm (Tomografia)</option>
                                <option value="4.0">4.0 cm (Tomografia/Radioterapia)</option>
                            </select>
                            <p className="text-xs text-gray-500 mt-1">Consulte sempre o Projeto de Blindagem (Físico Médico).</p>
                        </div>

                        <button 
                            onClick={calculate}
                            className="w-full bg-brand-blue hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <CalcIcon className="w-5 h-5" />
                            Calcular Estimativa
                        </button>
                    </div>
                </div>

                {result !== null && (
                    <div className="bg-blue-50 p-8 border-t border-blue-100 animate-fade-in">
                        <div className="text-center">
                            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Peso Estimado</span>
                            <div className="text-5xl font-bold text-brand-blue my-2">{result} kg</div>
                            <p className="text-gray-600 mb-6">Aproximadamente <span className="font-bold">{Math.ceil(result / 25)} sacos</span> de 25kg.</p>
                            
                            <div className="bg-white p-4 rounded-lg text-left text-sm text-gray-600 border border-blue-100">
                                <p className="mb-2"><strong>Nota Importante:</strong> Este cálculo é apenas uma estimativa baseada na densidade média (3.2g/cm³). O consumo real pode variar dependendo das condições da parede e método de aplicação.</p>
                                <p>Recomendamos adicionar 10% de margem de segurança para perdas.</p>
                            </div>

                            <Link 
                                to="/"
                                className="inline-block mt-6 text-brand-orange font-bold hover:underline"
                            >
                                Solicitar cotação para essa quantidade →
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;