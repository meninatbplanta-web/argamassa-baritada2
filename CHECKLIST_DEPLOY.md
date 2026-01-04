# ✅ Checklist de Deploy - Argamassa Baritada

## 📋 PRÉ-DEPLOY

### Validação Local
- [ ] Arquivo `index-optimized.html` existe
- [ ] Pasta `dist/` com todos os assets
- [ ] Fontes em `dist/fonts/` (4 arquivos .woff2)
- [ ] CSS em `dist/styles.css` (29 KB)
- [ ] Ícones em `dist/icons.html` (5.2 KB)
- [ ] `.htaccess` atualizado
- [ ] `sitemap.xml` com URLs corretas
- [ ] `robots.txt` correto

---

## 🚀 DEPLOY

### Opção A: Deploy Direto (Recomendado após teste)
```bash
# 1. Backup
mv index.html index-backup-$(date +%Y%m%d).html

# 2. Ativar versão otimizada
mv index-optimized.html index.html

# 3. Commit
git add .
git commit -m "deploy: ativar versão otimizada"
git push origin main
```

### Opção B: Teste Primeiro (Mais Seguro)
```bash
# 1. Já está no GitHub como index-optimized.html
# 2. Testar em: https://marketsite.com.br/index-optimized.html
# 3. Se OK, seguir Opção A
```

**Status atual:** ✅ Arquivos já estão no GitHub

---

## 🧪 TESTES PÓS-DEPLOY

### 1. Performance
- [ ] **PageSpeed Insights Mobile:** https://pagespeed.web.dev/
  - Meta: 95+/100
  - LCP: <1.5s
  - FCP: <1.0s

- [ ] **PageSpeed Insights Desktop:** https://pagespeed.web.dev/
  - Meta: 98+/100

- [ ] **GTmetrix:** https://gtmetrix.com/
  - Meta: Grade A

### 2. SEO e Schema
- [ ] **Rich Results Test:** https://search.google.com/test/rich-results
  - Product Schema válido
  - Preços aparecem
  - Reviews aparecem (4.8 estrelas)

- [ ] **Schema Validator:** https://validator.schema.org/
  - Sem erros
  - Todos os tipos presentes

- [ ] **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
  - 100% mobile-friendly

### 3. Funcionalidade
- [ ] Página carrega corretamente
- [ ] Ícones SVG aparecem
- [ ] Fontes carregam (Inter)
- [ ] Formulário de lead funciona
- [ ] Links internos funcionam
- [ ] Calculadora funciona
- [ ] Mobile responsivo
- [ ] Seção de reviews visível
- [ ] Preços visíveis (3 locais)

### 4. Técnico
- [ ] Canonical URL correto (marketsite.com.br)
- [ ] Sem erros no console
- [ ] HTTPS funcionando
- [ ] Compressão Gzip ativa
- [ ] Cache headers corretos
- [ ] Sitemap acessível: /sitemap.xml
- [ ] Robots.txt acessível: /robots.txt

---

## 📊 GOOGLE SEARCH CONSOLE

### Configuração Inicial
- [ ] Propriedade verificada
- [ ] Sitemap submetido
- [ ] URL inspection: solicitar indexação
- [ ] Verificar cobertura (sem erros)

### Monitoramento (Primeiras 2 semanas)
- [ ] Verificar erros de rastreamento
- [ ] Verificar rich results
- [ ] Monitorar impressões
- [ ] Monitorar cliques
- [ ] Monitorar posição média

---

## 📈 MÉTRICAS PARA ACOMPANHAR

### Semana 1-2
- [ ] Performance mantida (95+ mobile)
- [ ] Rich snippets ativos
- [ ] Sem erros de indexação
- [ ] Primeiras impressões aumentando

### Mês 1
- [ ] Posição "argamassa baritada": TOP 10
- [ ] CTR > 3%
- [ ] Leads +30%

### Mês 2-3
- [ ] Posição "argamassa baritada": TOP 5
- [ ] CTR > 5%
- [ ] Leads +100%

### Mês 3-6
- [ ] Posição "argamassa baritada": TOP 3
- [ ] CTR > 7%
- [ ] Leads +150%

---

## 🔧 TROUBLESHOOTING

### Performance baixa?
1. Verificar se dist/ está sendo servido
2. Verificar .htaccess (Gzip, cache)
3. Verificar CDN/servidor
4. Usar WebPageTest para diagnóstico

### Rich snippets não aparecem?
1. Validar Schema no Rich Results Test
2. Aguardar 1-2 semanas (Google precisa reindexar)
3. Solicitar indexação no Search Console
4. Verificar se Product Schema está correto

### Fontes não carregam?
1. Verificar caminho: `dist/fonts/`
2. Verificar CORS headers
3. Verificar .htaccess (cache de fontes)
4. Testar em incógnito

### Ícones não aparecem?
1. Verificar se sprite está no HTML
2. Verificar `<use href="#icon-name"/>`
3. Inspecionar elemento no DevTools
4. Verificar console (erros SVG)

---

## 📞 SUPORTE

### Documentação
- `README-OTIMIZACOES.md` - Instruções técnicas
- `RELATORIO_FINAL_SEO.md` - Relatório completo
- `RESUMO_OTIMIZACOES.md` - Resumo executivo
- `estrategia_seo_completa.md` - Estratégia detalhada

### Contatos Úteis
- GitHub: https://github.com/meninatbplanta-web/argamassa-baritada2
- Commits: 
  - Otimizações: 366ba70
  - Relatórios: de19baa

---

## ✅ CONFIRMAÇÃO FINAL

Antes de marcar como concluído:

- [ ] Deploy realizado
- [ ] Todos os testes passaram
- [ ] Google Search Console configurado
- [ ] Métricas sendo monitoradas
- [ ] Backup do original mantido
- [ ] Equipe notificada

**Data do Deploy:** ___/___/______  
**Responsável:** _________________  
**Status:** ⬜ Pendente | ⬜ Em Teste | ⬜ Concluído

---

**Última atualização:** 04 de Janeiro de 2026
