# WhatsApp Floating Widget

🔗 Este README também está disponível em: [Português](README.pt.md) | [English](README.en.md) | [Español](README.es.md)

🔗 Este README también está disponible en:  [Português](README.pt.md) | [English](README.en.md) | [Español](README.es.md)

🔗 This README is also available in: [Português](README.pt.md) | [English](README.en.md) | [Español](README.es.md)


Este é um widget leve e simples de botão flutuante do WhatsApp, desenvolvido com HTML, CSS e JavaScript nativo. Ele permite que os visitantes do seu site entrem em contato diretamente via WhatsApp com um clique.

## 🚀 Funcionalidades

- **Zero Dependências**: Feito com Vanilla JS e CSS puro.
- **Fácil Integração**: Basta adicionar o script e o CSS ao seu projeto.
- **Configurável**: Defina o número de telefone, mensagem inicial e posição através de atributos de dados.
- **Ícone SVG**: Ícone do WhatsApp nítido e escalável.

## 📦 Como Usar

1. Baixe os arquivos `widget.js` e `widget.css` e coloque-os no seu projeto.
2. Adicione a referência ao CSS no `<head>` do seu HTML:

```html
<link rel="stylesheet" href="widget.css">
```

3. Adicione o script antes do fechamento da tag `</body>`, configurando os atributos necessários:

```html
<!-- Exemplo de uso -->
<script 
    src="widget.js" 
    data-phone="553340427011" 
    data-message="Olá! Gostaria de mais informações." 
    data-position="right">
</script>
```

## ⚙️ Configuração

Você pode configurar o widget usando os seguintes atributos `data-` na tag `<script>`:

| Atributo | Descrição | Valor Padrão / Exemplo |
|----------|-----------|------------------------|
| `data-phone` | O número do WhatsApp para contato (com código do país). | `553340427011` |
| `data-message` | Mensagem inicial pré-preenchida. | `Olá! Gostaria de saber mais.` |
| `data-position` | Posição do botão na tela (`right` ou `left`). | Padrão: `right` (se não especificado ou qualquer outro valor) |

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias:

1. Faça um Fork do projeto.
2. Crie uma Branch para sua Feature (`git checkout -b feature/SuaFeature`).
3. Faça o Commit das suas mudanças (`git commit -m 'Adiciona funcionalidade X'`).
4. Faça o Push para a Branch (`git push origin feature/SuaFeature`).
5. Abra um Pull Request.

## 📄 Licença

Este projeto está registrado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

