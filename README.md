# Carne de Sol — Carlos Chagas, MG

Site institucional, catálogo, cardápio e conteúdo educativo desenvolvido com Next.js, TypeScript, Tailwind CSS e Payload CMS.

## Desenvolvimento e publicação

- O ambiente Figma Make já inicia o servidor de desenvolvimento.
- Build de produção: `pnpm build`
- Administração de conteúdo: `/admin`
- A publicação deve usar HTTPS e definir a URL pública do projeto para que canonicals e sitemap apontem para o domínio correto.

## Conteúdo administrável

No painel Payload:

- **Dados da empresa:** nome, apresentação, endereço, telefone, WhatsApp, e-mail, horários, redes sociais e mapa.
- **Produtos:** nome, categoria, descrição, preparo, imagem, preço, unidade, disponibilidade e destaque.
- **Cardápio:** pratos, ingredientes, acompanhamentos, porção, preço, imagem e disponibilidade.
- **Ofertas:** produtos relacionados, valores, condições e datas de validade.
- **Mensagens de contato:** solicitações recebidas, com acesso restrito à administração.
- **Media:** fotografias utilizadas no site.

## Dados comerciais ainda necessários

Antes da publicação definitiva, a empresa deve fornecer:

1. Razão social ou nome empresarial confirmado.
2. Ano de fundação e história real dos proprietários.
3. Endereço completo e link correto do mapa.
4. Telefone e número de WhatsApp com DDI e DDD.
5. E-mail comercial.
6. Horários de funcionamento.
7. Redes sociais oficiais.
8. Produtos realmente disponíveis, preços e unidades.
9. Pratos efetivamente oferecidos, preços e porções.
10. Modalidades confirmadas de pedido, retirada ou entrega.
11. Domínio público definitivo.

## Integrações

- **WhatsApp:** preencha o campo no formato numérico, por exemplo `5533...`.
- **Mapa:** cadastre no painel o link público da localização confirmada.
- **Google Analytics:** configure o identificador pelo recurso de configurações do site no Figma Make. A política de privacidade deve ser revisada antes da ativação.
- **Google Search Console:** após publicar no domínio definitivo, envie `/sitemap.xml` e valide a propriedade.
- **Formulário:** as mensagens são gravadas diretamente na coleção privada `contact-submissions`. Não há envio por e-mail até que um provedor seja configurado no servidor.

## Segurança e privacidade

O formulário valida e limita todos os campos no servidor, usa campo antispam e exige consentimento. Registros de contato não têm leitura pública. Para uso comercial definitivo, defina política de retenção, responsáveis pelo atendimento e processo para solicitações LGPD.

## Fontes

O artigo histórico inclui links para Embrapa, Anvisa, Ministério da Agricultura, IPHAN e SciELO. Os textos são originais e diferenciam fatos gerais, variações regionais e sugestões culinárias.
