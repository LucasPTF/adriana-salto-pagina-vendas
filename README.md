# Rota da Aprovação 40+

Página de vendas desenvolvida exclusivamente para Adriana Salto e seu workshop Rota da Aprovação 40+.

## Tecnologias

* React 19
* TypeScript
* Vite
* CSS responsivo

## Rotas

* `/a1`
* `/a2`
* `/a3`
* `/obrigado`

As três rotas de venda compartilham a mesma estrutura e alteram somente a comunicação da hero.

## Execução local

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Configuração pendente

O link de checkout ainda não foi fornecido. Até a configuração, os botões levam à seção de inscrição. Para ativar o checkout, preencha `CHECKOUT_URL` em `src/components/SalesPage.tsx`.

Também aguardam definição a data e o horário do workshop, o domínio personalizado e o contato de suporte.
