# Molde Fácil Kids — Landing Page

Landing page estática pronta para publicar na Vercel.

## Antes de publicar

Abra `dist/script.js` e troque apenas:

- `COLE_SEU_LINK_DO_CHECKOUT_AQUI` pelo link da sua GG Checkout.
- `COLE_SEU_PIXEL_ID_AQUI` pelo ID numérico do seu Pixel da Meta.

Todos os botões da página levam ao card da oferta. Somente o botão verde dentro do card abre o checkout.

## Publicar com GitHub + Vercel

1. Extraia o ZIP.
2. Envie todo o conteúdo da pasta para um repositório no GitHub.
3. Na Vercel, clique em **Add New → Project** e importe o repositório.
4. A Vercel reconhecerá `dist` como diretório de saída pelo arquivo `vercel.json`.
5. Publique o projeto.

Não é necessário instalar dependências ou executar comandos de build.
