# WhatsApp Floating Widget

🔗 Este README também está disponível em: [Português](README.pt.md) | [English](README.en.md) | [Español](README.es.md)

🔗 Este README también está disponible en:  [Português](README.pt.md) | [English](README.en.md) | [Español](README.es.md)

🔗 This README is also available in: [Português](README.pt.md) | [English](README.en.md) | [Español](README.es.md)


This is a lightweight and simple floating WhatsApp button widget, developed with pure HTML, CSS, and native JavaScript. It allows your website visitors to contact you directly via WhatsApp with just one click.

## 🚀 Features

- **Zero Dependencies**: Built with Vanilla JS and pure CSS.
- **Easy Integration**: Just add the script and CSS to your project.
- **Configurable**: Set the phone number, initial message, and position via data attributes.
- **SVG Icon**: Crisp and scalable WhatsApp icon.

## 📦 How to Use

1. Download the `widget.js` and `widget.css` files and place them in your project.
2. Add the CSS reference in the `<head>` of your HTML:

```html
<link rel="stylesheet" href="widget.css">
```

3. Add the script before the closing `</body>` tag, configuring the necessary attributes:

```html
<!-- Usage example -->
<script 
    src="widget.js" 
    data-phone="553340427011" 
    data-message="Hello! I would like more information." 
    data-position="right">
</script>
```

## ⚙️ Configuration

You can configure the widget using the following `data-` attributes on the `<script>` tag:

| Attribute | Description | Default Value / Example |
|-----------|-------------|-------------------------|
| `data-phone` | The WhatsApp contact number (with country code). | `553340427011` |
| `data-message` | Pre-filled initial message. | `Hello! I would like to know more.` |
| `data-position` | Button position on the screen (`right` or `left`). | Default: `right` (if unspecified or any other value) |

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements:

1. Fork the project.
2. Create a Branch for your Feature (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add feature X'`).
4. Push to the Branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

