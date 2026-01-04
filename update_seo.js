const fs = require('fs');
const path = require('path');

const directoryPath = '.';
const footerSection = `
        <!-- Footer Links Section -->
        <section class="py-12 bg-gray-50 border-t border-gray-200">
            <div class="container mx-auto px-4 md:px-6">
                <h3 class="text-xl font-bold text-gray-900 mb-6">Atendimento em outras cidades</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <a href="argamassa-baritada-em-sao-paulo.html" class="text-gray-600 hover:text-brand-orange">São Paulo</a>
                    <a href="argamassa-baritada-em-guarulhos.html" class="text-gray-600 hover:text-brand-orange">Guarulhos</a>
                    <a href="argamassa-baritada-em-campinas.html" class="text-gray-600 hover:text-brand-orange">Campinas</a>
                    <a href="argamassa-baritada-em-rio-de-janeiro.html" class="text-gray-600 hover:text-brand-orange">Rio de Janeiro</a>
                    <a href="argamassa-baritada-em-belo-horizonte.html" class="text-gray-600 hover:text-brand-orange">Belo Horizonte</a>
                    <a href="argamassa-baritada-em-curitiba.html" class="text-gray-600 hover:text-brand-orange">Curitiba</a>
                    <a href="argamassa-baritada-em-porto-alegre.html" class="text-gray-600 hover:text-brand-orange">Porto Alegre</a>
                    <a href="argamassa-baritada-em-brasilia.html" class="text-gray-600 hover:text-brand-orange">Brasília</a>
                    <a href="argamassa-baritada-em-salvador.html" class="text-gray-600 hover:text-brand-orange">Salvador</a>
                    <a href="argamassa-baritada-em-recife.html" class="text-gray-600 hover:text-brand-orange opacity-50 cursor-not-allowed" title="Em breve">Recife</a>
                    <a href="argamassa-baritada-em-fortaleza.html" class="text-gray-600 hover:text-brand-orange">Fortaleza</a>
                    <a href="argamassa-baritada-em-manaus.html" class="text-gray-600 hover:text-brand-orange">Manaus</a>
                    <a href="argamassa-baritada-em-belem.html" class="text-gray-600 hover:text-brand-orange">Belém</a>
                </div>
            </div>
        </section>
`;

const stateMapping = {
    'SP': 'São Paulo',
    'RS': 'Rio Grande do Sul',
    'RJ': 'Rio de Janeiro',
    'MG': 'Minas Gerais',
    'PR': 'Paraná',
    'BA': 'Bahia',
    'PE': 'Pernambuco',
    'CE': 'Ceará',
    'AM': 'Amazonas',
    'PA': 'Pará',
    'DF': 'Distrito Federal',
    'GO': 'Goiás',
    'ES': 'Espírito Santo',
    'SC': 'Santa Catarina'
};

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (path.extname(file) === '.html' && file.startsWith('argamassa-baritada-em-') && file !== 'index.html') {
            const filePath = path.join(directoryPath, file);
            let content = fs.readFileSync(filePath, 'utf8');

            // 1. Update JSON-LD
            const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
            const match = content.match(jsonLdRegex);

            if (match) {
                try {
                    const originalJson = JSON.parse(match[1]);

                    // Check if already updated (has @graph)
                    if (!originalJson['@graph']) {
                        const city = originalJson.address.addressLocality;
                        const stateCode = originalJson.address.addressRegion;
                        const stateName = stateMapping[stateCode] || stateCode;

                        const newJson = {
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    ...originalJson,
                                    "url": `https://argamassabaritada.com/${file}` // Ensure URL matches filename
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        {
                                            "@type": "ListItem",
                                            "position": 1,
                                            "name": "Início",
                                            "item": "https://argamassabaritada.com/index.html"
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 2,
                                            "name": stateName,
                                            "item": "https://argamassabaritada.com/cidades.html"
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 3,
                                            "name": city,
                                            "item": `https://argamassabaritada.com/${file}`
                                        }
                                    ]
                                }
                            ]
                        };

                        const newScriptTag = `
    <!-- JSON-LD Object -->
    <script type="application/ld+json">
    ${JSON.stringify(newJson, null, 2)}
    </script>`;

                        // Replace the old script tag
                        // We replace the whole block ensuring we capture indentation if possible, but strict replace is safer
                        content = content.replace(match[0], newScriptTag.trim());
                        console.log(`Updated JSON-LD for ${file}`);
                    } else {
                        console.log(`JSON-LD already updated for ${file}`);
                    }

                } catch (e) {
                    console.error(`Error parsing JSON in ${file}:`, e);
                }
            }

            // 2. Inject Internal Links (Footer Section)
            // Check if section already exists
            if (!content.includes('Atendimento em outras cidades')) {
                const footerRegex = /<footer class="bg-gray-900/;
                if (footerRegex.test(content)) {
                    content = content.replace(footerRegex, `${footerSection.trim()}\n\n        <footer class="bg-gray-900`);
                    console.log(`Injected footer links for ${file}`);
                }
            } else {
                console.log(`Footer links already present for ${file}`);
            }

            fs.writeFileSync(filePath, content, 'utf8');
        }
    });
});
