#!/usr/bin/env python3
import re
import os

def optimize_html(input_file, output_file):
    """Otimiza o HTML removendo CDNs e adicionando assets locais"""
    
    with open(input_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Remover Tailwind CDN e config inline
    html = re.sub(r'<!-- Tailwind -->.*?</script>', 
                  '<!-- Styles -->\n  <link rel="stylesheet" href="dist/fonts.css">\n  <link rel="stylesheet" href="dist/styles.css">', 
                  html, flags=re.DOTALL)
    
    # Remover Lucide CDN
    html = html.replace('<script src="https://unpkg.com/lucide@latest"></script>', '')
    
    # Remover Google Fonts
    html = html.replace('<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">', '')
    
    # Remover style inline de body
    html = re.sub(r'<style>\s*body\s*\{[^}]*\}\s*</style>', '', html)
    
    # Substituir data-lucide por SVG use
    icon_map = {
        'shield': 'icon-shield',
        'menu': 'icon-menu',
        'check': 'icon-check',
        'file-text': 'icon-file-text',
        'calculator': 'icon-calculator',
        'map-pin': 'icon-map-pin',
        'award': 'icon-award',
        'truck': 'icon-truck',
        'phone': 'icon-phone',
        'mail': 'icon-mail',
        'lock': 'icon-lock',
        'building': 'icon-building',
        'stethoscope': 'icon-stethoscope',
        'factory': 'icon-factory'
    }
    
    for lucide_name, icon_id in icon_map.items():
        # Substituir <i data-lucide="name" class="..."></i> por <svg class="..."><use href="#icon-name"/></svg>
        pattern = rf'<i\s+data-lucide="{lucide_name}"([^>]*)></i>'
        replacement = rf'<svg\1><use href="#{icon_id}"/></svg>'
        html = re.sub(pattern, replacement, html)
    
    # Adicionar sprite de ícones antes do </body>
    with open('dist/icons.html', 'r', encoding='utf-8') as f:
        icons_sprite = f.read()
    
    html = html.replace('</body>', f'{icons_sprite}\n\n</body>')
    
    # Corrigir canonical URL
    html = html.replace('href="https://argamassabaritada.com/index.html"', 'href="https://marketsite.com.br/"')
    html = html.replace('https://argamassabaritada.com/', 'https://marketsite.com.br/')
    html = html.replace('https://argamassabaritada.com', 'https://marketsite.com.br')
    
    # Adicionar preload para fontes críticas
    preload = '''  <!-- Preload Critical Resources -->
  <link rel="preload" href="dist/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="dist/fonts/Inter-SemiBold.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="dist/styles.css" as="style">
'''
    html = html.replace('</title>', '</title>\n' + preload)
    
    # Remover script de inicialização do Lucide
    html = re.sub(r'<script>\s*lucide\.createIcons\(\);\s*</script>', '', html)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"✅ Otimizado: {input_file} → {output_file}")

if __name__ == '__main__':
    optimize_html('index.html', 'index-optimized.html')
    print("\n🎉 Otimização concluída!")
