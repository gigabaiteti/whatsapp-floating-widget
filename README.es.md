# WhatsApp Floating Widget

🔗 Este README também está disponível em: [Português](README.pt.md) | [English](README.en.md) | [Español](README.es.md)

🔗 Este README también está disponible en:  [Português](README.pt.md) | [English](README.en.md) | [Español](README.es.md)

🔗 This README is also available in: [Português](README.pt.md) | [English](README.en.md) | [Español](README.es.md)


Este es un widget de botón flotante de WhatsApp ligero y simple, desarrollado con HTML, CSS y JavaScript nativo. Permite que los visitantes de su sitio web lo contacten directamente a través de WhatsApp con un solo clic.

## 🚀 Características

- **Cero Dependencias**: Hecho con Vanilla JS y CSS puro.
- **Fácil Integración**: Simplemente agregue el script y el CSS a su proyecto.
- **Configurable**: Defina el número de teléfono, el mensaje inicial y la posición a través de atributos de datos.
- **Ícono SVG**: Ícono de WhatsApp nítido y escalable.

## 📦 Cómo Usar

1. Descargue los archivos `widget.js` y `widget.css` y colóquelos en su proyecto.
2. Agregue la referencia al CSS en el `<head>` de su HTML:

```html
<link rel="stylesheet" href="widget.css">
```

3. Agregue el script antes del cierre de la etiqueta `</body>`, configurando los atributos necesarios:

```html
<!-- Ejemplo de uso -->
<script 
    src="widget.js" 
    data-phone="553340427011" 
    data-message="¡Hola! Me gustaría obtener más información." 
    data-position="right">
</script>
```

## ⚙️ Configuración

Puede configurar el widget utilizando los siguientes atributos `data-` en la etiqueta `<script>`:

| Atributo | Descripción | Valor Predeterminado / Ejemplo |
|----------|-------------|--------------------------------|
| `data-phone` | El número de contacto de WhatsApp (con código de país). | `553340427011` |
| `data-message` | Mensaje inicial prellenado. | `¡Hola! Me gustaría saber más.` |
| `data-position` | Posición del botón en la pantalla (`right` o `left`). | Predeterminado: `right` (si no se especifica o cualquier otro valor) |

## 🤝 Contribuyendo

¡Las contribuciones son bienvenidas! Si tiene sugerencias o mejoras:

1. Haga un Fork del proyecto.
2. Cree una Rama para su Funcionalidad (`git checkout -b feature/SuFuncionalidad`).
3. Haga Commit de sus cambios (`git commit -m 'Agrega funcionalidad X'`).
4. Haga Push a la Rama (`git push origin feature/SuFuncionalidad`).
5. Abra un Pull Request.

## 📄 Licencia

Este proyecto está registrado bajo la licencia MIT. Vea el archivo [LICENSE](LICENSE) para más detalles.

