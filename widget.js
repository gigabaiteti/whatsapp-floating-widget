/**
 * WhatsApp Widget
 * Easy to adapt script to add a floating WhatsApp button.
 */

(function() {
    // Configuration
    const scriptTag = document.currentScript || document.querySelector('script[src*="whatsapp-widget.js"]');
    const config = {
        phoneNumber: scriptTag.getAttribute('data-phone'),
        message: scriptTag.getAttribute('data-message'),
        position: scriptTag.getAttribute('data-position'),
    };

    /**
     * Initializes the widget
     */
    function initWhatsAppWidget() {
        // Create the anchor element
        const link = document.createElement('a');
        
        // Format the URL for WhatsApp API
        // Using api.whatsapp.com works for both mobile and desktop usually, or wa.me
        const encodedMessage = encodeURIComponent(config.message);
        const url = `https://wa.me/${config.phoneNumber}?text=${encodedMessage}`;
        
        link.href = url;
        link.target = '_blank'; // Open in new tab
        link.className = 'whatsapp-widget-btn';
        link.setAttribute('aria-label', 'Chat on WhatsApp');

        // Create the SVG Icon
        // WhatsApp SVG Icon path
        link.innerHTML = `
            <svg class="whatsapp-widget-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-57.1-157zM223.9 438.6c-33.6 0-66.5-9-95.3-26.1l-6.8-4-70.8 18.6 18.8-69.1-4.4-7c-19.1-30.4-29.2-66-29.2-103 0-105.8 86.1-191.9 192-191.9 51.2 0 99.3 20 135.5 56.2 36.2 36.2 56.2 84.2 56.2 135.5 0 105.9-86.2 192-192 192zm104.5-144.1c-5.7-2.9-33.8-16.7-39.1-18.6-5.3-1.9-9.1-2.9-13 2.9-3.8 5.7-14.8 18.6-18.1 22.5-3.4 3.8-6.7 4.3-12.4 1.4-26.4-13.2-43.8-23.4-61.9-55.5-2.3-4.1-.2-6.4 2.6-9.2 2.6-2.6 5.7-6.7 8.6-10.1 2.8-3.4 3.8-5.7 5.7-9.6 1.9-3.8.9-7.2-.5-10.1-1.4-2.9-13-31.3-17.8-42.9-4.7-11.2-9.5-9.7-13-9.7-3.3 0-7.2.1-11 .1-3.8 0-10 1.4-15.3 7.2-5.3 5.7-20.3 19.8-20.3 48.3 0 28.5 20.3 56 20.3 59.8 0 0 33.3 50.9 80.7 71.3 32.2 13.9 38.6 11.1 52.6 10.3 15.3-.8 33.8-13.8 38.6-27.2 4.7-13.2 4.7-24.6 3.4-27.2-1.3-2.5-4.8-4-10.5-6.8z"/>
            </svg>
        `;

        // Handle position config if we wanted to (currently just defaults to class style, but we could override)
        if (config.position === 'left') {
            link.style.right = 'auto';
            link.style.left = '20px';
        }

        // Add to DOM
        document.body.appendChild(link);
    }

    // Run initialization when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWhatsAppWidget);
    } else {
        initWhatsAppWidget();
    }

})();
